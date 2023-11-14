"use client"
import type { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import store from '@/store/store'

const CustomProvider: FC<PropsWithChildren> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default CustomProvider;
