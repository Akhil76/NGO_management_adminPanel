import { configureStore } from '@reduxjs/toolkit';
import  memberSlice  from './member/memberSlice';
import { memberApi } from './member/memberApi';


export const store = configureStore({
    reducer: {
      [memberApi.reducerPath]:memberApi.reducer,
      
    },
    middleware:(getDefaultMiddleware)=>
      getDefaultMiddleware().concat(memberApi.middleware)
  });

  
  