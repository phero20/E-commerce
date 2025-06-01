import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

export default function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    const bestProducts = products.filter((product) => product.bestseller);
    setBestSellers(bestProducts.slice(0, 5));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolores
          nobis possimus laboriosam consequatur quae odit beatae odio vero vel.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellers.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image[0]}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
