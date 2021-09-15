import { Room, Client } from "colyseus";
import { BarGameState } from "./schema/BarGameState";

export class BarGame extends Room<BarGameState> {

  onCreate (options: any) {
    this.setState(new BarGameState());

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
