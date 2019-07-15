import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import './vehicle.style.css';

const VehicleTable = (props) => {

    const { vehicles, onShowCreateAndUpdateView, onEditItem, onDeleteVehicle } = props;
    const [open, setOpen] = React.useState(false);
    const [vehicleToDelete, setVehicleToDelete] = React.useState(false);

    const openCreateAndUpdateView = () => {
        onShowCreateAndUpdateView();
    }

    const editItem = (vehicle) => {
        onEditItem(vehicle);
    }

    const deleteItem = license_plate => {
        setOpen(true);
        setVehicleToDelete(license_plate)
    }
    
    function handleClose(action) {
        setOpen(false);
        if(action){
            onDeleteVehicle(vehicleToDelete);
        }
    }

    return (
        <Paper>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this item?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={() => handleClose(false)} color="primary">
                        No
                    </Button>
                    <Button onClick={() => handleClose(true)} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            <Table className="table">
                <TableHead>
                    <TableRow>
                        <TableCell>Actions</TableCell>
                        <TableCell>Color</TableCell>
                        <TableCell align="right">Brand</TableCell>
                        <TableCell align="right">Line</TableCell>
                        <TableCell align="right">Model</TableCell>
                        <TableCell align="right">License Plate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {vehicles.map(vehicle => (
                        <TableRow key={vehicle.license_plate}>
                            <TableCell>
                                <Fab
                                    color="primary"
                                    aria-label="Add"
                                    size="small"
                                    onClick={() => editItem(vehicle)}
                                >
                                    <EditIcon />
                                </Fab>
                                <Fab
                                    color="secondary"
                                    aria-label="Add"
                                    size="small"
                                    onClick={() => deleteItem(vehicle.license_plate)}
                                >
                                    <DeleteIcon />
                                </Fab>
                            </TableCell>
                            <TableCell component="th" scope="vehicle">
                                {vehicle.color}
                            </TableCell>
                            <TableCell align="right">{vehicle.brand}</TableCell>
                            <TableCell align="right">{vehicle.line}</TableCell>
                            <TableCell align="right">{vehicle.model}</TableCell>
                            <TableCell align="right">{vehicle.license_plate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div style={{ float: 'right', marginTop: '10px' }}>
                <Fab
                    color="primary"
                    aria-label="Add"
                    onClick={openCreateAndUpdateView}
                >
                    <AddIcon />
                </Fab>
            </div>
        </Paper>
    );
};

export default VehicleTable;
