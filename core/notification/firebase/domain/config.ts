import admin from "firebase-admin";
import serviceAccount from "./credentials/peaceful-parity-451919-e8-firebase-adminsdk-fbsvc-63adda6d28.json";


export const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});




