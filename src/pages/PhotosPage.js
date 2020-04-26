import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPhoto } from '../actions/PhotosActions'

// import { Album } from '../components/Album'

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
    
  return photo.map(item => <p key={item.id}>{item.title}</p>)
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
