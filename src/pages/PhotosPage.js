import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'

import { fetchPhoto } from '../actions/PhotosActions'

import { Photo } from '../components/Photo'

const PhotosPage = ({
  match,
  dispatch,
  photo,
  hasErrors,
  loading,
}) => {
  useEffect(() => {
    const { id } = match.params

    dispatch(fetchPhoto(id))
  }, [dispatch, match])

  const renderAlbum = () => {
    if (loading.photo) return <p>Loading Photos...</p>
    if (hasErrors.photo) return <p>Unable to display photo.</p>
    
    return(
      <Grid 
        container   
        spacing={3}
        justify="center" 
        className="gutter-16" 
        item
      >
        {photo.map(item => <Photo key={item.id} photo={item} />)}
      </Grid>
    )   
  }


  return (
    <section>
      {renderAlbum()}
    </section>
  )
}

const mapStateToProps = state => ({


  photo: state.photo.photo,
  loading: { photo: state.photo.loading},
  hasErrors: { photo: state.photo.hasErrors },

})

export default connect(mapStateToProps)(PhotosPage)
