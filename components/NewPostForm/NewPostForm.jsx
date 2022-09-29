import { useRef } from "react";
import classes from "./NewPostForm.module.css";

const NewPostForm = (props) => {
  const titleRef = useRef();
  const contentRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const newTitle = titleRef.current.value;
    const newContent = contentRef.current.value;
    const newPost = {
      title: newTitle,
      content: newContent,
    };

    props.onAddPost(newPost);

    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h1>New Post</h1>
      <div className={classes.control}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          ref={contentRef}
        />
      </div>
      <button className={classes.button}>Add Post</button>
    </form>
  );
};

export default NewPostForm;
