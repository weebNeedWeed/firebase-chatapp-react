import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const configureAppDatabase = () => {
	const firebaseConfig = {
		apiKey: process.env.REACT_APP_API_KEY,
		authDomain: process.env.REACT_APP_AUTH_DOMAIN,
		databaseURL: process.env.REACT_APP_DATABASE_URL,
		storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	};

	const app = initializeApp(firebaseConfig);

	const database = getDatabase(app);

	return database;
};

export default configureAppDatabase;
