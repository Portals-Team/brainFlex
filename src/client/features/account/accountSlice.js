import api from "../../store/api";

const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //getUsers gets all users
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),
    //getUser gets user by id
    getUser: builder.query({
      query: (id) => "/users/" + id,
      providesTags: ["User"],
    }),

    //getTopics gets all topics
    getTopics: builder.query({
      query: () => "/topics",
      providesTags: ["Topics"],
    }),

    //gets all information about a specific topic
    getTopicById: builder.query({
      query: (id) => "/topics/" + id,
      providesTags: ["Topic"],
    }),

    //getUserTopics gets the users topic picks by id
    getUserTopics: builder.query({
      query: (id) => "/user_topics/" + id,
      providesTags: ["UserTopics"],
    }),
    //write a query to get all categories
    getCategories: builder.query({
      query: () => "/categories",
      providesTags: ["Categories"],
    }),
    //write PATCH query to update a users user_topics
    updateUserTopics: builder.mutation({
      query: (payload) => ({
        url: "/user_topics/" + payload.id,
        method: "PATCH",
        body: { topicIds: payload.topicIds },
      }),
      invalidatesTags: ["UserTopics"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useGetCategoriesQuery,
  useGetTopicsQuery,
  useGetUserTopicsQuery,
  useUpdateUserTopicsMutation,
  useGetTopicByIdQuery,
} = accountApi;
