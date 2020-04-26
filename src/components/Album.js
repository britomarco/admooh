import React from 'react'
import { Link } from 'react-router-dom'

export const Album = ({ post, excerpt }) => (

  <article className={excerpt ? 'post-excerpt' : 'post'}>
    <h2>{post.title}</h2>

    {excerpt && (
      <Link to={`/albums/${post.id}`} className="button">
        View Album
      </Link>
    )}
  </article>

)
