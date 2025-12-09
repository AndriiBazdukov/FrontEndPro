const form = document.querySelector('.js--form');
const input = document.querySelector('.form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper')

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todosWrapper.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item' + (todo.checked ? ' todo-item--checked' : '');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.checked;
        checkbox.addEventListener('change', () => {
            todos[index].checked = checkbox.checked;
            update();
        });

        const span = document.createElement('span');
        span.className = 'todo-item__description';
        span.textContent = todo.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'todo-item__delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            update();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        todosWrapper.appendChild(li);
    })
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function update() {
    saveTodos();
    renderTodos();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let text = input.value.trim();
    if (text !== '') {
        todos.push({ text, checked: false });
        update();
        input.value = '';
    }
})
renderTodos();