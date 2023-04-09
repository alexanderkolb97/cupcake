// *** NOTE: This file isn't used anywhere, I didn't delete it for a reason. The code you can see below is a rough idea of how I was going to implement the app from the first place. Having 3 requests to send made me thinking that it'd be best to use "Promise.all" to handle them, but at some point I encountered a problem - none of the responses has a unique "id" which makes it difficult (still haven't figured a way to do this) to update rates from a specific market, that's why a different approach has been choosen. *** //





// import React, { useState, useEffect } from "react";

// import HeaderCell from "./HeaderCell"
// import BodyCell from "./BodyCell/BodyCell";

// import { fetchStaticRates, fetchDynamicRates } from "./helpers";
// import { CURRENCY_TITLES, TABLE_ROWS } from "./constants";
// import { IResponseData } from "./models";

// import { StyledRatesTable, StyledTableCell } from "./styled";
// import GlobalStyles from "../globalStyles";

// const RatesTable = () => {
//   const [rates, setRates] = useState<IResponseData[]>([]);

//   const updateRates = (data) => {  }

//   useEffect(() => {
//     const promises = fetchStaticRates();

//     if (promises) {
//       promises
//         .then((results) => {
//           console.log(results)
//           setRates(results)
//           fetchDynamicRates(updateRates)
//         })
//     }
//   }, [])

//   return (
//     <>
//       <GlobalStyles />
//       <StyledRatesTable>
//         <thead>
//           <tr>
//             {CURRENCY_TITLES.map(({ title }) => <HeaderCell key={title} title={title} />)}
//           </tr>
//         </thead>
//         <tbody>
//           {TABLE_ROWS.map(({ title, type }) => (
//             <tr>
//               <StyledTableCell>{title}</StyledTableCell>
//               {rates.map(({ rates }) => (<BodyCell rates={rates} currency={type} />))}
//             </tr>
//           ))}
//         </tbody>
//       </StyledRatesTable>
//     </>
//   )
// }

// export default RatesTable;
