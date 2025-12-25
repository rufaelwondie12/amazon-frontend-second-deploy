import React from "react";
import { Link } from "react-router-dom";
import classes from "./category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`} key={data.name}>
        <div>
          <span>
            <h2>{data.title}</h2>
          </span>
          <img src={data.imageLink} alt="" />
          <p>shop now</p>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
