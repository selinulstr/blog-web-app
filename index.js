import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const posts = [{id: 0, date: "14.08.2024",
                header: "Lorem ipsum dolor sit amet",
                src: "https://picsum.photos/400/350",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum lacus at urna vehicula pulvinar. Aenean nulla libero, ultrices eget tincidunt in, venenatis sit amet elit. Sed volutpat lorem ac magna tincidunt, et interdum diam consectetur. Fusce a felis pharetra urna placerat sodales. Phasellus accumsan scelerisque odio, eu ultricies nulla varius consequat. Etiam nec magna sed mauris pulvinar commodo et sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum lacus at urna vehicula pulvinar. Aenean nulla libero, ultrices eget tincidunt in, venenatis sit amet elit. Sed volutpat lorem ac magna tincidunt, et interdum diam consectetur. Fusce a felis pharetra urna placerat sodales. Phasellus accumsan scelerisque odio, eu ultricies nulla varius consequat. Etiam nec magna sed mauris pulvinar commodo et sed nisi."},

            {id: 1, date: "14.08.2024",
            header: "Proin blandit, ante mollis sollicitudin sagittis",
            src: "https://picsum.photos/200/150",
            content: "Proin blandit, ante mollis sollicitudin sagittis, leo tortor ullamcorper orci, sit amet malesuada massa diam id est. Aliquam mauris lacus, lacinia eget est in, viverra lobortis nisl. Fusce quis rhoncus lacus, et venenatis purus. Praesent posuere urna ac libero tempor pulvinar. Curabitur porttitor congue enim, a commodo augue ultrices a. Curabitur ornare ex ullamcorper urna lobortis, eget aliquet eros tristique. Sed faucibus enim ligula, vel pretium metus suscipit vel. Nunc ac mollis ipsum. Sed sollicitudin nibh sit amet lorem consectetur eleifend. Vivamus malesuada mauris in porttitor dignissim. Proin ac massa ligula. Integer lacinia nulla sem, at viverra sem pellentesque sit amet. Donec nec eleifend magna. Praesent ullamcorper metus eget erat eleifend cursus. Ut fringilla eu dolor vestibulum venenatis. Quisque luctus risus sed lobortis ultricies. Sed et justo erat. Sed ac mollis tortor. Ut imperdiet tristique metus vel finibus. Suspendisse tempor mauris at porttitor viverra. Donec sit amet libero et dolor tincidunt egestas. Nunc blandit leo risus, sit amet fermentum purus ullamcorper rhoncus. Fusce efficitur nunc ac commodo lacinia. Morbi ut nunc non libero rutrum eleifend. Donec non ultrices nibh, at aliquam ex. Aliquam a nisl ac libero laoreet elementum ut eget nunc. Donec molestie diam lacus. Integer sed justo sit amet elit vestibulum convallis. Praesent molestie egestas erat, at aliquam felis lacinia non. Nam pellentesque nibh quis eros rhoncus, quis lobortis justo gravida. Sed pharetra nulla ex. Ut semper nulla in fringilla luctus."},

 {id: 2, date: "15.08.2024", header: "Sed ac euismod urna. Phasellus eu libero fringilla",
    src: "https://picsum.photos/200/150", content: "Sed ac euismod urna. Phasellus eu libero fringilla, ornare augue et, dignissim magna. Ut at erat efficitur, lacinia nulla sit amet, dictum enim. Cras vel metus mollis, maximus diam ut, suscipit nibh. Nullam in risus sed massa iaculis vulputate eu at leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Sed sit amet risus fermentum, ullamcorper lacus eget, mattis elit. Nullam iaculis vulputate erat, eu vestibulum libero maximus eget. In erat est, molestie id ultricies eget, egestas vel arcu. In molestie mi non eros condimentum, eget sagittis leo pharetra. Suspendisse tempus, tortor sit amet finibus ultrices, turpis elit feugiat risus, sit amet ornare nisi ligula ac quam. Curabitur congue rutrum efficitur. Phasellus vel urna arcu. Integer a neque luctus, tristique nibh eget, malesuada sapien. Donec tempus auctor purus quis tempus. Morbi rhoncus leo nec pulvinar pretium. Nullam vel nunc eu metus scelerisque tempor. Integer eleifend congue urna euismod sodales. Suspendisse tincidunt consequat lorem, sed imperdiet diam dapibus nec. Aenean non scelerisque nibh. Ut ultricies non risus id tincidunt. Pellentesque efficitur diam vel diam ultrices sagittis."},
    
    {id: 3, date: "14.08.2024",
        header: "Proin blandit, ante mollis sollicitudin sagittis",
        src: "https://picsum.photos/200/150",
        content: "Proin blandit, ante mollis sollicitudin sagittis, leo tortor ullamcorper orci, sit amet malesuada massa diam id est. Aliquam mauris lacus, lacinia eget est in, viverra lobortis nisl. Fusce quis rhoncus lacus, et venenatis purus. Praesent posuere urna ac libero tempor pulvinar. Curabitur porttitor congue enim, a commodo augue ultrices a. Curabitur ornare ex ullamcorper urna lobortis, eget aliquet eros tristique. Sed faucibus enim ligula, vel pretium metus suscipit vel. Nunc ac mollis ipsum. Sed sollicitudin nibh sit amet lorem consectetur eleifend. Vivamus malesuada mauris in porttitor dignissim. Proin ac massa ligula. Integer lacinia nulla sem, at viverra sem pellentesque sit amet. Donec nec eleifend magna. Praesent ullamcorper metus eget erat eleifend cursus. Ut fringilla eu dolor vestibulum venenatis. Quisque luctus risus sed lobortis ultricies. Sed et justo erat. Sed ac mollis tortor. Ut imperdiet tristique metus vel finibus. Suspendisse tempor mauris at porttitor viverra. Donec sit amet libero et dolor tincidunt egestas. Nunc blandit leo risus, sit amet fermentum purus ullamcorper rhoncus. Fusce efficitur nunc ac commodo lacinia. Morbi ut nunc non libero rutrum eleifend. Donec non ultrices nibh, at aliquam ex. Aliquam a nisl ac libero laoreet elementum ut eget nunc. Donec molestie diam lacus. Integer sed justo sit amet elit vestibulum convallis. Praesent molestie egestas erat, at aliquam felis lacinia non. Nam pellentesque nibh quis eros rhoncus, quis lobortis justo gravida. Sed pharetra nulla ex. Ut semper nulla in fringilla luctus."}
, {id: 4, date: "16.08.2024", header:"Suspendisse ac aliquam tortor. Donec purus enim",
    src: "https://picsum.photos/200/150",
     content: "Suspendisse ac aliquam tortor. Donec purus enim, commodo id lobortis ac, tincidunt a enim. Morbi pharetra urna ac dolor condimentum, ac rhoncus augue dignissim. Nunc tempus, turpis at tempus congue, nisl erat sagittis velit, non porttitor elit dui a ipsum. Aliquam eget hendrerit augue, venenatis pellentesque dolor. Nam ultrices ipsum nec ante pharetra ultrices. Aenean lacinia molestie mauris non fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse iaculis neque ut velit pulvinar fringilla. Aliquam in nunc tempus, semper elit lobortis, efficitur mi. Etiam sit amet ultricies ipsum. Cras id mauris volutpat, ullamcorper mi eget, luctus nunc. Integer ornare erat vitae neque fermentum, non dignissim est laoreet."}
];
function Post(date, header, src, content) {
    this.id = posts.length;
    this.date = date;
    this.header = header;
    this.src = src;
    this.content = content;
}



app.get("/", (req, res) => {
    res.render("index.ejs", {posts: posts.slice(posts.length - 4, posts.length), main: posts[0]});
})

app.get("/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/submit", (req, res) => {
    let post = new Post(req.body.date, req.body.header, req.body.src, req.body.content);
    posts.push(post);
    res.render("posts.ejs", {posts: posts});
})

app.get("/posts", (req, res) => {
    res.render("posts.ejs", {posts: posts});
})

app.get("/post/:postId", (req, res) => {
    
    res.render("post.ejs", {post: posts[req.params.postId]});
})

app.get("/update/:postId", (req, res) => {
    res.render("update.ejs", {post: posts[req.params.postId]});

})

app.post("/update/:postId", (req, res) => {
    let postToUpdate = posts[req.params.postId];
    postToUpdate.date = req.body.date;
    postToUpdate.header = req.body.header;
    postToUpdate.src = req.body.src;
    postToUpdate.content = req.body.content;
    res.render("post.ejs", {post: posts[req.params.postId]});

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})