import React from "react";

export default function Main({ name }) {
  return (
    <h2 className="text-center pt-2 m-2">
      Привет{name ? `, ${name}` : ""}! на этом сайте ты сможешь пройти
      регистрацию и посмотреть на график валют за определенное время
    </h2>
  );
}
