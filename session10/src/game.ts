class Base extends Entity {
  constructor() {
    super()
    this.addComponent(new Transform({
      position: new Vector3(0,0,0),
      scale: new Vector3(1,1,1),
      rotation: new Quaternion().setEuler(0,180,0),
    }))
    this.addComponent(new GLTFShape('models/base_model.glb'))
    engine.addEntity(this)
  }
}

const b = new Base()