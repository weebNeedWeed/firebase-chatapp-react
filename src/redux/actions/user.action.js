import { createAction } from "@reduxjs/toolkit";

export const setUserName = createAction("USER/SET_USER_NAME");
export const setUserUid = createAction("USER/SET_USER_UID");
export const setUserAuthStatus = createAction("USER/SET_USER_AUTH_STATUS");
export const resetUserData = createAction("USER/RESET_DATA");
