import React from "react";
import { addDays, subDays } from "date-fns";
import DatePicker from "react-datepicker";
import Button from "../Button";

import "../../styles/GraphDatePicker.css";
import "react-datepicker/dist/react-datepicker.css";

export default function GraphDatePicker({
  loading,
  checkDateForChangeURL,
  endDateHandler,
  startDateHandler,
  startDate,
  endDate,
}) {
  return (
    <div className="w-100 d-flex align-items-center">
      <DatePicker
        className="form-control m-1"
        selected={startDate}
        onChange={(date) => startDateHandler(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date(2010, 10, 10)}
        maxDate={subDays(new Date(), 1)}
        placeholderText="От"
        dateFormat="dd/MM/yyyy"
        disabled={loading}
      />
      <DatePicker
        className="form-control ml-3 "
        selected={endDate}
        onChange={(date) => endDateHandler(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={addDays(startDate, 15)}
        placeholderText="До"
        dateFormat="dd/MM/yyyy"
        disabled={loading}
      />

      <Button
        onClick={() => checkDateForChangeURL()}
        className="ml-5"
        disabled={!(startDate && endDate) || loading}
      >
        Показать информацию
      </Button>
    </div>
  );
}
