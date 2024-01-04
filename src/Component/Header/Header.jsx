import React, { useContext, useState } from "react";
import { AiFillAmazonSquare } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { useAuthState } from "react-firebase-hooks/auth";
import "./header.css";
import firebaseAuth from "./../../Firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
// import Swal from "sweetalert2";
import { MyContext } from "../../Context/Context";
const Header = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);
  const [isTrue, setIsTrue] = useState(false);
  const [signOut] = useSignOut(firebaseAuth);
  const { setSearchVale, searchVale } = useContext(MyContext);
 
  return (
    <nav>
      <div className="nabvar flex">
        <div className="fixedicon">
          <div>
            <img
              className="navlogo"
              src={
                "https://www.searchenginejournal.com/wp-content/uploads/2017/06/shutterstock_268688447.jpg"
              }
              alt=""
            />
          </div>
          <input
            onChange={(e) => setSearchVale(e.target.value)}
            value={searchVale}
            className="inputbox"
            type="text"
            placeholder="Search for job"
          />
          <span onClick={() => setIsTrue(!isTrue)} className="alignjustify">
            <abbr title="Your accout">
              <FiAlignJustify />
            </abbr>
          </span>
        </div>

        <div>
         
          <ul className={!isTrue ? "flex" : "ul"}>
            <abbr title="Home">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
            </abbr>
            <abbr title="Jobs">
              <li>
                <Link to={"/jobs"}>Jobs</Link>
              </li>
            </abbr>
            <abbr title="About">
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </abbr>
            <abbr title="Contact">
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </abbr>
            <abbr title="Favourite">
              <li>
                <Link to={"/favourite"}>Favourite</Link>
              </li>
            </abbr>
          </ul>
        </div>
        <div>
          <ul className="flex">
            <abbr title="Account">
              <li>
                {!user?.photoURL ? (
                  <IoMdContact style={{ fontSize: "40px" }} />
                ) : (
                  <img
                    style={{
                      marginLeft: "8px",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      cursor: "pointer",
                    }}
                    src={user?.photoURL}
                  />
                )}
              </li>
            </abbr>
            {user ? (
              <abbr title="sign out">
                <li
                  style={{ fontWeight: "bold",cursor:'pointer' }}
                  onClick={() => signOut()}
                  className="ulsignin"
                >
                  <Link>Sign Out</Link>
                   
                </li>
              </abbr>
            ) : (
              <abbr title="Login">
                <li className="ulsignin">
                  <Link style={{ fontWeight: "bold" }} to={"/sign_up"}>
                    Sign In
                  </Link>
                </li>
              </abbr>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
