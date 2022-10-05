const authmiddleware = (req, res, next) => {
    if (req.url.startsWith("/products")) {
        if (req.headers.token === "123") {
            next()
        }
        else {
            res.send(401).send("not authorized")
        }
    }
    else {
        res.send("welcome")
        next()
    }
}
module.exports = authmiddleware