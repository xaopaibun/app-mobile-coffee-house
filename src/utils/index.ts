export {default as yup} from './yup';
export {default as axios} from './axios';
export * from './token';

export const formatMoney = (money: number) => Intl.NumberFormat().format(money);

export const FROM_NAME = 'Phạm Văn Quý';
export const FROM_PHONE = '0352343938';
export const FROM_ADDRESS = '06 Lý Nam Đế, Thôn Trần Phú';
export const FROM_WARD_NAME = 'Minh Cường';
export const FROM_DISTRICT_NAME = 'Thường Tín';
export const FROM_PROVINCE_NAME = 'Hà Nội';
