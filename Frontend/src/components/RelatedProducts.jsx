import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

export default function RelatedProducts({ category, subCategory }) {
  const { products, currency } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productscopy = products.slice();
      productscopy = productscopy.filter((item) => category === item.category);
      productscopy = productscopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(productscopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:gri-cols-4 lg:grid-cols-5 gap-4 gap-y-6"
        o
      >
        {related.map((item, index) => (
          <div
            key={item._id}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image[0]}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
