import React, { useState, useEffect, FC } from "react";

import Cell from "../Cell/Cell";

import { IRates } from "../models";
import { CURRENCY_TYPES } from "../constants";
import { fetchDynamicRates, handleLowestRateClass } from "../helpers";
import { StyledColumn } from "../styled";
import { StyledCell } from "../styled";

const Market: FC<{ type: string }> = ({ type }) => {
  const [rates, setRates] = useState<IRates>();

  // *** NOTE: is fired as soon as "/poll" is resolved. *** //
  const updateRates = (data: IRates) => {
    setRates(data);
    fetchDynamicRates(type, updateRates);
  };

  useEffect(() => {
    // *** NOTE: No polling for the first time, just fetch the data from "static" endpoint so user doesn't have to wait unit "/poll" is resolved. *** //
    try {
      fetch(`${process.env.REACT_APP_API_URL}${type}`)
        .then((res) => res.json())
        .then(({ rates }) => {
          setRates(rates);
          fetchDynamicRates(type, updateRates);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    // *** NOTE: Keeps track of "rates" and deal with marking the lowest rate logic. *** //
    Object.entries(CURRENCY_TYPES).forEach(([key, value]) => {
      const nodeList = document.getElementsByClassName(value);
      handleLowestRateClass(nodeList);
    });
  }, [rates]);

  return (
    <StyledColumn>
      <StyledCell>{type.toUpperCase()}</StyledCell>
      {rates &&
        Object.entries(rates).map(([key, value], i) => (
          // *** NOTE: "uuid" could be a better option but I think "key" is safe for this case. *** //
          <Cell key={key} text={value} index={i} />
        ))}
    </StyledColumn>
  );
};

export default Market;
