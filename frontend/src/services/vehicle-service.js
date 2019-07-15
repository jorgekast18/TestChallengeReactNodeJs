import { API_URL } from '../constants/api_config';
import axios from 'axios';

export const apiGet = url => () => fetch(url).then(v => v.json())

export const getAllVehicles = () => {

    const url = `${API_URL}vehicle`;
    return axios.get(url)
        .then((response) => response.data);
};

export const getVehiclesFiltered = (filterType, filterValue) => {

    let url = `${API_URL}vehicle/filterVehicle/`;
    url = `${url}?filterType=${filterType}&filterValue=${filterValue}`;

    return axios.get(url)
        .then((response) => response.data);
};

export const createVehicle = (color, brand, line, model, licensePlate) => {

    let url = `${API_URL}vehicle/create`;

    const data = {
        color,
        brand,
        line,
        model,
        licensePlate
    };
    
    return axios.post(url, data)
        .then( response => response.data)
        .catch( err => {
            console.log(err)
        })
};

export const editVehicle = (color, brand, line, model, licensePlate) => {

    let url = `${API_URL}vehicle/update`;

    const data = {
        color,
        brand,
        line,
        model,
        licensePlate
    };
    
    return axios.post(url, data)
        .then( response => response.data)
        .catch( err => {
            console.log(err)
        })
};

export const deleteVehicle = (licensePlate) => {

    let url = `${API_URL}vehicle/delete`;

    const data = {
        licensePlate
    };
    
    return axios.post(url, data)
        .then( response => response.data)
        .catch( err => {
            console.log(err)
        })
};


