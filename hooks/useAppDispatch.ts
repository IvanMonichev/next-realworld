import { AppDispatchType } from '@/types/store.type'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatchType>()
