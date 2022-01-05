import { BeerGlass } from "./entities/beerGlass";
import { BeerDispenser } from "./entities/beerDispenser";
import { connect } from "./multiplayer/colyseus";
import { input } from './input'
import { addTestCube } from "@dcl/ecs-scene-utils";
import { WineGlass } from "./entities/wineGlass";

const beerDispenser = new BeerDispenser(new Vector3(8,1.25,8))
const beerDispenser2 = new BeerDispenser(new Vector3(2,.8,2))


addTestCube({ position: new Vector3(4, 1, 4) }, () => {
    const newGlass = new BeerGlass(new Vector3(1,1,1))
    newGlass.pickUp()
})

addTestCube({ position: new Vector3(10, 1, 10) }, () => {
    const newWineGlass = new WineGlass(new Vector3(1,1,1))
    newWineGlass.pickUp()
})

const base = new Entity()
base.addComponent(new GLTFShape("models/baseDarkWithCollider.glb"))
base.addComponent(new Transform())
engine.addEntity(base)

const tables = new Entity()
tables.addComponent(new GLTFShape("models/tables.glb"))
tables.addComponent(new Transform())
engine.addEntity(tables)

