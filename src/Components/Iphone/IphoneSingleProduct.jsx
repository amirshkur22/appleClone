import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";

const IphoneSingleProduct = () => {
  const [product, setProduct] = useState([]);
  // console.log(useParams())
  const { id } = useParams();
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch("http://localhost:2024/iphones");
        if (!response.ok) {
          throw new Error("Response Not Ok!!");
        } else {
          let data = await response.json();
          let productList = data.products;
          let singleProduct = productList.filter((product) => {
            return product.product_url === id;
          });
          setProduct(singleProduct);
        }
      } catch (err) {
        console.log(`Error Found: ${err.message}`);
      }
    };
    fetchData();
  }, [id]);
    console.log(product);
    if (product.length) {
        
        return (
          <div className="container">
            {product?.map((singleProduct, index) => {
              return (
                <>
                  <div className="row justify-content-center text-center">
                    <div className={`col-12 mt-${index > 0 ? "0" : "5"} pt-5`}>
                      <h1>{singleProduct.product_name}</h1>
                      <h>{singleProduct.prod_desc}</h>
                    </div>
                  </div>
                  <div className="row text-center my-4">
                    <div className="col-md col-sm-12 badge-success pt-5 mr-md-5 mt-sm-4">
                      <p>{singleProduct.price_range}</p>
                      <p>{singleProduct.prod_brief_desc}</p>
                    </div>
                    <div className="col-md col-sm-12 badge-info mt-sm-4  pb-5">
                      <img src={singleProduct.product_img} alt="" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        );
    }
    else {
        return (
            
            <PageNotFound/>
        )
    }
};

export default IphoneSingleProduct;
