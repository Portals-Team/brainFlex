import api from "../../store/api";

const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description getUsers query gets a list of all Users.
     * @method GET
     */
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),

    /**
     * @description getUser query gets a user by id.
     * @param {integer} id
     * @method GET
     */
    getUser: builder.query({
      query: (id) => "/users/" + id,
      providesTags: ["User"],
    }),

    /**
     * @description getMe query gets the logged in user.
     * @method GET
     */
    getMe: builder.query({
      query: () => "/users/me",
      providesTags: ["User", "UserTopics"]
  }),
    //getTopics gets all topics
    getTopics: builder.query({
      query: () => "/topics",
      providesTags: ["Topics"],
    }),

    /**
     * @description getTopicById query gets all topics by id.
     * @param {integer} id
     * @method GET
     */
    getTopicById: builder.query({
      query: (id) => "/topics/" + id,
      providesTags: ["Topic"],
    }),

    /**
     * @description getUserTopics query gets all user topics by id.
     * @param {integer} id
     * @method GET
     */
    getUserTopics: builder.query({
      query: (id) => "/user_topics/" + id,
      providesTags: ["UserTopics"],
    }),

    /**
     * @description getCategories query gets all categories.
     * @method GET
     */
    getCategories: builder.query({
      query: () => "/categories",
      providesTags: ["Categories"],
    }),

    /**
     * @description updatedUserTopics query updates the logged in users topics by topic id
     * @param {integer} id
     * @method PATCH
     */
    updateUserTopics: builder.mutation({
      query: (payload) => ({
        url: "/user_topics/" + payload.id,
        method: "PATCH",
        body: { topicIds: payload.topicIds },
      }),
      invalidatesTags: ["UserTopics"],
    }),

    /**
     * @description createNewQuiz posts a new quiz for a user to play when there is no quiz for tghe users topic
     * @method POST
     */
    createNewQuiz: builder.mutation({
      query: (payload) => ({
        url: "/quizes",
        method: "POST",
        body: {
          user_Id: payload.user_Id,
          category_Id: payload.category_Id,
          topic_Id: payload.topic_Id,
          questionsarray: payload.questionsarray,
          image_Word_Id: payload.image_Word_Id,
        },
      }),
      invalidatesTags: ["User"]
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
  useCreateNewQuizMutation,
  useGetMeQuery,
} = accountApi;
