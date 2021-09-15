import { IsHoldable, IsDrinkable, IsDispenser } from "./components/flags";
import { BeerDispenser } from "./entities/beerDispenser";
import { BeerGlass } from "./entities/beerGlass";
import { PlayerState } from "./multiplayer/state"

export const input = Input.instance

input.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, (event) => {
    if (PlayerState.isHolding && PlayerState.holdingEntityId) {
        let entity = engine.entities[PlayerState.holdingEntityId]
        if(entity.hasComponent(IsDrinkable)){
            let holdableEntity = entity as BeerGlass
            holdableEntity.drink()
        }
    } else {
        // Show an error message
    }
})
  
input.subscribe("BUTTON_DOWN", ActionButton.SECONDARY, true, (event) => {
    if (PlayerState.isHolding && PlayerState.holdingEntityId && event.hit) {
        if (event.hit.normal.y > 0.99) {
            let entity = engine.entities[PlayerState.holdingEntityId]
            if(entity.hasComponent(IsHoldable) && !entity.hasComponent(OnPointerDown)){
                let target = engine.entities[event.hit.entityId]
                if(target.hasComponent(IsDispenser)){
                    let beerDispenserEntity = target as BeerDispenser
                    let beerEntity = entity as BeerGlass
                    let tapMeshName = event.hit.meshName
                    beerDispenserEntity.placeBeer(beerEntity, tapMeshName)
                } else {
                    let holdableEntity = entity as BeerGlass
                    holdableEntity.putDown(event.hit.hitPoint)
                }
            }
        } else {
            // Show an error message
        }
    }
})
