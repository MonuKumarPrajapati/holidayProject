import React from "react";

const Pagination = ({ productPerPage, totalProduct, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className=" flex justify-center items-center">
      {pages.map((page, idx) => {
          return <button key={idx}
              onClick={()=>setCurrentPage(page)}
          className="px-4 py-2 transform hover:scale-110 transition duration-200  m-3 bg-black text-white font-semibold rounded-lg  ">{page}
          </button>;
      })}
    </div>
  );
};

export default Pagination;
