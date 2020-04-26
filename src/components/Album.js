import React from 'react'
import { Link } from 'react-router-dom'

export const Album = ({ album, excerpt }) => (

  <article className={excerpt ? 'album-excerpt' : 'album'}>
    <h2>{album.title}</h2>

    {excerpt && (
      <Link to={`/albums/${album.id}`} className="button">
        View Album
      </Link>
    )}
  </article>

)
