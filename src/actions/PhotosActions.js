import API_URL from '../config/index'

export const GET_PHOTO = 'GET PHOTO'
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS'
export const GET_PHOTO_FAILURE = 'GET_PHOTO_FAILURE'

export const getPhoto = () => ({ type: GET_PHOTO })
export const getPhotoSuccess = photo => ({
  type: GET_PHOTO_SUCCESS,
  payload: photo,
})

export const getPhotoFailure = () => ({ type: GET_PHOTO_FAILURE })

export function fetchPhoto(id) {

  return async dispatch => {
    dispatch(getPhoto())

    try {
      const response = await fetch(
        `${API_URL}/albums/${id}/photos`
      )
      const data = await response.json()
      dispatch(getPhotoSuccess(data))
    } catch (error) {
      dispatch(getPhotoFailure())
    }
  }
}
