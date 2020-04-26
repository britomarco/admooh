import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchAlbums } from '../actions/AlbumsActions'

import { Album } from '../components/Album'
import Grid from '@material-ui/core/Grid'

const AlbumsPage = ({ dispatch, loading, albums, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchAlbums())
  }, [dispatch])

  const renderAlbums = () => {
    if (loading) return <p>Loading albums...</p>
    if (hasErrors) return <p>Unable to display albums.</p>

    return(
      <Grid 
        container   
        spacing={3}
        justify="center" 
        className="gutter-16" 
        item
      >
        {albums.map(album => <Album key={album.id} album={album} />)}
      </Grid>
    )   
  }

  return (
    <section>
      {renderAlbums()}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.albums.loading,
  albums: state.albums.albums,
  hasErrors: state.albums.hasErrors,
})

export default connect(mapStateToProps)(AlbumsPage)
