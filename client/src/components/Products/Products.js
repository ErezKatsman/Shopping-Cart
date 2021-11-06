import React, { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 0,
    name: "sony5",
    img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/6684441/extra_large/3aeeee03514df2858af26aea68c54e44.jpg",
    description: "new sony 5",
    price: 3500,
  },
  {
    id: 1,
    name: "Iphone 13",
    img: "none",
    description: "new sony 5",
    price: 3500,
  },
  {
    id: 2,
    name: "Xbox 360",
    img: "none",
    description: "new sony 5",
    price: 3500,
  },
  { id: 3, name: "disc", img: "none", description: "new sony 5", price: 3500 },
];

export default function Products() {
  const [products, setProducts] = useState(data);
  return (
    <div>
      {products.map((product) => (
        <Link
          to={{
            pathname: "/product/" + product.id,
            state: products[product.id],
          }}
          key={product.id}
        >
          <div>{product.name}</div>
        </Link>
      ))}
    </div>
  );
}
