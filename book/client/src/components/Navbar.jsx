import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../store";

const Navbar = () => {
  const homeEl = useRef();
  const favoritesEl = useRef();
  const loginEl = useRef();
  const signupEl = useRef();
  const userNameEl = useRef();
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => {
    return state.usersCombinedReducer.user;
  });

  console.log(user);

  const handleUserLogout = async () => {
    await dispatch(logoutUser());
    navigate("/");
  };

  useEffect(() => {
    const checkLocation = () => {
      [...document.querySelectorAll("li")].forEach((element) => {
        element.classList.remove("current");
      });
      if (location.pathname.split("/")[1] === "") {
        homeEl.current.classList.add("current");
      } else if (location.pathname.split("/")[1] === "favorites") {
        favoritesEl.current.classList.add("current");
      } else if (location.pathname.split("/")[1] === "login") {
        loginEl.current && loginEl.current.classList.add("current");
      } else if (location.pathname.split("/")[1] === "signup") {
        signupEl.current && signupEl.current.classList.add("current");
      }
    };

    checkLocation();
  }, [location.pathname]);

  return (
    <div id="nav">
      <Link to="/">
        <img
          id="logo"
          src="https://freepngimg.com/thumb/antique/131926-antique-book-stack-free-transparent-image-hd.png"
          alt="logo"
        />
      </Link>
      <ul id="nav-items">
        <li ref={homeEl} className="current">
          <Link to="/">Home</Link>
        </li>
        <li ref={favoritesEl}>
          <Link to="/favorites">Favorites</Link>
        </li>
        {Object.keys(user) && Object.keys(user).length ? (
          <>
            <li>
              <Link
                onClick={() => {
                  return handleUserLogout();
                }}
              >
                Logout
              </Link>
            </li>
            <Link to="/my-account">
              <img
                src={`/img/users/${user.photo}`}
                alt={user.name}
                className="profile-img"
              />
            </Link>
            <li ref={userNameEl}>
              <Link to="/my-account">{user.name?.split(" ")[0]}</Link>
            </li>
          </>
        ) : (
          <>
            <li ref={loginEl}>
              <Link to="/login">Login</Link>
            </li>
            <li ref={signupEl}>
              <Link to="/signup">Sign up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
