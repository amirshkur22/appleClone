import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const Iphone = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch("http://localhost:2024/iphones");
        if (!response.ok) {
          throw new Error("Response was not ok/sucessful!!");
        } else {
          let data = await response.json();
          setProducts(data.products);
        }
      } catch (error) {
        console.error(`Error while fetching data: ${error.message}`);
      }
    };
    fetchData();
  }, []);
  console.log(products)
  return (
    <div className="container">
      <div className="row justify-content-center text-center text-capitalize">
        <div className="col-12 mt-5 pt-5">
          <h1>Iphones</h1>
          <p>The best for the brigthest</p>
        </div>
      </div>
      {products?.map((product, index) => {
        return (
          <div key={product.product_url} className="row justify-content-center text-center h-100">
            <div className={`col-sm-12 col-md-6 order-${index%2===0?'1':'2'}`}
            >
              <hr />
              <h2>{product.product_name}</h2>
              <h4>{product.prod_brief_desc}</h4>
              <h6>{`Starting From: $${product.starting_price}`}</h6>
              <p> {product.price_range}</p>
              <div className="linkWrapper">
                <ul>
                  <li className="list-unstyled">
                    <Link to={`/iphone/${product.product_url}`}>
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className={`col-sm-12 col-md-6 order-${index % 2 === 0 ? '2' : '1'}`}>
              <hr />
              <img src={product.product_img} alt={product.product_name} />
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Iphone;
