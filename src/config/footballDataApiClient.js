const axios = require('axios');

const client = axios.create({
  baseURL: 'http://api.football-data.org/v4/', // URL base para todos los requests
  timeout: 5000, // Opcional: tiempo máximo de espera para cada solicitud (en milisegundos)
  headers: { // Opcional: cabeceras que se enviarán con cada solicitud
    'Authorization': 'Bearer your_token',
    'Content-Type': 'application/json',
    'X-Auth-Token': process.env.FOOTBALL_DATA_API_TOKEN
  }
});

module.exports = client;