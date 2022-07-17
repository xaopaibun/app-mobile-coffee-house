import {AxiosInstance} from 'axios';
import MockAdapter from 'axios-mock-adapter';

const array = [
  {
    id: 1,
    title: 'Cacao Đá',
    price: 55000,
    description:
      'Bạn muốn chọn cho mình một món giải khát hợp với sở thích thì cacao đá chính xác là một lựa chọn không tồi. chỉ cần uống 1 ly cacao đá sẽ giúp bạn vừa giải khát, vừa giúp bạn tỉnh táo, giảm mệt mỏi một cách nhanh chóng. Còn chờ gì nữa mà ko thử ?!!!        ',
    category: 'Cà phê',
    image: 'https://kfehouse.vn/wp-content/uploads/2020/12/Cacao-da.png',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: 'Coldbrew Cam Sả',
    price: 65000,
    description:
      'Vị chua nhẹ của cam vàng, thơm nồng của sả, hậu vị ngọt ngào, tươi mát nơi cuống họng. Coldbrew Cam Sả là sự lựa chọn hoàn hảo cho bất kì thời gian nào trong ngày',
    category: 'Sinh Tố',
    image:
      'https://kfehouse.vn/wp-content/uploads/2020/12/Cold-brew-cam-sa.png',
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: 'Sorbet Cam Xoài',
    price: 66000,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: 'Sinh Tố',
    image:
      'https://kfehouse.vn/wp-content/uploads/2021/03/Tra-dao-cam-sa-1024x683.png',
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: 'Cà phê Cappuccino',
    price: 30000,
    description:
      'Nếu bạn chưa từng thưởng thức Cappuccino thì có lẽ đây chính là một thiếu sót lớn. Một tách Cappuccino là sự kết hợp hoàn hảo giữa cafe Espresso với bọt sữa tạo ra hương thơm nức mũi cho những người sành sỏi về café.',
    category: 'Cà phê',
    image: 'https://kfehouse.vn/wp-content/uploads/2020/12/Cappuccino-da.png',
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: 'Cà phê Coco',
    price: 69000,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'Cà phê',
    image: 'https://kfehouse.vn/wp-content/uploads/2020/12/Coco-co.png',
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: 'Cà phê đá',
    price: 35000,
    description:
      'Nhấp 1 ngụm là thấy đã, ngụm thứ hai thêm tỉnh táo và cứ thế lôi cuốn bạn đến giọt cuối cùng. Chỉ có thể là 1 ly đen đá tại K’Fe House',
    category: 'Cà phê',
    image: 'https://kfehouse.vn/wp-content/uploads/2020/12/Ca-phe-da.png',
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: 'Espresso Nóng',
    price: 50000,
    description:
      'Bạn muốn chọn cho mình một món giải khát hợp với sở thích thì Espresso Nóng chính xác là một lựa chọn không tồi. chỉ cần uống 1 ly cacao đá sẽ giúp bạn vừa giải khát, vừa giúp bạn tỉnh táo, giảm mệt mỏi một cách nhanh chóng. Còn chờ gì nữa mà ko thử ?!!!',
    category: 'Cà phê',
    image:
      'https://kfehouse.vn/wp-content/uploads/2021/03/Espresso-no%CC%81ng-2.png',
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: 'Bạc xỉu',
    price: 35000,
    description:
      'Đến với K’fe House bạn không thể bỏ qua hương vị độc đáo của bạc sỉu. 1 ly bạc sỉu đặc biệt thơm ngon chuẩn vị sẽ giúp chúng ta tỉnh táo và có thêm năng lượng để bắt đầu 1 ngày mới sảng khoái đầy hứng khởi.',
    category: 'Cà phê',
    image: 'https://kfehouse.vn/wp-content/uploads/2020/12/Bac-siu.png',
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: 'Coldbrew dưa lưới',
    price: 40000,
    description:
      'Coldbrew dưa lưới rất dễ uống , có vị ngọt thanh và hương thơm dễ chịu của dưa lưới thích hợp cho những ngày thời tiết nắng nóng khó chịu.',
    category: 'Trà',
    image:
      'https://kfehouse.vn/wp-content/uploads/2020/12/Coldbrew-dua-luoi.png',
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: 'Trà sữa dứa',
    price: 50000,
    description:
      'Trà sữa dứa thơm ngon, béo ngậy của K’Fe House sẽ đem đến sự hài lòng cho thực khách lựa chọn.',
    category: 'Trà sữa',
    image:
      'https://kfehouse.vn/wp-content/uploads/2020/12/Tra%CC%80-su%CC%9B%CC%83a.png',
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title: 'Soda Chanh Đường',
    price: 75000,
    description:
      'Soda Chanh Đường thơm ngon của K’Fe House sẽ đem đến sự hài lòng cho thực khách lựa chọn.',
    category: 'Soda',
    image:
      'https://kfehouse.vn/wp-content/uploads/2021/03/Soda-chanh-du%CC%9Bo%CC%9B%CC%80ng-1.png',
    rating: {
      rate: 2.9,
      count: 240,
    },
  },
  {
    id: 12,
    title: 'Soda Dâu Ổi',
    price: 56000,
    description:
      'Vừa có hương vị của ổi, vừa lại có mùi chua chua ngọt ngọt, hương thơm dễ chịu của trái dâu tây. Một sự kết hợp trên cả tuyệt vời!',
    category: 'Soda',
    image:
      'https://kfehouse.vn/wp-content/uploads/2020/12/Soda-da%CC%82u-o%CC%82%CC%89i.png',
    rating: {
      rate: 3.9,
      count: 230,
    },
  },
  {
    id: 13,
    title: 'Trà Hoa Hồng Vải',
    price: 59000,
    description:
      'Vừa có hương vị của ổi, vừa lại có mùi chua chua ngọt ngọt, hương thơm dễ chịu của trái dâu tây. Một sự kết hợp trên cả tuyệt vời!',
    category: 'Trà',
    image:
      'https://kfehouse.vn/wp-content/uploads/2021/03/Tra%CC%80-hoa-ho%CC%82%CC%80ng-va%CC%89i-1.png',
    rating: {
      rate: 2.9,
      count: 230,
    },
  },
  {
    id: 14,
    title: 'Nước Ép Ổi Hồng',
    price: 52000,
    description:
      'Mùi thơm nhẹ nhàng của ổi hồng sẽ mang đến cho bạn 1 cơ thể khỏe mạnh.',
    category: 'Nước ép',
    image: 'https://kfehouse.vn/wp-content/uploads/2020/12/Nuoc-ep-oi-hong.png',
    rating: {
      rate: 2.9,
      count: 230,
    },
  },
];
export default (instance: AxiosInstance) => {
  const mock = new MockAdapter(instance, {delayResponse: 2000});

  mock.onPost('/auth/login').reply(200, {
    auth_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  });

  mock.onPost('/auth/signup').reply(200, {
    auth_token:
      'eyJhbGciOiJIUdszI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  });

  mock.onGet('/categorys').reply(200, [
    {id: 0, label: 'Tất cả', name: 'tat-ca'},
    {id: 1, label: 'Cà phê', name: 'ca-phe'},
    {id: 2, label: 'Trà', name: 'tra'},
    {id: 3, label: 'Soda', name: 'so-da'},
    {id: 4, label: 'Sinh Tố', name: 'sinh-to'},
    {id: 5, label: 'Nước ép', name: 'nuoc-ep'},
  ]);

  mock.onGet('/products').reply(200, array);

  mock.onGet('/categorys/ca-phe').reply(
    200,
    array.filter((product) => product.category === 'Cà phê'),
  );

  mock.onGet('/categorys/tra').reply(
    200,
    array.filter((product) => product.category === 'Trà'),
  );

  mock.onGet('/categorys/so-da').reply(
    200,
    array.filter((product) => product.category === 'Soda'),
  );

  mock.onGet('/categorys/nuoc-ep').reply(
    200,
    array.filter((product) => product.category === 'Nước ép'),
  );

  mock.onGet('/categorys/sinh-to').reply(
    200,
    array.filter((product) => product.category === 'Sinh Tố'),
  );
};
