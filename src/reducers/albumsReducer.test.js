import reducer from './albumsReducer'
import * as actions from '../actions/AlbumsActions'


describe('albums reducer', () => {
  
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        loading: false,
        hasErrors: false,
        albums: [],
      }
    )
  })

  it('should handle GET_ALBUMS', () => {
    expect(
      reducer({}, {
        type:  actions.GET_ALBUMS,
      })
    ).toEqual(
      {
        loading: true, 
      }
    )
  })

  it('should handle GET_ALBUMS_FAILURE', () => {
    expect(
      reducer({}, {
        type:  actions.GET_ALBUMS_FAILURE,
      })
    ).toEqual(
      {
        loading: false, 
        hasErrors: true 
      }
    )
  })

  it('should handle GET_ALBUMS_SUCCESS', () => {
    expect(
      reducer({}, {
        type:  actions.GET_ALBUMS_SUCCESS,
      })
    ).toEqual(
      {
        loading: false, 
        hasErrors: false 
      }
    )
  })

})