import Users from "../models/authModel.js";

export const authSystem = async (req, res) => {
    const {name, email, googleId, userImage} = req.query;

    console.log(req.query)

    const query = {googleId},
        update = {userImage, name, email},
        options = {upsert: true, new: true}

    Users.findOneAndUpdate(query, update, options, (err, usuario) => {
        if (err) return res.json({error: err})
        res.send({key: 'Approved'})
    })
} 