import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchAlbums } from '../actions/AlbumsActions'

import { Album } from '../components/Album'

const AlbumsPage = ({ dispatch, loading, albums, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchAlbums())
  }, [dispatch])

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>

    return albums.map(album => <Album key={album.id} album={album} excerpt />)
  }

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.posts.loading,
  albums: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(AlbumsPage)
