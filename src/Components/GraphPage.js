import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { addDays, subDays } from "date-fns";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function GraphPage({ userName = "вы не авторизовались" }) {
  const [dataUSD, setDataUSD] = useState([]);
  const [dataEUR, setDataEUR] = useState([]);
  const [valute, setValute] = useState("USD/RUB");

  const [startDate, setStartDate] = useState(new Date(2020, 2, 2));
  const [endDate, setEndDate] = useState(new Date(2020, 2, 14));

  const [url, setUrl] = useState(
    `https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=02/03/2020&date_req2=14/03/2020&VAL_NM_RQ=`
  );

  const [loading, setLoading] = useState(true);

  const fetchURLAndSetData = (url, func) => {
    return fetch(url)
      .then((response) => response.text())
      .then((str) =>
        new window.DOMParser().parseFromString(str, "application/xml")
      )
      .then((datas) => datas.getElementsByTagName("Record"))
      .then((el) => {
        for (let i = 0; i < el.length; i++) {
          func((prev) => [
            ...prev,
            {
              date: el[i].getAttribute("Date"),
              value: el[i]
                .getElementsByTagName("Value")[0]
                .innerHTML.replace(",", "."),
              nominal: el[i].getElementsByTagName("Nominal")[0].innerHTML,
            },
          ]);
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setLoading(true);
    setDataUSD([]);
    setDataEUR([]);

    fetchURLAndSetData(`${url}R01235`, setDataUSD);
    fetchURLAndSetData(`${url}R01239`, setDataEUR).finally(() =>
      setLoading(false)
    );
  }, [url]);

  const valuteHandler = (e) => {
    setValute(e.target.value);
  };

  const getDateAndValueObject = (v) => {
    let result = {};

    switch (v) {
      case "USD/RUB":
        result = {
          date: dataUSD.map((el) => el.date),
          value: dataUSD.map((el) => el.value),
        };
        break;
      case "EUR/RUB":
        result = {
          date: dataEUR.map((el) => el.date),
          value: dataEUR.map((el) => el.value),
        };
        break;
      case "EUR/USD":
        result = {
          date: dataUSD.map((el) => el.date),
          value: dataEUR.map((el, index) =>
            (el.value / dataUSD[index].value).toFixed(4)
          ),
        };
        break;
      default:
        result = {
          date: dataUSD.map((el) => el.date),
          value: dataUSD.map((el) => el.value),
        };
    }
    return result;
  };

  const dateHandler = (date) => {
    setStartDate(date);
    setEndDate(null);
  };

  const getDate = (a) => {
    return {
      year: a.getFullYear(),
      month: a.getMonth() >= 9 ? a.getMonth() + 1 : "0" + (a.getMonth() + 1),
      day: a.getDate() >= 10 ? a.getDate() : "0" + a.getDate(),
    };
  };

  const checkDateForChangeURL = () => {
    if (startDate && endDate) {
      let startRes = getDate(startDate);
      let endRes = getDate(endDate);
      setUrl(
        `https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=${startRes.day}/${startRes.month}/${startRes.year}&date_req2=${endRes.day}/${endRes.month}/${endRes.year}&VAL_NM_RQ=`
      );
    }
  };

  let data = {
    labels: getDateAndValueObject(valute).date,
    datasets: [
      {
        label: valute,
        data: getDateAndValueObject(valute).value,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  let valuteArray = ["USD/RUB", "EUR/RUB", "EUR/USD"];

  return (
    <>
      <h2 className="text-center pt-2">Добрый день, {userName}</h2>
      <div className="w-100 d-flex align-items-center">
        <DatePicker
          className="form-control ml-3"
          selected={startDate}
          onChange={(date) => dateHandler(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date(2010, 10, 10)}
          maxDate={subDays(new Date(), 1)}
          placeholderText="От"
          dateFormat="dd/MM/yyyy"
        />
        <DatePicker
          className="form-control ml-3 "
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={addDays(startDate, 15)}
          placeholderText="До"
          dateFormat="dd/MM/yyyy"
        />

        <button
          onClick={checkDateForChangeURL}
          className="btn btn-primary ml-5"
          disabled={!(startDate && endDate)}
        >
          Показать информацию
        </button>
      </div>

      {loading ? (
        <h3 className="text-center">Loading...</h3>
      ) : dataUSD.length > 1 || dataEUR.length > 1 ? (
        <>
          <select
            value={valute}
            onChange={valuteHandler}
            className="custom-select"
          >
            {valuteArray.map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
          <div className="wrapper">
            <Line data={data} />
          </div>
        </>
      ) : (
        <h2 className="text-center">Данных за этот промежуток не найдено</h2>
      )}
    </>
  );
}
