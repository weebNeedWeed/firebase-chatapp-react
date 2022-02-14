import { ref } from "firebase/database";
import configureAppDatabase from "./configureAppDatabase.database";

const database = configureAppDatabase();

export const getUserListRef = () => ref(database, "users");
export const getUserRefByUid = (uid) => ref(database, `users/${uid}`);
export const getRoomListRef = () => ref(database, "rooms");
export const getRoomRefByUid = (uid) => ref(database, `rooms/${uid}`);
