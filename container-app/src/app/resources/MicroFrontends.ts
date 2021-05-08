import news from './assets/news.png';
import store from './assets/store.png';
import { MicroFrontend } from '../models/MicroFrontend';
import NewsAppMFE from '../microfrontends/NewsAppMFE';
import ShoppingCartMFE from '../microfrontends/ShoppingCartMFE';

export const MicroFrontends: MicroFrontend[] = [
  {
    key: 'news',
    logo: news,
    component: NewsAppMFE,
  },
  {
    key: 'store',
    logo: store,
    component: ShoppingCartMFE,
  },
];
