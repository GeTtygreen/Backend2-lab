const express = require('express')
const cors = require('cors')
const {getHouses,createHouse,updateHouse,deleteHouse} = require('./controller')

const app = express(); 

app.use(cors());
app.use(express.json());

const house = require('./db.json')

app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.delete('/api/houses/:id',deleteHouse)
app.put('/api/houses/:id',updateHouse)


app.listen (4004,()=>console.log('server running on 4004'))