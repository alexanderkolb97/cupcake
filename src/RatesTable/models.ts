export interface IRates {
  RUB: number;
  USD: number;
  EUR: number;
}

export interface IResponseData {
  rates: IRates;
  timestapm: string;
  base: string;
  date: string;
}
