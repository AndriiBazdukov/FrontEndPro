const initialState = {
    list: [],
    loading: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_TODOS':
            return { ...state, loading: true };

        case 'LOAD_TODOS_SUCCESS':
            return { list: action.payload, loading: false };

        case 'ADD_TODO_SUCCESS':
            return { ...state, list: [...state.list, action.payload] };

        case 'UPDATE_TODO_SUCCESS':
            return {
                ...state,
                list: state.list.map(t =>
                    t.id === action.payload.id ? action.payload : t
                ),
            };

        case 'DELETE_TODO_SUCCESS':
            return {
                ...state,
                list: state.list.filter(t => t.id !== action.payload),
            };

        case 'CLEAR_TODOS_SUCCESS':
            return { ...state, list: [] };

        default:
            return state;
    }
}