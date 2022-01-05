import { Room, Client } from "colyseus";
import { ChessGameState } from "./schema/ChessGameState";

export class ChessGame extends Room<ChessGameState> {

  onCreate (options: any) {
    this.setState(new ChessGameState());

    this.onMessage("type", (client, message) => {
      //
      // handle "type" message
      //
    });

  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
