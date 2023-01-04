export {default as yup} from './yup';
export {default as axios} from './axios';
export * from './token';

export const formatMoney = (money: number) => Intl.NumberFormat().format(money);
