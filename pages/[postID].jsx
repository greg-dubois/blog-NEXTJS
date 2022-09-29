import {
  doc,
  getDoc,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore";
import db from "../firebase/clientApp";
import { useRouter } from "next/router";

const PostDetail = (props) => {
  const router = useRouter();

  const deleteHandler = async (id) => {
    // deleteDoc(doc(db, "posts", id))
    //   .then(() => {
    //     console.log("todo deleted");
    //     router.push("/");
    //   })
    //   .catch((err) => console.log(err.message));

    const response = await fetch("./api/hello", {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => deleteHandler(props.id)}
      >
        Delete Post
      </button>
    </>
  );
};

export async function getStaticPaths() {
  let paths = [];
  const fetchedPosts = await getDocs(collection(db, "posts"));

  fetchedPosts.forEach((post) => paths.push({ params: { postID: post.id } }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const postID = context.params.postID;

  const docRef = doc(db, "posts", postID);
  const docSnap = await getDoc(docRef);

  return {
    props: {
      title: docSnap.data().title,
      content: docSnap.data().content,
      id: docSnap.id,
    },
  };
}

export default PostDetail;
