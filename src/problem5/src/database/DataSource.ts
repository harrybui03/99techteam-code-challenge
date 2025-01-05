import { DataSource } from "typeorm";
import { Todo } from "../entities/Todo";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  entities: [Todo],
});
