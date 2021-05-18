import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
//TODO fixs
export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
};
