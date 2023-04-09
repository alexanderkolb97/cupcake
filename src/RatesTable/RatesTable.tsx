import React from "react";

import Market from "./Market/Market";

import { MARKETS, CURRENCY_TITLES } from "./constants";

import { StyledTable, StyledColumn, StyledCell } from "./styled";

// *** NOTE: Using "table" tag could be a better option for the semantic purposes but the problem I pointed out in "./RatesTable(copy)" made it hard to achieve. ***/
const RatesTable = () => (
  <StyledTable>
    <StyledColumn>
      {CURRENCY_TITLES.map(({ title }) => (
        <StyledCell key={title}>{title}</StyledCell>
      ))}
    </StyledColumn>
    {MARKETS.map(({ title }) => (
      <Market key={title} type={title} />
    ))}
  </StyledTable>
);

export default RatesTable;
