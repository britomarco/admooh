
import API_URL from '../config/index'

export const GET_ALBUMS = 'GET ALBUMS'
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS'
export const GET_ALBUMS_FAILURE = 'GET_ALBUMS_FAILURE'

export const getAlbums = () => ({ type: GET_ALBUMS })
export const getAlbumsSuccess = albums => ({
  type: GET_ALBUMS_SUCCESS,
  payload: albums,
})
export const getAlbumsFailure = () => ({ type: GET_ALBUMS_FAILURE })

export function fetchAlbums() {
  return async dispatch => {
    dispatch(getAlbums())

    try {
      const response = await fetch(`${API_URL}/albums`)
      const data = await response.json()

      dispatch(getAlbumsSuccess(data))
    } catch (error) {
      dispatch(getAlbumsFailure())
    }
  }
}
