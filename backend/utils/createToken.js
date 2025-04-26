import jwt from 'jsonwebtoken';


const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, jwtKey,{expiresIn:"4h"},(err,token))
}

export default generateToken;