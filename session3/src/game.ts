import { BeerGlass } from "./entities/beerGlass";
import { BeerDispenser } from "./entities/beerDispenser";
import { connect } from "./multiplayer/colyseus";
import { input } from './input'

const beerDispenser = new BeerDispenser()
const beerGlass = new BeerGlass(new Vector3(1,1,1))

const base = new Entity()
base.addComponent(new GLTFShape("models/baseDarkWithCollider.glb"))
base.addComponent(new Transform())
engine.addEntity(base)

const tables = new Entity()
tables.addComponent(new GLTFShape("models/tables.glb"))
tables.addComponent(new Transform())
engine.addEntity(tables)

