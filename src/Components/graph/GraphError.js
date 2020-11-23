import React from "react";
import TextCenter from "../TextCenter";

export default function GraphError({ error }) {
  return (
    <TextCenter>
      {error
        ? "Возможно какая-то ошибка с сервером, попробуйте сделать запрос снова"
        : "Данных за этот промежуток не найдено"}
    </TextCenter>
  );
}
