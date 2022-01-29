import { ref, push } from "firebase/database";
import configureAppDatabase from "./configureAppDatabase.database";

const database = configureAppDatabase();

export const getUserListRef = () => push(ref(database, "users"));
