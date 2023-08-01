// const {userValidate} = require('./validation/user.validation')
const { v4: uuidv4 } = require('uuid');
const express = require('express')
const jose = require('jose')
const app = express()
const bodyParser = require('body-parser')
const passwordHash = require('password-hash');
const { userInfo } = require('os');



let portNo = 5000

users = []
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 
// const userValidate = (req, res, next) => {
//     const {
//         name,
//         password,
//         email
//     } = req?.body
    
//     if (!name) {
//         res.send("Name Required")
//     }
//     if (!password){
//         res.send("Pass Word Required")
//     }
//     if (!email){
//         res.send("Email required")
//     }
//     next()

// }

const getJwtToken = async (data) => {
    const jws = await new jose.CompactSign(
        new TextEncoder().encode(data),
      )
        .setProtectedHeader({ alg: 'ES256' })
        .sign('ES256')
    return jws
}


app.post('/register', async(req, res) => {
    console.log(req.body,'print')
    const body = req.body
    body.id = uuidv4()
    body.password = await passwordHash.generate(body.password);
    users.push(body)
    console.log(users)
    res.send(body)
})


// app.post('/login', (req, res)=>{
//     const body = req.body
//     users.forEach((user) => {
//         if (user.email === body.email){
//             if (passwordHash.isHashed(re))
//         }
//     })
// })


app.listen(portNo, () => {
    console.log(`listening on ${portNo}`)
})