import React from "react";
import { BsTrash } from "react-icons/bs";
import classes from "./BrandList.module.css";
import Card from "../ui/card/Card";

function BrandList(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.img} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onClick}>
            <BsTrash onClick={props.onClick} />
          </button>
        </div>
      </Card>
    </li>
  );
}

export default BrandList;
