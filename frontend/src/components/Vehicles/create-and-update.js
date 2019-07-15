import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
    TextField,
    Button
} from '@material-ui/core';
import './vehicle.style.css';

class CreateAndUpdateView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: props.vehicle ? props.vehicle.color : '',
            brand: props.vehicle ? props.vehicle.brand : '',
            line: props.vehicle ? props.vehicle.line : '',
            model: props.vehicle ? props.vehicle.model : '',
            license_plate: props.vehicle ? props.vehicle.license_plate : '',
            action: props.action || 'create'
        };
        
    }

    handleForm(field, value) {
        this.setState({ [field]: value });
    };

    showVehicleList() {
        this.props.onShowVehicleList();
    }

    saveVehicle() {
        const color = this.state.color;
        const brand = this.state.brand;
        const line = this.state.line;
        const model = this.state.model;
        const licensePlate = this.state.license_plate;
        const action = this.state.action;

        this.props.onSaveVehicle(color, brand, line, model, licensePlate, action);
    }

    render() {
        return (
            <Grid>
                <Row start="xs">
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.showVehicleList.bind(this)}
                        >
                            Back
                        </Button>
                    </div>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <TextField
                            id="brand"
                            label="Color"
                            value={this.state.color}
                            margin="normal"
                            onChange={event => this.handleForm('color', event.target.value)}
                        />
                    </Col>
                    <Col xs={12} md={12}>
                        <TextField
                            id="brand"
                            label="Brand"
                            value={this.state.brand}
                            margin="normal"
                            onChange={event => this.handleForm('brand', event.target.value)}
                        />
                    </Col>
                    <Col xs={12} md={12}>
                        <TextField
                            id="line"
                            label="Line"
                            value={this.state.line}
                            margin="normal"
                            onChange={event => this.handleForm('line', event.target.value)}
                        />
                    </Col>
                    <Col xs={12} md={12}>
                        <TextField
                            id="model"
                            label="Model"
                            value={this.state.model}
                            margin="normal"
                            onChange={event => this.handleForm('model', event.target.value)}
                        />
                    </Col>
                    <Col xs={12} md={12}>
                        <TextField
                            id="license_plate"
                            label="License Plate"
                            value={this.state.license_plate}
                            margin="normal"
                            onChange={event => this.handleForm('license_plate', event.target.value)}
                        />
                    </Col>
                </Row>
                <Row end="xs">
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.saveVehicle.bind(this)}
                        >
                            Save
                        </Button>
                    </div>
                </Row>
            </Grid >
        );
    }
}

export default CreateAndUpdateView;