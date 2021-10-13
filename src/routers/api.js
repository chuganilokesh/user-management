const express = require('express')
const User = require('../models/user')
const validate  =require('./validate.js') 
const router = new express.Router() 


 //task 1
router.post('/sign_up', async (req, res) => {
    try {
    const data =  req.body
 
  if(!validate.validateSignUp(data))  res.status(400).send({"success":false})
    else{
    const user = new User(data)
    await user.save()
    res.status(201).send({"success" :true})
    }
    } catch (e) {
      console.log(e)
        res.status(400).send({"success":false})  
    }
})



//task 2
router.post('/sign_in', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password) // trigger to compare password with bcrypted value
        if(user)
        res.status(200).send({"success":true})

        else res.status(400).send({"success":false})
    } catch (e) {
        res.status(400).send({"success":false})
    }
})



//task 3
router.post('/clean',  async (req, res) => {
      try{
    await User.deleteMany(); 
    res.status(200).send({"success":true})
      }

      catch(e){
        res.status(400).send({"success":false})
      }
    })


module.exports = router