import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '@/lib/config'
import {
  UserInterface,
  UserRequestLoginInterface,
  UserRequestRegisterInterface,
  UserResponseInterface
} from '@/types/user.interface'

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseApi
  }),
  endpoints: builder => ({
    getCurrentUser: builder.query<UserResponseInterface, void>({
      query: () => `/user`
    }),
    register: builder.mutation<
      UserResponseInterface,
      UserRequestRegisterInterface
    >({
      query: data => ({
        url: '/users',
        method: 'POST',
        body: data
      })
    }),
    login: builder.mutation<UserResponseInterface, UserRequestLoginInterface>({
      query: data => ({
        url: '/users/login',
        method: 'POST',
        body: data
      })
    })
  })
})

export const {
  useGetCurrentUserQuery,
  useRegisterMutation,
  useLoginMutation
} = userApi
