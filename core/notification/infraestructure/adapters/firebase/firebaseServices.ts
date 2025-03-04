import { SendMultipleNotificationService, SendNotificationService } from "../../../application";
import { FirebaseRepository } from "./FirebaseRepository";

const firebaseRepository  = new FirebaseRepository();

export const sendNotificationService = new SendNotificationService(firebaseRepository);
export const sendMultipleNotificationService = new SendMultipleNotificationService(firebaseRepository);