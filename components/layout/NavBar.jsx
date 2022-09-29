import Link from "next/link";
import classes from "./NavBar.module.css";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Daily Journal</div>
      <nav>
        <ul className={classes.ul}>
          <li
            className={`${classes.li} ${
              router.pathname == "/" ? classes.active : ""
            }`}
          >
            <Link href="/" className={classes.link}>
              All Posts
            </Link>
          </li>
          <li
            className={`${classes.li} ${
              router.pathname == "/new-post" ? classes.active : ""
            }`}
          >
            <Link href="new-post">New Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
