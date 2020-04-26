import * as actions from '../actions/AlbumsActions'

describe('actions', () => {

  it('should create an action to GET_ALBUMS_SUCCESS', () => {
    const albums = []
    const expectedAction = {
      payload: [],
      type: actions.GET_ALBUMS_SUCCESS
    }
    expect(actions.getAlbumsSuccess(albums)).toEqual(expectedAction)
  })

  it('should return type action GET_ALBUMS', ()=> {

    let GET_ALBUMS = {
      type: 'GET ALBUMS'
    }

    expect(actions.getAlbums()).toEqual(GET_ALBUMS)
  })

  it('should return type action GET_ALBUMS_FAILURE', ()=> {

    let GET_ALBUMS_FAILURE = {
      type: 'GET_ALBUMS_FAILURE'
    }

    expect(actions.getAlbumsFailure()).toEqual(GET_ALBUMS_FAILURE)
  })

})