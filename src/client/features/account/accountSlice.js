import api from "../../store/api";

const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //write query to get user info by id'
    getUser: builder.query({
      query: (id) => "/users/" + id,
      providesTags: ["User"],
      /*transformResponse: (response) => response.users,*/
      /*transformErrorResponse: (response) => response.data.error.message,*/
    }),
  }),
});

export const { useGetUserQuery } = accountApi;
