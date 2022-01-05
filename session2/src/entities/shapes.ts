export class Shapes extends Entity {
    constructor(
        position: Vector3 = new Vector3(9, 2, 12)
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform({
        position,
        scale: new Vector3(1,1,1),
        rotation: new Quaternion().setEuler(0, 0, 0)
      }))
      this.addComponent(new PlaneShape())
    }
}


export class RotateEntity implements ISystem {
    public timer: number = 0
    public speed: number = 50
    public rotation: number = 0

    constructor(
        public entities: Array<Entity>
    ){

    }

    update(dt: number){
        this.timer+=dt
        this.entities.forEach(entity => {
            entity.getComponent(Transform).rotation.setEuler(0, (this.timer*this.speed), 0)
        })
    }
}

