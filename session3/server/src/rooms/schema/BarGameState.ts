import { Schema, Context, type } from "@colyseus/schema";

export class BarGameState extends Schema {

  @type("string") mySynchronizedProperty: string = "Hello world";

}
