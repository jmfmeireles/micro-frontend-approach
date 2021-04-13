import news from './assets/news.png';
import store from './assets/store.png';
//import cart from './assets/cart.png';
import { MicroFrontend } from 'app/models/MicroFrontend';

const {
  REACT_APP_BROWSE_NEWS_HOST: newsHost,
  REACT_APP_STORE_HOST: storeHost,
} = process.env;

export const MicroFrontends: MicroFrontend[] = [
  {
    key: 'news',
    logo: news,
    host: newsHost,
  },
  {
    key: 'store',
    logo: store,
    host: storeHost,
  },
  /* {
    key: 'orders',
    logo: cart,
  }, */
];
