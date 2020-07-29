const axios = require('axios');

const getLugarLatLong = (direccion) => {

const encodeUrl = encodeURI(direccion);
console.log(direccion);

const instance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=892e2ee3270d6574e564fffb8d4bfeda`,
    headers: {'appid': '892e2ee3270d6574e564fffb8d4bfeda'}
  });

instance.get();

const data = resp.data.coord;
const direccion = resp.data;
const latitud = resp.data.coord[1]
const longitud = resp.data.coord[0]

.then((resp => {
    console.log((resp.data.coord));
}))
.catch( err =>{
    console.log(`No hay resultados para ${direccion}`);
})




return {
    direccion,
    latitud,
    longitud
}
}

module.exports = {
    getLugarLatLong
}


