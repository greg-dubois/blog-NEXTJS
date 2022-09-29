import Head from "next/head";
import db from "../firebase/clientApp";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();

  const fullPostHandler = (id) => {
    router.push("/" + id);
  };

  return (
    <div>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="Personal blog" />
      </Head>
      <main>
        {props.posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>
              {post.content.substring(0, 200) + "......  "}
              <a onClick={() => fullPostHandler(post.id)}>Read full post</a>
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  let posts = [];

  try {
    const q = query(collection(db, "posts"), orderBy("title", "desc"));

    const fetchedPosts = await getDocs(q);

    fetchedPosts.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id, key: doc.id });
    });
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      posts: posts,
    },
  };
}
