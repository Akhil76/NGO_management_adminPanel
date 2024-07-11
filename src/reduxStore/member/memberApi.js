import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const memberApi = createApi({
    reducerPath: "memberApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5000/"
    }),
    endpoints:(builder)=>({
        getMembers:builder.query({
            query:()=> 'allmembers',
        })
    })
})

export const {useGetMembersQuery} = memberApi;