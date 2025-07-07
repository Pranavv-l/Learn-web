import jwt from 'jsonwebtoken'

function authMiddleware(req,res,next) {
    const token =  req.headers['authorization']
    console.log("reached")
    
    if(!token){return res.status(401).json({message:"token not found"})}

    jwt.verify(token, process.env.JWT_SECRET, (err,decoded) => {
        if(err){return res.status(401).json({message:"Incorrect token"})}

        req.userID = decoded.id
        next()
    })
}
export default authMiddleware