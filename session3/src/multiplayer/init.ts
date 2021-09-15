import { connect } from "./colyseus";

connect("bargame").then((room) => {
    log("Connected!");
  
    room.state.blocks.onAdd = (block: any, i: number) => {
        log('new block added')
    };
  
    room.state.players.onAdd = (player: any, sessionId: string) => {
        player.listen("listenEvent", (newRanking: number) => {
  
        });
    }
  
    // when a player leaves, remove it from the leaderboard.
    room.state.players.onRemove = () => {
  
    }
  
    room.onMessage("custom", (payload: any) => {
        log('custom message', payload)
    })
  
    room.onLeave((code) => {
        log("onLeave, code =>", code);
    });
  
  }).catch((err) => {
    error(err);
  
});
