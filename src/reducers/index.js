import { combineReducers } from 'redux'

import photosReducer from './photosReducer'
import albumReducer from './albumReducer'

const rootReducer = combineReducers({
  posts: photosReducer,
  post: albumReducer,
})

export default rootReducer
