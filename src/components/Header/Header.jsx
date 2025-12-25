import React, { useContext } from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt="Amazon Logo"
            />
          </Link>
          <div className={classes.delivery}>
            <span>
              <IoLocationOutline size={25} />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* second section start here i.e search bar  */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Product" />
          <FaSearch size={40} />
        </div>
        {/* third section (right-side div) starts here */}
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
              alt="country flag"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>

          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <p>Hello Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>
          {/* for orders */}
          <Link to="/orders">
            <div>
              <p>returns</p>
              <span>& Orders</span>
            </div>
          </Link>

          {/* for cart */}
          <Link to="/cart" className={classes.cart}>
            <LuShoppingCart size={25} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
