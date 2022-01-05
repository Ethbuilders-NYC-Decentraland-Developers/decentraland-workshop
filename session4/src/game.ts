class Plot extends Entity {
  constructor() {
    super()
    this.addComponent(new Transform({
      position: new Vector3(0,0,0),
      rotation: new Quaternion().setEuler(0,90,0),
    }))
    this.addComponent(new GLTFShape('models/plot.glb'))
    engine.addEntity(this)
  }
}

const plot = new Plot()