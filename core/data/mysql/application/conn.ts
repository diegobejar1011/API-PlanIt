import { createConnection } from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { DataConfig } from "../domain/config";

const conn : Connection = createConnection(DataConfig);

export const db = conn.promise();