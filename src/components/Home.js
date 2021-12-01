import React from "react";
import { useBrandStore } from "../database/database";
import BrandList from "./BrandList";
import classes from "./Home.module.css";

function Home() {
  const brands = useBrandStore((state) => state.brands);
  const removeBrand = useBrandStore((state) => state.removeBrand);

  const handleDelete = (id) => {
    removeBrand(id);
  };

  return (
    <div className={classes.container}>
      <ul>
        {brands.map((item) => (
          <BrandList
            key={item.id}
            img={item.img}
            name={item.name}
            onClick={() => handleDelete(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Home;
