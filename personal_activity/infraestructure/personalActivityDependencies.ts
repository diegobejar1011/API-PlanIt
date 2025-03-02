import { CreatePersonalActivityService, GetPersonalActivitiesService, GetPersonalActivityInfoService, UpdatePersonalActivityService, DeletePersonalActivityService, GetPersonalActivitiesInfoService } from "../application";
import { MySQLRepository } from "./adapters/MySQLRepository";
import { CreatePersonalActivityController, DeletePersonalActivityController, GetPersonalActivitiesController, GetPersonalActivitiesInfoController, GetPersonalActivityInfoController, UpdatePersonalActivityController } from "./controllers";

const mysqlRepository = new MySQLRepository();

const getPersonalActivitiesService = new GetPersonalActivitiesService(mysqlRepository);
const getPersonalActivitiesInfoService = new GetPersonalActivitiesInfoService(mysqlRepository);
const getPersonalActivityInfoService = new GetPersonalActivityInfoService(mysqlRepository);
const createPersonalActivityService = new CreatePersonalActivityService(mysqlRepository);
const updatePersonalActivityService = new UpdatePersonalActivityService(mysqlRepository);
const deletePersonalActivityService = new DeletePersonalActivityService(mysqlRepository);

export const getPersonalActivitiesController = new GetPersonalActivitiesController(getPersonalActivitiesService);
export const getPersonalActivitiesInfoController = new GetPersonalActivitiesInfoController(getPersonalActivitiesInfoService);
export const getPersonalActivityInfoController = new GetPersonalActivityInfoController(getPersonalActivityInfoService);
export const createPersonalActivityController = new CreatePersonalActivityController(createPersonalActivityService);
export const updatePersonalActivityController = new UpdatePersonalActivityController(updatePersonalActivityService);
export const deletePersonalActivityController = new DeletePersonalActivityController(deletePersonalActivityService);



