import React, { FC } from "react";

import { CURRENCY_TYPES } from "../constants";

import { StyledCell } from "../styled";

interface ICell {
  text: number;
  index: number;
}

const Cell: FC<ICell> = ({ text, index }) => (
  <StyledCell
    className={CURRENCY_TYPES[index as keyof typeof CURRENCY_TYPES]}
  >
    {Math.trunc(text * 100) / 100}
  </StyledCell>
);
export default Cell;
