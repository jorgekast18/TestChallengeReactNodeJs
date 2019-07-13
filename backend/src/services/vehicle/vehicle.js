// Requires
var express = require('express');
var app = express();
var vehicles = require('../../data/vehicle-model.json')

// Import utils
var utils = require('../../utils/utils');

// Global variables
var pathFileData = './src/data/vehicle-model.json';

// Get all vehicles
app.get('/', (req, res) => {
    
    if(vehicles && vehicles.length <= 0){
        return res.status(200).json({
            succes: true,
            message: 'The list of the vehicles is empty.',
            data: {}
        })
    }

    res.status(200).json({
        ok: true,
        data: vehicles
    });
});

// Get vehicle by any propierty
app.get('/filterVehicle', (req, res) => {
    
    var expectFilterType = ['color', 'brand', 'line', 'model', 'license_plate'],
        filterType = req.query.filterType,
        filterValue = req.query.filterValue;

    if(expectFilterType.includes(filterType)) {
        // Call function to filter array
        utils.filterVehicle(vehicles, filterType, filterValue)
            .then( response => {
                res.status(200).json({
                    succes: true,
                    data: response
                });
            })
            .catch( err => {
                res.status(404).json({
                    succes: false,
                    message: err.message
                });
            })
    } else{
        return res.status(400).json({
            succes: false,
            message: "Must provide any enum 'color', 'brand',  'line', 'model' or 'license_plate' filter."
        })
    }
});

// Create a new vehicle
app.post('/create', (req, res) => {

    var color = req.body.color,
        brand = req.body.brand,
        line = req.body.line,
        model = req.body.model,
        licensePlate = req.body.licensePlate;

    if(color && brand && line && model && licensePlate){
        var newVehicle = {
            color,
            brand,
            line,
            model,
            license_plate: licensePlate
        }
        
        // Include new vehicle in array of vehicles
        vehicles.push(newVehicle);

        // Write in JSON file
        utils.inputNewRegisterInJsonFile(pathFileData, vehicles);

        res.status(200).json({
            succes: true,
            message: "The vehicle has been created success."
        })
    } else{
        res.status(400).json({
            succes: false,
            message: "Must provide the next params 'color', 'brand',  'line', 'model' or 'license_plate'."
        })
    }
});

// Update a vehicle by license plate
app.post('/update', (req, res) => {

    var licensePlate = req.body.licensePlate,
        color = req.body.color,
        brand = req.body.brand,
        line = req.body.line,
        model = req.body.model;

    if(licensePlate){
        var index = vehicles.findIndex( (result) => {
            return String(result.license_plate).toUpperCase() === String(licensePlate).toUpperCase()
        });
        
        if(index > -1) {
            vehicles[index].color = color ? color : vehicles[index].color;
            vehicles[index].brand = brand ? brand : vehicles[index].brand;
            vehicles[index].line = line ? line : vehicles[index].line;
            vehicles[index].model = model ? model : vehicles[index].model;

            // Write in JSON file
            utils.inputNewRegisterInJsonFile(pathFileData, vehicles);

            res.status(200).json({
                succes: true,
                message: "The vehicle has been updated success."
            });
        } else {
            res.status(404).json({
                succes: false,
                message: `Could not update because does not exist a vehicle with license plate ${licensePlate}`
            });
        }
    } else {
        res.status(400).json({
            succes: false,
            message: "Must provide the licensePlate param."
        });
    }
});

// Delete one vehicle by license plate
app.post('/delete', (req, res) => {
    var licensePlate = req.body.licensePlate;

    if(licensePlate){
        var index = vehicles.findIndex( (result) => {
            return String(result.license_plate).toUpperCase() === licensePlate.toUpperCase()
        });
        
        if(index > -1) {
            vehicles = vehicles.filter( (result) => {
                return String(result.license_plate).toUpperCase() !== String(licensePlate)
            });

            // Write in JSON file
            utils.inputNewRegisterInJsonFile(pathFileData, vehicles);

            res.status(200).json({
                succes: true,
                message: `The vehicle with license plate ${licensePlate} has been deleted success.`
            });
        } else {
            res.status(404).json({
                succes: false,
                message: `Could not update because does not exist a vehicle with license plate ${licensePlate}`
            });
        }
    } else {
        res.status(400).json({
            succes: false,
            message: "Must provide the licensePlate param."
        });
    }

});

module.exports = app;