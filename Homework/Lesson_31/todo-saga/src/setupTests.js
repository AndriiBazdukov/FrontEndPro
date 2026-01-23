import '@testing-library/jest-dom';

// Mock fetch globally
let mockTodos = [];

global.fetch = jest.fn((url, options = {}) => {
    const method = options.method || 'GET';
    
    if (method === 'GET') {
        // For fetchTodos - return the current mock todos
        return Promise.resolve({
            json: () => Promise.resolve(mockTodos),
        });
    }
    
    if (method === 'POST') {
        // For createTodo
        const body = JSON.parse(options.body);
        const newTodo = {
            id: Date.now(),
            text: body.text,
            completed: body.completed || false,
        };
        mockTodos.push(newTodo);
        return Promise.resolve({
            json: () => Promise.resolve(newTodo),
        });
    }
    
    if (method === 'PUT') {
        // For updateTodo - extract ID from URL and update
        const match = url.match(/\/todos\/(\d+)$/);
        const id = match ? parseInt(match[1]) : null;
        const body = JSON.parse(options.body);
        
        mockTodos = mockTodos.map(t => 
            t.id === id || t.id === body.id ? body : t
        );
        
        return Promise.resolve({
            json: () => Promise.resolve(body),
        });
    }
    
    if (method === 'DELETE') {
        // For deleteTodo - extract ID from URL
        const match = url.match(/\/todos\/(\d+)$/);
        const id = match ? parseInt(match[1]) : null;
        mockTodos = mockTodos.filter(t => t.id !== id);
        return Promise.resolve({
            json: () => Promise.resolve({}),
        });
    }
    
    return Promise.resolve({
        json: () => Promise.resolve(null),
    });
});