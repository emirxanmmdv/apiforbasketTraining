import {useEffect, useState} from "react";
import ProductCards from "../ProductCards";
import "./cards.scss"
import usefetch from "../hook/useFetch";


const Products = () => {
    const data = usefetch()
  return (
    <>
      {data &&
        data.map((item) => (
        <ProductCards image={item.image} name={item.name} price={item.price} category={item.category} />
        ))}
    </>
  );
};

export default Products;
