


const userValidate = (req, res, next) => {
    const {
        name,
        password,
        email
    } = req.body
    
    if (!name) {
        res.send("Name Required")
    }
    if (!password){
        res.send("Pass Word Required")
    }
    if (!email){
        res.send("Email required")
    }
    next()

}

export default userValidate