import { combineReducers } from 'redux'

import albumsReducer from './albumsReducer'
import photoReducer from './photosReducer'

const rootReducer = combineReducers({
  albums: albumsReducer,
  photo: photoReducer,
})

export default rootReducer
