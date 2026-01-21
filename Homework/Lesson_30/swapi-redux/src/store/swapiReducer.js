import axios from 'axios';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';
const CLEAR = 'CLEAR';

export const swapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true, error: null };

    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };

    case CLEAR:
      return initialState;

    default:
      return state;
  }
};

export const fetchSwapi = endpoint => async dispatch => {
  dispatch({ type: FETCH_START });

  try {
    const res = await axios.get(`https://swapi.info/api/${endpoint}`);
    dispatch({ type: FETCH_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: FETCH_ERROR, payload: e.message });
  }
};

export const clearData = () => ({ type: CLEAR });