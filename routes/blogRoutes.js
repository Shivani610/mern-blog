const { getAllBlogs, addBlogs, removeBlogs, updateBlogs } = require("../controllers/blogControllers")

const router = require("express").Router()
router
    .get("/", getAllBlogs)
    .post("/add", addBlogs)
    .delete("/:blogId", removeBlogs)
    .put("/:blogId", updateBlogs)
module.exports = router