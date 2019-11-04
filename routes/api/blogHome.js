const router = require("express").Router();

// Load blog post model
const BlogPost = require("../../model/BlogPost");

// @route GET api/blogHome
// @description Get all blog posts
// @access Public
router.get("/", (req, res) => {
  console.log("Get all blogposts");
  BlogPost.find()
    .then(blogPosts => res.json(blogPosts))
    .catch(err => res.status(404).json({ error: "No Posts Were Found" }));
});

// @route GET api/blogHome
// @description Get a single blog post
// @access Public
router.get("/:id", (req, res) => {
  console.log("Getting single post");
  BlogPost.findById(req.params.id)
    .then(blogPost => res.json(blogPost))
    .catch(err => res.status(404).json({ error: "No Blog Post Was Found" }));
});

// @route POST api/blogHome
// @description Add new blog post
// @access Public
router.post("/", (req, res) => {
  console.log("Adding new blog post");
  BlogPost.create(req.body)
    .then(blogPost => res.json({ msg: "Blog post added successfully" }))
    .catch(err => res.status(400).send("Unable to save data"));
});

// @route GET api/blogHome/:id
// @description Delete blog post
// @access Public
router.delete("/:id", (req, res) => {
  console.log("Deleteing " + req.params.id);
  BlogPost.findByIdAndDelete(req.params.id)
    .then(blogPost => res.json({ msg: "Blog post deleted successfully" }))
    .catch(err => res.status(404).json({ error: "No such blog post exists" }));
});

// @route GET api/blogHome/:id
// @description Update blog post
// @access Public
router.put("/:id", (req, res) => {
  console.log("Updating " + req.params.id);
  BlogPost.findByIdAndUpdate(req.params.id, req.body)
    .then(blogPost => res.json({ msg: "Blog post updated successfully" }))
    .catch(err => res.status(404).json({ error: "No such blog post exists" }));
});

module.exports = router;
