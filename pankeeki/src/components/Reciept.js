import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";

class Reciept extends Component {
  renderOrder = key => {
    const pancake = this.props.pancakes[key];
    const order = this.props.orders[key];

    return (
      <li key={key} className="item">
        <span className="detail">
          {order}
          <span className="left-margin">{pancake.name}</span>
        </span>
        <span className="price">{pancake.price * order}.0</span>
      </li>
    );
  };

  render() {
    const today = new Date();
    const date = today.toLocaleDateString();
    const total = Object.keys(this.props.orders).reduce((accTotal, key) => {
      const pancake = this.props.pancakes[key];
      const order = this.props.orders[key];
      return accTotal + pancake.price * order;
    }, 0);

    return (
      <StyledReciept className={this.props.receiptClasses}>
        <Header h1="Receipt" h2="レシット" />
        <span className="greeting">
          Thank you for visiting us today! <br />
          Hope to see you again soon :)
        </span>
        <div className="body">
          <span className="date">
            date<span className="left-margin">{date}</span>
          </span>
          <ul className="order">
            {Object.keys(this.props.orders).map(key => this.renderOrder(key))}
          </ul>
          <span className="total">
            total<span className="left-margin">{total}.0</span>
          </span>
        </div>
        {/* <img className="barcode" src="./images/barcode.png" alt="Barcode" /> */}
      </StyledReciept>
    );
  }
}

const StyledReciept = styled.aside`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 2rem;
  height: 100vh;
  overflow-y: scroll;

  .left-margin {
    margin-left: 1.5rem;
  }

  .header {
    h1 {
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 0.3rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  .greeting {
    font-size: 0.8rem;
    letter-spacing: 1.15px;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .body {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .order {
    border-top: 1px solid;
    border-bottom: 1px solid;
    width: 100%;
    margin: 1.25rem 0;
    padding: 1.5rem 0;
    overflow-y: auto;

    .item {
      & > span {
        display: block;
      }

      .price {
        text-align: right;
        padding-bottom: 1.25rem;
      }
    }
  }

  .total {
    align-self: flex-end;
    max-width: 100%;

    span {
      font-size: 1.5rem;
    }
  }

  // .barcode {
  //   max-width: 100%;
  //   margin-top: auto;
  //   margin-bottom: 3rem;
  // }

  @media screen and (max-width: 1350px) {
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    height: 100%;
    padding: 0;
    width: 0;
    transition: 0.5s;

    &.receipt--open {
      padding: 0 2rem;
      width: 300px;
    }
  }

  @media screen and (max-width: 400px) {
    &.receipt--open {
      max-width: 100%;
    }
  }
`;

export default Reciept;
