import * as types from './types';

const initialState = {
    list: [],
    loading: false,
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_TODOS:
            return { ...state, loading: true };

        case types.LOAD_TODOS_SUCCESS:
            return { ...state, loading: false, list: action.payload };

        case types.ADD_TODO:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false,
                    },
                ],
            };

        case types.UPDATE_TODO:
            return {
                ...state,
                list: state.list.map(t =>
                    t.id === action.payload.id ? action.payload : t
                ),
            };

        case types.DELETE_TODO:
            return {
                ...state,
                list: state.list.filter(t => t.id !== action.payload),
            };

        case types.CLEAR_TODOS:
            return { ...state, list: [] };

        default:
            return state;
    }
}
