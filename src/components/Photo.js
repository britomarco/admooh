import React from 'react'
import Grid from '@material-ui/core/Grid'

export const Photo = ({photo}) => (
    <>
        <Grid container item xs={12} sm={3} className='item-album' spacing={1}>
                <h2>
                    {photo.title}
                </h2>
        </Grid>
    </>
)
