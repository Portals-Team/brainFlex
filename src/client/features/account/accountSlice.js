import api from "../../store/api";

const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //write query to get user info by id'
    getUser: builder.query({
      query: (id) => "/users/" + id,
      provideTags: ["users"],
    }),
  }),
});

export const { useGetUserQuery } = accountApi;
