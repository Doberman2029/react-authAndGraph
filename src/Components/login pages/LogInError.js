import React from "react";

export default function LogInError() {
  return (
    <div className="alert alert-danger" role="alert">
      <p className="text-center mb-0">
        Имя или пароль введены не правильно, попробуйте снова
      </p>
    </div>
  );
}
