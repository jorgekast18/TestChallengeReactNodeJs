import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
    Select,
    MenuItem,
    TextField,
    Button
} from '@material-ui/core';
import './vehicle.style.css';

class FilterVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Color', code: 'color' },
                { name: 'Brand', code: 'brand' },
                { name: 'Line', code: 'line' },
                { name: 'Model', code: 'model' },
                { name: 'License Plate', code: 'plicense_plate' },
            ],
            selected: 'color',
            searchValue: ''

        };
    }

    handleChange = event => {
        this.setState({ selected: event.target.value, name: event.target.name });
    };

    renderOptions() {
        return this.state.data.map((item, index) => (
            <MenuItem
                label="Select a filter"
                value={item.code}
                key={index} name={item.name}>{item.name}
            </MenuItem>
        ));
    };

    handleSearchValue = event => {
        this.setState({ searchValue: event.target.value });
    };

    searchFilterBy() {
        const filterType = this.state.selected;
        const filterValue = this.state.searchValue;

        this.props.onGetVehicleByFilter(filterType, filterValue);
    };
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={3} className="center-item">
                        <h3>Filter by</h3>
                    </Col>
                    <Col xs={12} md={3} className="center-item">
                        <Select
                            value={this.state.selected}
                            onChange={this.handleChange}>
                            {this.renderOptions()}
                        </Select>
                    </Col>
                    <Col xs={12} md={3} style={{paddingBottom: '20px'}}>
                        <TextField
                            id="search-filter"
                            label="Search value"
                            value={this.state.searchValue}
                            margin="normal"
                            onChange={this.handleSearchValue}
                        />
                    </Col>
                    <Col xs={12} md={3} position='sticky' className="center-item">
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={this.searchFilterBy.bind(this)}
                        >
                            Search
                        </Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default FilterVehicle;