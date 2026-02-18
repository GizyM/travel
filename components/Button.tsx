import React from 'react'

const Button = ({ type, title, icon, variant, full }) => {
  return (
    <button
    type={type}
    className={`btn ${variant} ${full ? "btn--full" : ""}`}
    >
      {icon && (
        <img src={icon} 
        alt={title} 
        className="btn__icon"
        />
      )}
      <span className="btn__label">{title}</span>
    </button>
  );
};

export default Button
