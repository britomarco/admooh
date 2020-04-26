import * as actions from '../actions/AlbumsActions'

describe('actions', () => {

  it('should create an action to get Albums', () => {
    const albums = []
    const expectedAction = {
      payload: [],
      type: actions.GET_ALBUMS_SUCCESS
    }
    expect(actions.getAlbumsSuccess(albums)).toEqual(expectedAction)
  })

})