import { BeerGlass } from "src/entities/beerGlass"

export const sceneMessageBus = new MessageBus()

export const updateP2PBeerPickUp = (uuid: string) => {
    sceneMessageBus.emit("beerPickUp", {
        uuid
    })
}

export const updateP2PBeerPutDown = (uuid: string, position: Vector3) => {
    sceneMessageBus.emit("beerPutDown", {
        uuid
    })
}

export const updateP2PBeerFill = (uuid: string, color: string) => {
    sceneMessageBus.emit("beerFill", {
        uuid, color
    })
}

export const updateP2PBeerDrink = (uuid: string) => {
    sceneMessageBus.emit("beerDrink", {
        uuid
    })
}




const beerGlasses: Array<BeerGlass> = []


sceneMessageBus.on("beerPickUp", (value, sender) => {
    const { uuid } = value
    if(!engine.entities[uuid]){
        let beerGlass = new BeerGlass(new Vector3(0,0,0), uuid)
    }else{
        let beerGlass = engine.entities[uuid] as BeerGlass

    }
    log(value, sender)
})

sceneMessageBus.on("beerPutDown", (value, sender) => {
    log(value, sender)
})

sceneMessageBus.on("beerFill", (value, sender) => {
    log(value, sender)
})

sceneMessageBus.on("beerDrink", (value, sender) => {
    log(value, sender)
})