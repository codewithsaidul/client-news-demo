import jwt from "jsonwebtoken"


export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return { valid: true, decoded}
    } catch (error) {
        return { valid: false, error}
    }
}