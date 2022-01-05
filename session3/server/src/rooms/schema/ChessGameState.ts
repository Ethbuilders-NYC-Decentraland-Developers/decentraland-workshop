import { Schema, Context, type } from "@colyseus/schema";

export class ChessGameState extends Schema {

  @type("string") mySynchronizedProperty: string = "Hello world";

}
