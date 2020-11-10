import React from "react";

export default function Button({ children, className, ...rest }) {
  let style = `btn btn-primary ${className} `;

  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
}
