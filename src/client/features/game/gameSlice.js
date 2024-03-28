import api from "../../store/api";

const gameApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description getUsers query gets a list of all Users.
     * @method GET
     */
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
      transformResponse: (response) => response.users,
      transformErrorResponse: (response) => response.data.error.message,
    }),

    /**
     * @description updatedUser query updates the logged in Users.aggregate_score
     * @method PATCH
     */

    updatedUser: builder.mutation({
      query: (id) => ({
        url: "/users/" + id,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
      transformResponse: (response) => response.users,
    }),

    /**
     * @description getGame query gets a Quiz for the logged in user
     * @param {integer} id
     * @method GET
     */
    //do I need to speficy the user id here as well?
    getGame: builder.query({
      query: (id) => "/quizes/" + id,
      providesTags: ["quizes"],
      // transformResponse: (response) => response.quizes,
      // transformErrorResponse: (response) => response.data.error.message,
    }),

    /**
     * @description updatedQuizQuestion query updates the logged in users Quiz.current_question to show they have completed quiz
     * @param {integer} id
     * @method PATCH
     */

    updateQuizQuestionSolved: builder.mutation({
      query: (id) => ({
        url: "/quizes/" + id,
        method: "PATCH",
        body: { solved: true },
      }),
      invalidatesTags: ["quizes"],
      // transformResponse: (response) => response.quizes,
    }),
    /**
     * @description updatedQuizQuestionUnsolved query updates the logged in users Quiz.current_question to increase question by 1
     * @param {integer} id
     * @method PATCH
     */
    updateQuizQuestionUnsolved: builder.mutation({
      query: (id) => ({
        url: "/quizes/" + id,
        method: "PATCH",
        body: { solved: false },
      }),
      invalidatesTags: ["quizes"],
      // transformResponse: (response) => response.quizes,
    }),

    /**
     * @description getQuizProblem query gets the Quiz_problems by id
     * @param {integer} id
     * @method GET
     */

    getQuizProblems: builder.query({
      query: (id) => "/quiz_problems/" + id,
      providesTags: ["quiz_problems"],
      // transformResponse: (response) => response.users,
      // transformErrorResponse: (response) => response.data.error.message,
    }),

    /**
     * @description updateProblem query updates the logged in users Quiz_problems.user_answer on their quiz
     * @param {integer} id
     * @method PATCH
     */

    updateProblem: builder.mutation({
      query: (payload) => ({
        url: "/quiz_problems/" + payload.id,
        method: "PATCH",
        body: { user_answer: payload.user_answer },
      }),
      invalidatesTags: ["quizes"],
      // transformResponse: (response) => response.quizes,
    }),

    /**
     * @description getQuestions query gets Question by id
     * @param {integer} id
     * @method GET
     */

    getQuestions: builder.query({
      query: (id) => "/questions/" + id,
      providesTags: ["questions"],
      // transformResponse: (response) => response.questions,
      // transformErrorResponse: (response) => response.data.error.message,
    }),

    /**
     * @description getImageWords query gets Image_Word by id
     * @param {integer} id
     * @method GET
     */

    getImageWord: builder.query({
      query: (id) => "/image_words/" + id,
      providesTags: ["image_word"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdatedUserMutation,
  useGetGameQuery,
  useUpdateQuizQuestionSolvedMutation,
  useUpdateQuizQuestionUnsolvedMutation,
  useGetQuizProblemsQuery,
  useUpdateProblemMutation,
  useGetQuestionsQuery,
  useGetImageWordQuery,
} = gameApi;
