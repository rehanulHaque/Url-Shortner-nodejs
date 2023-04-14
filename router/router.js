const router = require("express").Router()
const url = require("../models/url")

router.get('/', async (req, res)=>{
    const urls = await url.find({})
    res.render("index", {urls: urls})
})
router.post("/shorturl", async(req, res)=>{
    try {
        await url.create({fullUrl: req.body.full})
        res.redirect("/")
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})

router.get('/:id', async(req, res)=>{
    try {
        const urls = await url.findOne({short: req.params.id})
        res.redirect(urls.fullUrl)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})

router.get("/delete/:id", async(req, res)=>{
    try {
        await url.findByIdAndDelete(req.params.id)
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router