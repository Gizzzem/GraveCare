import"./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://thumbs.dreamstime.com/b/old-grave-stone-circa-1600-3621945.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <hr/>
            <span className="postDate">1 Hour Ago</span>
        </div>
<p className="postDesc">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Qui sapiente quos maiores voluptates quidem quisquam delectus officia 
    cumque, culpa error, consectetur atque facilis eveniet iste debitis! 
    Cupiditate necessitatibus beatae laudantium?
</p>
    </div>
  )
}
