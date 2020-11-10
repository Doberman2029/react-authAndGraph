import React, { useState, useEffect } from "react";

import GraphLoading from "../GraphLoading";
import GraphWelcome from "../GraphWelcome";
import GraphDatePicker from "../GraphDatePicker/GraphDatePicker";
import GraphData from "../Graph/GraphData";

import "./GraphPage.css";

export default function GraphPage({ userName = "вы не авторизовались" }) {
  const [dataUSD, setDataUSD] = useState([]);
  const [dataEUR, setDataEUR] = useState([]);
  const [valute, setValute] = useState("USD/RUB");

  const [startDate, setStartDate] = useState(new Date(2020, 2, 2));
  const [endDate, setEndDate] = useState(new Date(2020, 2, 14));

  const [reRender, setReRender] = useState(true);

  const [err, setErr] = useState(false);

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
        let resultArray = [];
        for (let i = 0; i < el.length; i++) {
          resultArray.push({
            date: el[i].getAttribute("Date"),
            value: el[i]
              .getElementsByTagName("Value")[0]
              .innerHTML.replace(",", "."),
            nominal: el[i].getElementsByTagName("Nominal")[0].innerHTML,
          });
        }
        return resultArray;
      })
      .then((array) => func(array))
      .catch((e) => {
        console.log(e);
        setErr(true);
      });
  };

  useEffect(() => {
    setErr(false);
    setLoading(true);
    setDataUSD([]);
    setDataEUR([]);
    setValute("USD/RUB");

    Promise.all([
      fetchURLAndSetData(`${url}R01235`, setDataUSD),
      fetchURLAndSetData(`${url}R01239`, setDataEUR),
    ]).finally(() => setLoading(false));
  }, [url]);

  useEffect(() => {
    checkDateForChangeURL();
  }, [reRender]);

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

  const startDateHandler = (date) => {
    setStartDate(date);
    setEndDate(null);
  };

  const endDateHandler = (date) => {
    setEndDate(date);
    if (date) {
      setReRender(!reRender);
    }
  };

  const getDate = (a) => {
    return {
      year: a.getFullYear(),
      month: a.getMonth() >= 9 ? a.getMonth() + 1 : "0" + (a.getMonth() + 1),
      day: a.getDate() >= 10 ? a.getDate() : "0" + a.getDate(),
    };
  };

  const checkDateForChangeURL = () => {
    let startRes = getDate(startDate);
    let endRes = getDate(endDate);
    setUrl(
      `https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=${startRes.day}/${startRes.month}/${startRes.year}&date_req2=${endRes.day}/${endRes.month}/${endRes.year}&VAL_NM_RQ=`
    );
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
      <GraphWelcome name={userName} />
      <GraphDatePicker
        loading={loading}
        checkDateForChangeURL={checkDateForChangeURL}
        endDateHandler={endDateHandler}
        startDateHandler={startDateHandler}
        startDate={startDate}
        endDate={endDate}
      />

      {loading ? (
        <GraphLoading />
      ) : (
        <GraphData
          dataUSD={dataUSD}
          dataEUR={dataEUR}
          err={err}
          data={data}
          valuteArray={valuteArray}
          valuteHandler={valuteHandler}
          valute={valute}
        />
      )}
    </>
  );
}
