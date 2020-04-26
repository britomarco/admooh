import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPost } from '../actions/PhotosActions'

// import { Album } from '../components/Album'

const PhotosPage = ({
  match,
  dispatch,
  post,
  hasErrors,
  loading,
}) => {
  useEffect(() => {
    const { id } = match.params

    dispatch(fetchPost(id))
  }, [dispatch, match])

  const renderAlbum = () => {
    if (loading.post) return <p>Loading Photos...</p>
    if (hasErrors.post) return <p>Unable to display photo.</p>
    
  return post.map(item => <p key={item.id}>{item.title}</p>)
  }


  return (
    <section>
      {renderAlbum()}
    </section>
  )
}

const mapStateToProps = state => ({


  post: state.post.post,
  loading: { post: state.post.loading},
  hasErrors: { post: state.post.hasErrors },

  
})

export default connect(mapStateToProps)(PhotosPage)
