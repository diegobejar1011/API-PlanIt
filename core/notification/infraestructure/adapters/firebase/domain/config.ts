import admin from "firebase-admin";
import serviceAccount from "./credentials/concise-haven-450204-m1-firebase-adminsdk-fbsvc-486ce0bc1d.json";


export const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});




