import classes from "./Layout";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main classname={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
