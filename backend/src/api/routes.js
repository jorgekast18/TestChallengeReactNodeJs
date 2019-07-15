// Import services
const rootService = require('../services/root/root');
const vehicleService = require('../services/vehicle/vehicle');

module.exports = (expressApp) => {
    expressApp.use('/', rootService);
    expressApp.use('/vehicle', vehicleService);

    return expressApp;
};