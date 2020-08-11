const propertiesService = require('../service/properties');

const properties = async (req, res, next) => {
    try {
        if (Object.keys(req.query).length) {
            res.send(await propertiesService.getProperties(req.query));
        } else {
            res.send(await propertiesService.getAllProperties());
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500) && next();
    }
};

module.exports = properties;
