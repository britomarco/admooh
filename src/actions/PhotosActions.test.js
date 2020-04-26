import * as actions from '../actions/PhotosActions'

describe('actions', () => {

  it('should create an action to get Photo', () => {
    const photo = {}
    const expectedAction = {
      payload: {},
      type: actions.GET_PHOTO_SUCCESS
    }
    expect(actions.getPhotoSuccess(photo)).toEqual(expectedAction)
  })

})