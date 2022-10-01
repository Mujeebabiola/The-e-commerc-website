import React from "react";
function Product(props) {
  return (
    <div className="col-xs-6 col-sm-2">
      <img
        src={props.imageSource}
        alt="sample_image"
        style={{ height: "100%", width: "100%", marginBottom: "5%" }}
        className="img-rounded"
      />
    </div>
  );
}
export default Product;
