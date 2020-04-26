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

  it('should return type action GET_PHOTO', ()=> {

    let GET_PHOTO = {
      type: 'GET PHOTO'
    }

    expect(actions.getPhoto()).toEqual(GET_PHOTO)
  })

  it('should return type action GET_PHOTO_FAILURE', ()=> {

    let GET_PHOTO_FAILURE = {
      type: 'GET_PHOTO_FAILURE'
    }

    expect(actions.getPhotoFailure()).toEqual(GET_PHOTO_FAILURE)
  })


})