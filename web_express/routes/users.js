const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('User list')
})


// router.get('/new', (req, res) => { 
//     res.send('User New Form')
// })

router.get('/new', (req, res) => { 
    res.render('users/new', {firstName: 'Test'})
})

//put this code below above the /:id route because if not, you will get a 404 error. the code read from top to bottom
router.post('/', (req, res) => {
    // res.send('Create User')
    const isValid = false
    if(isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else{
        console.log('Error')
        res.render('users/new', {firstName: req.body.firstName})
    }    
    // console.log(req.body.firstName)
    // res.send('Hi')
})

//clean code for router
router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`)
    })

//if you use dynamic routing make sure the method is put below after you declare the first one

// messy code for router same as above

// router.get('/:id', (req, res) => {
//     res.send(`Get User With ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`Update User With ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     res.send(`Delete User With ID ${req.params.id}`)
// })

const users = [{name: 'Budi'}, {name: 'Joko'}]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router