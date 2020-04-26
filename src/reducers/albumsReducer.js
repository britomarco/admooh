import * as actions from '../actions/AlbumsActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  albums: [],
}

export default function albumsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALBUMS:
      return { ...state, loading: true }
    case actions.GET_ALBUMS_SUCCESS:
      return { albums: action.payload, loading: false, hasErrors: false }
    case actions.GET_ALBUMS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
