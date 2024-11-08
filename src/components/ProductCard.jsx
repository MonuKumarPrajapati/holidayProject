import React from "react";

const ProductCard = ({ products }) => {
  console.log(products?.title);

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {products?.map((product) => (
          <div key={product.id} className=" border">
            <img
              src={product.image}
              alt={product.title}
              className="w-[380px] h-[200px] p-2 object-contain"
            />
            <div className="p-4">
              <p className="text-xl font-semibold mb-1 text-center">
                {product.title.length > 30
                  ? `${product.title.slice(0,18)}...`
                  : product.title}
              </p>

              <div className=" w-full inline-flex gap-5 justify-evenly items-center">
                <p className="text-sm font-bold text-gray-800 mb-1 text-start">
                  price $ {product.price}
                </p>
                <p className="text-lg font-bold text-gray-800 mb-1 text-center">
                  rating {product.rating.rate}
                </p>
              </div>

              <p className="text-gray-700 text-start">
                {product.description.length > 38
                  ? `${product.description.slice(0, 38)}...`
                  : product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
