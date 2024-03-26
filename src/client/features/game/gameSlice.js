import api from "../../store/api";

const gameApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description getUsers query gets a list of all users.
     * @method GET
     */
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
      transformResponse: (response) => response.users,
      transformErrorResponse: (response) => response.data.error.message,
    }),

    /**
     * @description updatedUser query updates the logged in users aggregate score
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
     * @description getGame query gets a quiz for the logged in user
     * @method GET
     */
    //do I need to speficy the user id here as well?
    getGame: builder.query({
      query: (id) => "/quizes/" + id,
      providesTags: ["quizes"],
      transformResponse: (response) => response.quizes,
      transformErrorResponse: (response) => response.data.error.message,
    }),

    /**
     * @description updatedQuizQuestion query updates the logged in users current question on their quiz to show they have completed the question
     * @method PATCH
     */

    updatedQuizQuestion: builder.mutation({
      query: (id) => ({
        url: "/quizes/" + id,
        method: "PATCH",
        body: { solved: true },
      }),
      invalidatesTags: ["quizes"],
      transformResponse: (response) => response.quizes,
    }),
  }),
});

export const {} = gameApi;
("hello world");
("Hello again");
("Hello again again");
