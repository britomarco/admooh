import { combineReducers } from 'redux'

import albumsReducer from './albumsReducer'
import albumReducer from './albumReducer'

const rootReducer = combineReducers({
  posts: albumsReducer,
  post: albumReducer,
})

export default rootReducer
