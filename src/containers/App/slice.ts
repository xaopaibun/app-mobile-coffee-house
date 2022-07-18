import {CartItem, CategoryType, ProductItem} from 'src/types/home';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {login} from 'screens/Authen/Login/thunk';
import {
  getDataCategory,
  getDataProduct,
  getProductByCategory,
} from 'screens/Home/thunk';

type InitialStateProps = {
  auth: {
    isLogin: boolean;
  };
  home: {
    loading: boolean;
    products: Array<ProductItem>;
    productDetail: ProductItem;
    cart: Array<CartItem>;
    category: Array<CategoryType>;
    money: number;
  };
};

const initialState: InitialStateProps = {
  auth: {
    isLogin: false,
  },
  home: {
    loading: false,
    products: [],
    productDetail: {} as ProductItem,
    cart: [],
    category: [],
    money: 0,
  },
};

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    logout: (state) => {
      state.auth.isLogin = false;
    },
    getProductDetail: (state, action) => {
      state.home.productDetail = action.payload;
    },
    resetCart: (state) => {
      state.home.cart = [];
      state.home.money = 0;
    },
    addCart: (state, action: PayloadAction<CartItem>) => {
      const cart = state.home.cart;
      const index = cart.findIndex(({id}) => action.payload.id === id);
      if (index < 0) {
        cart.push(action.payload);
      } else {
        cart[index].quatity = cart[index].quatity + action.payload.quatity;
      }
      const money = cart.reduce(function (total, currentValue) {
        return total + currentValue.price * currentValue.quatity;
      }, 0);
      state.home.cart = cart;
      state.home.money = money;
    },
    removeCartByID: (state, action: PayloadAction<number>) => {
      const cart = state.home.cart;
      state.home.cart = cart.filter((item) => item.id !== action.payload);
      state.home.money = state.home.cart.reduce(
        (total, currentValue) =>
          total + currentValue.price * currentValue.quatity,
        0,
      );
    },
    favoritesProductByID: (state, action: PayloadAction<number>) => {
      const products = state.home.products;
      const index = products.findIndex(({id}) => action.payload === id);
      if (index >= 0) {
        products[index].favorites = true;
      }
      state.home.products = products;
    },
    removeFavoriteProductByID: (state, action: PayloadAction<number>) => {
      const products = state.home.products;
      const index = products.findIndex(({id}) => action.payload === id);
      if (index >= 0) {
        products[index].favorites = false;
      }
      state.home.products = products;
    },
    increaseCartByID: (state, action: PayloadAction<number>) => {
      const cart = state.home.cart;
      const index = cart.findIndex(({id}) => action.payload === id);
      if (index >= 0) {
        cart[index].quatity = cart[index].quatity + 1;
      }
      state.home.cart = cart;
      state.home.money = state.home.cart.reduce(
        (total, currentValue) =>
          total + currentValue.price * currentValue.quatity,
        0,
      );
    },
    decrementCartByID: (state, action: PayloadAction<number>) => {
      const cart = state.home.cart;
      const index = cart.findIndex(({id}) => action.payload === id);
      if (index >= 0) {
        cart[index].quatity = cart[index].quatity - 1;
      }
      if (cart[index].quatity === 0) {
        cart.splice(index, 1);
      }
      state.home.cart = cart;
      state.home.money = state.home.cart.reduce(
        (total, currentValue) =>
          total + currentValue.price * currentValue.quatity,
        0,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, () => {
      console.log('pending');
    });
    builder.addCase(getDataProduct.pending, (state) => {
      state.home.loading = true;
    });
    builder.addCase(getDataCategory.pending, (state) => {
      state.home.loading = true;
    });
    builder.addCase(getProductByCategory.pending, (state) => {
      state.home.loading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.auth.isLogin = true;
      console.log(action.payload);
    });
    builder.addCase(getDataProduct.fulfilled, (state, action) => {
      state.home.products = action.payload.map((product) => ({
        ...product,
        favorites: false,
      }));
      state.home.loading = false;
    });

    builder.addCase(getProductByCategory.fulfilled, (state, action) => {
      state.home.products = action.payload.map((product) => ({
        ...product,
        favorites: false,
      }));
      state.home.loading = false;
    });
    builder.addCase(getDataCategory.fulfilled, (state, action) => {
      state.home.category = action.payload;
      state.home.loading = false;
    });

    builder.addCase(login.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(getDataProduct.rejected, (state) => {
      state.home.loading = false;
    });
    builder.addCase(getDataCategory.rejected, (state) => {
      state.home.loading = false;
    });
    builder.addCase(getProductByCategory.rejected, (state) => {
      state.home.loading = false;
    });
  },
});

export const {
  logout,
  getProductDetail,
  addCart,
  resetCart,
  removeCartByID,
  favoritesProductByID,
  increaseCartByID,
  decrementCartByID,
} = AppSlice.actions;

export default AppSlice.reducer;
