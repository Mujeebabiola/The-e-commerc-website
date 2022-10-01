import React, { useState } from "react";
import Product from "./Product";
import Products from "../Products";

function Productlist() {
  const length = Products.length;
  const [step] = useState(3);
  var [start, UpdateStart] = useState(0);
  var [end, UpdateEnd] = useState(step);

  var [pageNum, updatePage] = useState(0);

  function HandleClick(btn) {
    if (btn.target.innerHTML == "Prev") {
      UpdateStart(start - step);
      UpdateEnd(end - step);
      if (start <= 0 || end === step + 1) {
        //if we are back to page 1,disable prev
        UpdateStart(0);
        updatePage(0);
        //UpdateDisablePrev(true);
      }
    } else {
      updatePage(pageNum + 1);
      UpdateStart(start + step);
      UpdateEnd(end + step);

      //UpdateDisablePrev(false);

      if (end >= length - 1) {
        //if we've reached the end
        UpdateEnd(length - 1);
        //UpdateDisableNext(true);
      }
    }
    console.log(`start : ${start}  end: ${end} page:${pageNum}`);
  }
  return (
    <div>
      <div className="row">
        {Products.slice(start, end).map(function (element) {
          return <Product imageSource={element.imageSource} />;
        })}
      </div>
      <ul className="pager">
        <li>
          <button
            onClick={HandleClick}
            disabled={pageNum === 0 || end === step}
          >
            Prev
          </button>
        </li>
        <li>
          <button
            onClick={HandleClick}
            disabled={pageNum === Math.ceil(length / step) - 1}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Productlist;
