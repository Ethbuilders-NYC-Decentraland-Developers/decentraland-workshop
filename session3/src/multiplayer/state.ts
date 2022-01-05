export const GameState = {

}
interface IPlayerState {
    isHolding: boolean
    holdingEntityId: string | null
}

export const PlayerState : IPlayerState  = {
    isHolding: false,
    holdingEntityId: null,
}