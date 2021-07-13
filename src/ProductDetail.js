import React from "react";
import { useParams } from "react-router";
import { useStateValue } from "./StateProvider";
import { ADD_TO_CART } from "./reducer";
import "./ProductDetail.css";

function ProductDetail() {
  const { productsDB, dispatch } = useStateValue();

  const { productId } = useParams();

  function getProductDetails(database, productId) {
    return database.find((item) => item.id === productId);
  }

  const product = getProductDetails(productsDB, productId);

  console.log(product);
  // const addToCart = () => {
  //   dispatch({
  //     type: ADD_TO_CART,
  //     item: {
  //       ...product,
  //       price: product.buyprice,
  //     },
  //   });
  // };

  return (
    <div className="productDetail__main">
      <div className="productdetail">
        <div className="product__img">
          <img src={product.img} alt={product.id} />
        </div>

        <div className="productDetail__info">
          <p>
            <h2
              style={{
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              {product.name}
            </h2>
          </p>
          <p>{product.description}</p>
          <br></br>
          <p>
            <strong>{product.Powersource}</strong>
          </p>
          <br></br>
          <p
            style={{
              fontSize: "Large",
              fontWeight: "bold",
              marginBottom: "0.1rem",
            }}
          >
            Buy @ <small>Rs </small>
            <span>{product.buyprice}</span>
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Rent @ <small>Rs </small>
            <span>{product.rprice} /month</span>
          </p>
          <button
            onClick={() => {
              dispatch({
                type: ADD_TO_CART,
                item: {
                  ...product,
                  price: product.buyprice,
                },
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product__policy">
        <div className="product__policy--buy">
          <h1>Buying Policies</h1>
          <p>
            <strong>
              The objective of this policy is to provide complete ownership of
              equipment to the customer and help you get the equipment at lesser
              price.
            </strong>
            <br></br>
            <br></br>
            According to this policy,
            <br></br>
            <br></br>
            <ul>
              <li>
                The person can either pay full amount displayed or can pay its
                70% price of total selling price.
              </li>
              <br></br>
              <li>
                If the customer chooses to pay 70% price of total selling price
                of product then the concerned person needs to give 20% of its
                first production to AGROCULTURE within a period of 3 months
                starting from the purchasing date.
              </li>
              <br></br>
            </ul>
          </p>
        </div>
        <div className="product__policy--rent">
          <h1>Renting Policy</h1>
          <p>
            <strong>
              The objective of this policy is to make mordern equipments
              feasible for each and everyone.
            </strong>
            <br></br>
            <br></br>
            According to this policy,
            <br></br>
            <br></br>
            <ul>
              <li>
                The person by whose name the equipment is rented needs to pay
                the displayed amount for that specific product itself.
              </li>
              <br></br>
              <li>
                Each equipment can be rented for exactly 30 days . The counting
                of days will start from the day when the equipment is delivered
                to the desired location. ( For example :- if product is
                delivered in morning on1st june,2021 then 30th june,2021 will be
                the last day as per the agreement ) and on the next day the
                equipment will be picked up from that location itself.
              </li>
              <br></br>
              <li>
                No delivery charges are applied for any delivery of equipments.
              </li>
              <br></br>
              <li>
                If the concerned person with rented equipments needs the
                equipment for further days, a renewal of the same equipment is
                to be filled 15 days prior to last date of that equipment ( i.e.
                before 15th june,2021 renewal form on website is to be filled
                giving a prior notice).
              </li>
              <br></br>
              <li>
                The person who needs to rent the equipment needs to book the
                equipment at the earliest as the supply of equipment will be
                totally based on first-come-first serve.
              </li>
              <br></br>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
