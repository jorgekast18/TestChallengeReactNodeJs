import React, { Component } from 'react';
import VehicleList from './vehicle-list';
import CreateAndUpdateView from './create-and-update';
import { getAllVehicles, getVehiclesFiltered, createVehicle, editVehicle, deleteVehicle } from '../../services/vehicle-service';

import './vehicle.style.css';
class Vehicle extends Component {
    constructor() {
        super();
        this.state = {
            vehicles: [],
            showCreateAndUpdateView: false,
            vehicle: null,
            action: 'create'
        }
    };

    componentDidMount() {
        this.getVehicles();
    };

    onShowCreateAndUpdateView() {
        this.setState({
            showCreateAndUpdateView: true,
            action: 'create'
        });
    };

    onShowVehicleList() {
        this.setState({
            showCreateAndUpdateView: false
        });
    };

    getVehicles() {
        return getAllVehicles()
            .then(data => {
                this.setState({
                    vehicles: data.data
                });
            });
    };

    async onGetVehicleByFilter(filterType, filterValue) {
        if (filterValue && filterValue.length > 0) {
            const data = await getVehiclesFiltered(filterType, filterValue);
            this.setState({
                vehicles: data.data
            });
        } else {
            this.getVehicles();
        }
    };

    onSaveVehicle(color, brand, line, model, licensePlate, action) {
        if (action === 'create') {
            createVehicle(color, brand, line, model, licensePlate)
                .then(data => {
                    this.onShowVehicleList();
                    setTimeout(() => {
                        this.getVehicles();
                    }, 500)
                })
                .catch(err => {

                })
        }else {
            editVehicle(color, brand, line, model, licensePlate)
                .then(data => {
                    this.onShowVehicleList();
                    setTimeout(() => {
                        this.getVehicles();
                    }, 500)
                })
                .catch(err => {

                })
        }

    };

    onEditItem(vehicle) {
        this.setState({
            vehicle,
            showCreateAndUpdateView: true,
            action: 'update'
        });
    };

    onDeleteVehicle(licensePlate) {
        deleteVehicle(licensePlate)
            .then(data => {
                setTimeout(() => {
                    this.getVehicles();
                }, 500)
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {

        const { vehicles, showCreateAndUpdateView } = this.state;
        return (
            <div className="main-container">
                {
                    showCreateAndUpdateView ?
                        <CreateAndUpdateView
                            action={this.state.action}
                            vehicle={this.state.vehicle}
                            onShowVehicleList={this.onShowVehicleList.bind(this)}
                            onSaveVehicle={this.onSaveVehicle.bind(this)}
                        /> :
                        <VehicleList
                            vehicles={vehicles}
                            onGetVehicleByFilter={this.onGetVehicleByFilter.bind(this)}
                            onShowCreateAndUpdateView={this.onShowCreateAndUpdateView.bind(this)}
                            onEditItem={this.onEditItem.bind(this)}
                            onDeleteVehicle={this.onDeleteVehicle.bind(this)}
                        />
                }
            </div>
        );
    }
}

export default Vehicle;