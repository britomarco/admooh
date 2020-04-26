import React from 'react'
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal';
import './photo.scss'

export const Photo = ({photo}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

    return(
        <>
            <Grid 
                container 
                item 
                xs={12} 
                sm={3} 
                justify="center" 
                className='item-photo'
                onClick={handleOpen}
            >
                <img src={photo.thumbnailUrl} alt={photo.title}/>
            </Grid>
            
            <Modal
                className="modal-body"
                open={open}
                onClose={handleClose}
                align="center"
                justify="center"
            >
                <div>
                   <img src={photo.url} alt={photo.title}/>
                </div>
            </Modal>
        </>
    )
}
    

