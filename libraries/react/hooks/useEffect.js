import React from "react";
import ReactDOM from "react-dom";

function Reddit() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://www.reddit.com/r/reactjs.json`)
      .then((res) => res.json())
      .then((res) => {
        const newPosts = res.data.children.map((obj) => obj.data);
        setPosts(newPosts);
      });
  }, []);

  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <br/>
            {post.author}{post.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Reddit />, document.getElementById("root"));
