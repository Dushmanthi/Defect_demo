import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../tasks/defectConfig.css';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Transitions() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
        <h2>Defect Type Configuration</h2>
      <button type="button" className="btn" onClick={handleOpen}>
        Add Defect Type
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add Defect Type</h2>
            
            <div>
<form className=" "  >
    <div >

<label>Type Name</label>
<input type="text" id="" className="" placeholder="Type Name"></input>
<br/>

<label>Description</label>
<input type="text" id=""  className="" placeholder="Description"></input>
<br/>

</div>
</form>
<input type="submit" className="" value="Cancel" onClick="onClose"></input>
<input type="submit" className="" value="OK" onclick=""></input>





            </div>
          </div>
        </Fade>
      </Modal>
    </div>



  );
}