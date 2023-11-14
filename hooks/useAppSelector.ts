import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootStateType } from '@/types/store.type'

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
