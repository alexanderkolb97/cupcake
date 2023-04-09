import styled from "styled-components";

export const StyledTable = styled.div`
  display: flex;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #eee;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 140px;
`;

export const StyledCell = styled.div`
  padding: 20px;
  border: 1px solid gray;
  height: 80px;
  display: flex;
  align-items: center;
  width: 100%;
`;
