
const axios = require('axios');
const { config } = require('yargs');



const argv = require ('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const encodeUrl = encodeURI(argv.direccion);
console.log(argv.direccion);

const instance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=892e2ee3270d6574e564fffb8d4bfeda`,
    headers: {'appid': '892e2ee3270d6574e564fffb8d4bfeda'}
  });

instance.get()
.then((resp => {
    console.log((resp.data.coord));
    const latitud = resp.data.coord.lat;
    const longitud = resp.data.coord.lon;
    const temperatura = (resp.data.main.temp) - 273.15;
    const temper = `La temperatura en ${encodeUrl} es de ${temperatura.toFixed(1)}`

    console.log(latitud);
    console.log(longitud);
    console.log(`${temper}°C`);
 
}))
.catch( err =>{
    console.log('ERROR!!!!!!!');
})


