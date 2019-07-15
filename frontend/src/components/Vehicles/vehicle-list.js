import React from 'react';
import VehicleTable from './vehicle-table';
import FilterVehicle from './filter-vehicle';
import './vehicle.style.css';

const vehicleList = ({ vehicles, onGetVehicleByFilter, onShowCreateAndUpdateView, onEditItem, onDeleteVehicle }) => {

    return (
        <div className="main-container">
            <FilterVehicle
                onGetVehicleByFilter={onGetVehicleByFilter}
            />
            <VehicleTable
                vehicles={vehicles}
                onShowCreateAndUpdateView={onShowCreateAndUpdateView}
                onEditItem={onEditItem}
                onDeleteVehicle={onDeleteVehicle}
            />
        </div>
    )
};

export default vehicleList;