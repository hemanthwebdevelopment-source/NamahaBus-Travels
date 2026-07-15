function isOwner(req, res, next) {
    console.log(req.cookies);

    try {
        if (!req.cookies.token) {
            return res.status(401).send("You must login");
        }

        const data = jwt.verify(req.cookies.token, "shhhhh");

        console.log(data);

        if (data.email !== OWNER) {
            return res.status(403).send("Access Denied");
        }

        req.user = data;
       next();
    } catch (err) {
        console.log(err);
        return res.status(401).send("Invalid Token");
    }
}

module.exports = isOwner;