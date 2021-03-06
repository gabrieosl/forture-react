import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'molfas',
      storage,
      whitelist: ['authAdmin', 'authStore', 'cart'],
    },
    reducers
  );

  return persistedReducer;
};
