import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";
import FlipMove from "react-flip-move";

function Posts({ posts }) {
  const [realtimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      <FlipMove>
        {realtimePosts
          ? realtimePosts?.docs.map((post) => (
              <Post
                key={post.id}
                name={post.data().name}
                image={post.data().image}
                message={post.data().message}
                email={post.data().email}
                timestamp={post.data().timestamp}
                postImage={post.data().postImage}
              />
            ))
          : posts.map((post) => (
              <Post
                key={post.id}
                name={post.name}
                image={post.image}
                message={post.message}
                email={post.email}
                timestamp={post.timestamp}
                postImage={post.postImage}
              />
            ))}
      </FlipMove>
    </div>
  );
}

export default Posts;
