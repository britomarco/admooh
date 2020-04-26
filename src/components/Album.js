import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import './album.scss'

export const Album = ({album}) => (

  <Grid container item xs={12} sm={3} className='item-album' spacing={1}>
      <Link to={`/albums/${album.id}`}>
          <h2>{album.title}</h2>
      </Link>
  </Grid>

)
