const house = require('./db.json')
let idCounter = 4

module.exports = {
    getHouses:(req, res)=>{
       res.status(200).send(house)
    },
    deleteHouse: (req, res)=>{
    let {id}=req.params
    let index = house.findIndex(idcounter => +house.id === +id)
    house.splice(index,1)
    res.status(200).send(house)
    },
    createHouse:(req, res)=>{
        const{address,price,imageUrl}= req.body
        let newHouse ={
            id:idCounter,
            address:address,
            price:price,
            imageUrl:imageUrl,
        }
        house.push(newHouse)
        res.status(200).send(house)
        idCounter++
    },
    updateHouse:(req, res)=>{
        let {id}=req.params
        let {type}= req.body
        let index = house.findIndex(house => +house.id === +id)
        if (house[index].price === 454615 && type == 'plus' ){
            res.status(400).send('its as high as it goes man')
        }else if (house[index].price === 0 && type =='minus'){
            res.status(400).send('how low you trying to get the house for damn')
            
        }else if (type === 'plus'){
            house[index].price++
            res.status(200).send(house)
        }else if (type === 'minus'){
            house[index].price--
            res.status(200).send(house)
        }else {
            res.sendStatus(404)
        }
    }


}

// const {
//     getHouses,
//     deleteHouse, 
//     createHouse, 
//     updateHouse
// } = require('./controller.js')
