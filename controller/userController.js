const Users = require('../models/users')

const userLogin = (req, res) => {
    res.render('login', {title: 'Login User'})
}

const userSign = (req, res) => {
    res.render('signup', {title: 'SignUp User'})
}

const userDashboard = (req, res) => {
    res.render('dashboard', {title: 'SignUp User'})
}

const addNewRecord = (req, res) => {
    res.render('record', {title: 'Add New Record'})
}

const userRegister = (req, res) => {
    // check password here

    const user = new Users({
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname,
        usertype: "user",
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        contactNumber: req.body.phoneNumber,
        emailAddress: req.body.email,
        hashedKey: "ZoomZoom",
        bio: req.body.bio
    })

    user.save()
        .then(result => {
            console.log(result)
            res.redirect('/users/login')
        })
        .catch(err => {
            console.log('err => '+err)

        })

}


const userLoginEndpoint = (req, res) => {
    const username = req.body.username
    const password = req.body.password 

    Users.find({})
        .then()
        .catch(err => {
            console.log(err)
            res.render('login', {error: 'Wrong Username or Password'})
        })
}


module.exports = {
    userLogin,
    userSign,
    userRegister,
    userDashboard,
    addNewRecord
}