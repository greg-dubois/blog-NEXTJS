import Head from "next/head";
import { useRouter } from "next/router";
import NewPostForm from "../components/NewPostForm/NewPostForm";

const NewPost = () => {
  const router = useRouter();

  const submitPost = async (newPost) => {
    const response = await fetch("./api/hello", {
      method: "POST",
      body: JSON.stringify(newPost),
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
      <Head>
        <title>New Post</title>
        <meta name="description" content="write new posts easily" />
      </Head>
      <NewPostForm onAddPost={submitPost} />
    </>
  );
};

export default NewPost;
