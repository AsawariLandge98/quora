const express = require("express");
const app = express();
const port = 8080;

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let posts = [
    {
        username: "apnacollege",
        content: "i love coding"
    },
    {
        username: "asawarilandge",
        content: "I love coding"
    },
    {
        username: "rajan",
        content: "i love sona"
    },
];

// GET route for displaying all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// GET route for displaying the new post form
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// POST route for adding new posts
app.post("/posts", (req, res) => {
    const { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");  // Redirect to the posts page after adding a new post
});

app.listen(port, () => {
    console.log("listening on port: 8080");
});
