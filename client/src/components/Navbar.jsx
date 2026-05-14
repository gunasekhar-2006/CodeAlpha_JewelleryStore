import { Link }
from "react-router-dom";

import { useContext }
from "react";

import {
  WishlistContext
}
from "../context/WishlistContext";

import {
  AuthContext
}
from "../context/AuthContext";

const Navbar = ({
  search,
  setSearch
}) => {

  const { wishlist } =
    useContext(WishlistContext);

  const {
    user,
    logout
  } = useContext(AuthContext);

  return (

    <div className="container">

      <nav className="navbar">

        <h1 className="logo">
          LuxeJewels
        </h1>

        <input
          type="text"
          placeholder="Search Jewellery..."
          className="search-bar"
          value={search}
          onChange={(e)=>
            setSearch(e.target.value)
          }
        />

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/profile">
            Profile
          </Link>

          <Link to="/wishlist">

            Wishlist
            ({wishlist.length})

          </Link>

          {
            user ? (

              <button
                className="btn"
                onClick={logout}
              >
                Logout
              </button>

            ) : (

              <Link to="/login">
                Login
              </Link>

            )
          }

        </div>

      </nav>

    </div>
  );
};

export default Navbar;