
import API_URL from '../config/index'

export const GET_POSTS = 'GET POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const getPosts = () => ({ type: GET_POSTS })
export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
})
export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE })

export function fetchAlbums() {
  return async dispatch => {
    dispatch(getPosts())

    try {
      const response = await fetch(`${API_URL}/albums`)
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}
