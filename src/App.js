import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
  import AlbumsPage from './pages/AlbumsPage'
import PhotosPage from './pages/PhotosPage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AlbumsPage} />
        <Route exact path="/albums/:id" component={PhotosPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
