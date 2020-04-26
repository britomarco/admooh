import * as actions from '../actions/PhotosActions'

export const initialState = {
  loading: true,
  hasErrors: false,
  photo: {},
}

export default function photoReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_PHOTO:
      return { ...state, loading: true }
    case actions.GET_PHOTO_SUCCESS:
      return { photo: action.payload, loading: false, hasErrors: false }
    case actions.GET_PHOTO_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
