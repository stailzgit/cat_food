import React, { useState } from "react";
import "./Product.css";
import IMG_CAT from "../../assets/images/cat.png";

const Product = (props) => {
  const {
    id,
    title: titleProps,
    titleActiveHover,
    name,
    consist,
    count,
    bonuses,
    weight,
    status,
    labelText,
    toggleStatus,
  } = props;

  const [title, setTitle] = useState(titleProps);

  const onToggleStatus = () => {
    toggleStatus(id);
  };

  const onHoverHandler = (isHover) => {
    setTitle(isHover && status === "selected" ? titleActiveHover : titleProps);
  };

  let textLabelJSX;

  if (status === "notSelected") {
    textLabelJSX = (
      <div className="product__label-text">
        Чего сидишь? Порадуй котэ, <span onClick={onToggleStatus}>купи</span>.
      </div>
    );
  } else if (status === "disabled") {
    textLabelJSX = (
      <div className="product__label-text disabled">
        Печалька, {consist} закончился.
      </div>
    );
  } else if (status === "selected") {
    textLabelJSX = <div className="product__label-text">{labelText}</div>;
  }

  return (
    <div className={`product-wrapper ${status}`}>
      <div
        className={`product-inner ${status}`}
        onMouseOver={() => onHoverHandler(true)}
        onMouseOut={() => onHoverHandler(false)}
        onClick={onToggleStatus}
      >
        <div className="product__title">{title}</div>
        <div className="product__name">{name}</div>
        <div className="product__consist">{consist}</div>
        <div className="product__count">{count} порций</div>

        {bonuses.map((bonus) => (
          <div className="product__bonus">{bonus}</div>
        ))}

        <div className={`product__weight ${status}`}>
          <div className="product__weight-count">{weight}</div>
          <div className="product__weight-kg">кг</div>
        </div>

        <div className="product__bg-img">
          <img src={IMG_CAT} alt="img-cat" />
        </div>
      </div>

      {textLabelJSX}
    </div>
  );
};

export default Product;
