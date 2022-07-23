const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Chi-Nese Palace',
        city: 'Raleigh',
        state: 'NC',
        cuisine: 'Cantonese and Southern Chinese',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Jap-A-Nese Su-shi',
        city: 'Cary',
        state: 'NC',
        cuisine: 'Japanese Hibachi and Sushi',
        pic: 'http://placekitten.com/250/250'  
    }, {
        name: 'I-Talian Battallion',
        city: 'Garner',
        state: 'NC',
        cuisine: 'Traditional Italian',
        pic: 'http://placekitten.com/250/250'  
    }, {
        name: 'Da Merrican Way',
        city: 'Durham',
        state: 'NC',
        cuisine: 'Burger Joint',
        pic: 'http://placekitten.com/250/250'  
    }, {
        name: 'Rock-N-Roll',
        city: 'Charlotte',
        state: 'NC',
        cuisine: 'Japanese Fusion',
        pic: 'http://placekitten.com/250/250'  
    }, {
        name: 'B-Spot',
        city: 'Raleigh',
        state: 'NC',
        cuisine: 'Burgers and Hot Dogs ',
        pic: 'http://placekitten.com/250/250'  
    }]
    res.render('places/index', { places })
  })
  

module.exports = router
