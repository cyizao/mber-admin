import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import user from './module/user';
import app from './module/app';
import menus from './module/menus';
import userInfo from './module/userInfo';
import userLevel from './module/userLevel';
import order from './module/order';
import media from './module/media';
import goodSelect from './module/goodSelect';
import moren from './module/moren';
import shopping from './module/shopping';
import fresh from './module/fresh';
import kefu from './module/kefu';
import integralOrder from './module/integralOrder';
import mobildConfig from './module/mobildConfig';
import upgrade from './module/upgrade';

Vue.use(Vuex);
// 持久化储存
// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage,
// })

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  plugins: [
    new VuexPersistence({
      reducer: (state) => ({
        //这个就是存入localStorage的值
        user: state.user,
        app: state.app,
        menus: state.menus,
        userInfo: state.userInfo,
        userLevel: state.userLevel,
        order: state.order,
        media: state.media,
        kefu: state.kefu,
        integralOrder: state.integralOrder,
        mobildConfig: state.mobildConfig,
        upgrade: state.upgrade,
      }),
      storage: window.localStorage,
    }).plugin,
  ],
  modules: {
    user,
    app,
    menus,
    userInfo,
    userLevel,
    order,
    media,
    goodSelect,
    moren,
    shopping,
    fresh,
    kefu,
    mobildConfig,
    integralOrder,
    upgrade,
  },
});
