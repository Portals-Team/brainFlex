import { createSlice } from "@reduxjs/toolkit";
import api from "../../store/api";
import { selectToken } from "../auth/authSlice";
import { UseSelector } from "react-redux/es/hooks/useSelector";

const dashboardAPI = api.injectEndpoints({
  endpoints: (builder = {}),
});

export const {} = dashboardAPI;
