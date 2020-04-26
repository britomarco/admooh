import reducer from './photosReducer'
import * as actions from '../actions/PhotosActions'


describe('photos reducer', () => {
    
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        loading: true,
        hasErrors: false,
        photo: {},
      }
    )
  })

  it('should handle GET_PHOTO', () => {
    expect(
      reducer({}, {
        type:  actions.GET_PHOTO,
      })
    ).toEqual(
      {
        loading: true 
      }
    )
  })

  it('should handle GET_PHOTOS_FAILURE', () => {
    expect(
      reducer({}, {
        type:  actions.GET_PHOTO_FAILURE,
      })
    ).toEqual(
      {
        loading: false, 
        hasErrors: true 
      }
    )
  })

  it('should handle GET_PHOTOS_SUCCESS', () => {
    expect(
      reducer({}, {
        type:  actions.GET_PHOTO_SUCCESS,
      })
    ).toEqual(
      {
        loading: false, 
        hasErrors: false 
      }
    )
  })

})