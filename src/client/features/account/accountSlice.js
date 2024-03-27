import api from "../../store/api";

const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => "/users/" + id,
      providesTags: ["User"],
    }),

    //create an endpoint that will display the users user_topics
    getUserTopics: builder.query({
      query: (id) => "/user_topics/" + id,
      providesTags: ["UserTopics"],
    }),
  }),
});

export const { useGetUserQuery, useGetUserTopicsQuery } = accountApi;
