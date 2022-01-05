import { BoxHighlight } from "dclconnect";
import { Crate } from "./entities/crate";
import { Door } from "./entities/door";
import { Facade } from "./entities/facade";
import { RotateEntity, Shapes } from "./entities/shapes";


const location = new Vector3(-8,0,-3)
const rotation = new Quaternion().setEuler(0,180,0)

class Base extends Entity{
  public door: Door
  public facade: Facade

  constructor(
    location: Vector3,
    rotation: Quaternion
  ){
    super()
    this.door = new Door(location)
    this.facade = new Facade(location)
    this.door.setParent(this)
    this.facade.setParent(this)

    this.addComponent(new Transform({
      rotation
    }))

    engine.addEntity(this)
  }
}

const base = new Base(location, rotation)
const crate = new Crate(new Vector3(8,.5,8))
const crate1 = new Crate(new Vector3(Math.random()*5,.5,8))
const crate2 = new Crate(new Vector3(Math.random()*5,.5,8))
const crate3 = new Crate(new Vector3(Math.random()*5,.5,8))


const rotateSystem = new RotateEntity([
  crate, crate1, crate2, crate3
])
engine.addSystem(rotateSystem)


const bh = new BoxHighlight(
  new Vector3(8,2,8),
  new Vector3(1,1,1),
  "top"
)
engine.addEntity(bh)