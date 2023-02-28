const express = require("express");
const { AdModel } = require("../model/user.model");
const AdRoute = express.Router();
AdRoute.post("/post", async (req, res) => {
    try {
        const new_ad = new AdModel(req.body);
        await new_ad.save();
        res.send(req.body)
    } catch (error) {
        res.send(error)
    }
})
AdRoute.delete("/delete/:id", async (req, res) => {
    const _id = req.params.id
    try {
        await AdModel.findByIdAndDelete({ _id: _id });
        res.send({ "msg": "deleted" })
    } catch (error) {
        res.send(error)
    }
})
AdRoute.get("/get", async (req, res) => {
    const { page, limit, fil, sort, order } = req.query;
    console.log(page, limit, fil, sort, order)
    try {
        if (fil!==undefined) {
            const ads = await AdModel.find({ category:fil }).skip((page - 1) * limit).limit(4).sort({ [sort]: order })
            res.send(ads)
        } else {
            const ads = await AdModel.find().skip((page - 1) * limit).limit(4).sort({ [sort]: order })
            res.send(ads)
        }

    } catch (error) {
        res.send(error)
    }
})
AdRoute.get("/get/:name", async (req, res) => {
    const name = req.params.name
    try {
        const ad = await AdModel.find({ name: name })
        res.send(ad)
    } catch (error) {
        res.send(error)
    }
})
module.exports = {
    AdRoute
}
