import { IRates } from "./models";

// *** NOTE: Fires once 'static' endpoints are resolved. Keeps track of updated data on the server side. *** //
export function fetchDynamicRates(
  type: string,
  callback: (data: IRates) => void
) {
  try {
    return fetch(`${process.env.REACT_APP_API_URL}${type}/poll`)
      .then((res) => res.json())
      .then(({ rates }) => {
        // *** NOTE: I noticed that "/poll" endpoints are resoloved nearly every second so I thought it could make sense to use a flexible delay in this case. *** //
        setTimeout(() => callback(rates), 5000);
      });
  } catch (e) {
    console.log(e);
  }
}

// *** NOTE: Handles the logic of setting ".lowest" class for the lowest rates. *** //
export function handleLowestRateClass(nodeList: HTMLCollection) {
  const values: number[] = [];

  [].forEach.call(nodeList, (el: HTMLDivElement) => {
    if (el.classList.contains("lowest")) {
      el.classList.remove("lowest");
    }
    values.push(+el.innerHTML);
  });

  const lowest_rate = Math.min(...values);

  [].forEach.call(
    nodeList,
    (el: HTMLDivElement) =>
      +el.innerHTML === lowest_rate && el.classList.add("lowest")
  );
}

// *** NOTE: These 2 methods were meant to be used for "./RatesTable(copy)". *** //

// export function fetchStaticRates() {
//   try {
//     return Promise.all([
//       fetch(`${process.env.REACT_APP_API_URL}first/`).then((res) => res.json()),
//       fetch(`${process.env.REACT_APP_API_URL}second/`).then((res) =>
//         res.json()
//       ),
//       fetch(`${process.env.REACT_APP_API_URL}third/`).then((res) => res.json()),
//     ]);
//   } catch (e) {
//     console.log(e);
//   }
// }

// export function fetchDynamicRates(callback: (data) => void) {
//   try {
//     return Promise.any([
//       fetch(`${process.env.REACT_APP_API_URL}first/poll`).then((res) =>
//         res.json()
//       ),
//       fetch(`${process.env.REACT_APP_API_URL}second/poll`).then((res) =>
//         res.json()
//       ),
//       fetch(`${process.env.REACT_APP_API_URL}third/poll`).then((res) =>
//         res.json()
//       ),
//     ]).then((data) => {
//       // callback(data)
//       setTimeout(() => fetchDynamicRates(callback), 5000);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }
