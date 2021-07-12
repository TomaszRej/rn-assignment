import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import shoppingListsSliceReducer from './shoppingLists/shoppingListSlice';

const persistConfig = {
  key: 'shoppingLists',
  storage: AsyncStorage,
  whitelist: ['shoppingLists'],
};

const persistedShoppingListsReducer = persistReducer(
  persistConfig,
  shoppingListsSliceReducer,
);

export const store = configureStore({
  reducer: {
    shoppingLists: persistedShoppingListsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
