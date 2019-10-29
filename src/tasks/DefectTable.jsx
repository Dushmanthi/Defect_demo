import React, { useState } from 'react';

// import PopupModal from './employee/edit_employee';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(2),
    width: '95%',
    overflowX:'auto',
    paddingTop: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(4),
    
   
  },
  table: {
    minWidth: 500,
  },
}));

function createData(defecttype, description, action) {
  return { defecttype, description,action };

}

const rows = [
  createData('D1','login error'),
  createData('D2','syntax error'),
  createData('D3','server error'),
];

export default function DenseTable() {
  const classes = useStyles();
  const [open,setOpen]=useState(false)

  const handleClose = () => {
    setOpen(false);
  };

  const handleClicks =()=>{
    setOpen(true)
    console.log(open)
  }
  return (
    
    <div className={classes.root} class="paper">

      <Paper className={classes.paper} align="center" >
        <Table className={classes.table} size="small" aria-label="a dense table">
           
          <TableHead>
            <TableRow>
              <TableCell align="center"><strong>DefectType</strong> </TableCell>
              <TableCell align="center"><strong>Description</strong></TableCell>
              <TableCell align="center"><strong>Action</strong> </TableCell> 
              {/* <TableCell align="right"><strong>Delete</strong> </TableCell> */}
            </TableRow>
          </TableHead>
        
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
            {/* <TableCell component="th" scope="row">
                  {row.name}
                </TableCell> */}
                <TableCell align="center">{row.defecttype}</TableCell>
                <TableCell align="center">{row.description}</TableCell>
                 <TableCell align="center" onClick={handleClicks}>{row.action} <i><EditOutlinedIcon /></i><i><RestoreFromTrashIcon/></i></TableCell>
                 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      {/* <EditEmployee status={open} closes={handleClose}/> */}
    </div>
  );
}