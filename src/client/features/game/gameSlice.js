import api from "../../store/api";

const gameApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description updatedUser query updates the logged in Users.aggregate_score
     * @method PATCH
     */
    updatedUser: builder.mutation({
      query: ({ id, quizScore }) => ({
        url: "/users/" + id,
        method: "PATCH",
        body: { quizScore: quizScore },
      }),
      invalidatesTags: ["User"],
      // transformResponse: (response) => response.users,
    }),

    /**
     * @description increaseQuizCount when submitted increases quiz count by 1
     * @method PATCH
     */

    /**
     * @description getGame query gets a Quiz for the logged in user
     * @param {integer} id
     * @method GET
     */
    getGame: builder.query({
      query: (id) => "/quizes/" + id,
      providesTags: ["quizes"],
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
    }),

    /**
     * @description getQuizProblem query gets the Quiz_problems by id
     * @param {integer} id
     * @method GET
     */
    getQuizProblems: builder.query({
      query: (id) => "/quiz_problems/" + id,
      providesTags: ["quiz_problems"],
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
      //invalidatesTags: ["quizes"],
    }),

    /**
     * @description getQuestions query gets Question by id
     * @param {integer} id
     * @method GET
     */
    getQuestions: builder.query({
      query: (id) => "/questions/" + id,
      providesTags: ["questions"],
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
