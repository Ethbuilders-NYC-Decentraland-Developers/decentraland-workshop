export class Crate extends Entity {
    public textEntity: Entity = new Entity()
    public textShape: TextShape = new TextShape("CRATE!!")
    
    constructor(
        position: Vector3 = new Vector3()
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform({
        position,
        scale: new Vector3(1,1,1),
        rotation: new Quaternion().setEuler(0, 0, 0)
      }))
      this.addComponent(new GLTFShape('models/crate.glb'))


      this.textEntity.addComponent(new Transform({
          position: new Vector3(0, 1, 0)
      }))
      this.textShape.fontSize = 5
      this.textEntity.addComponent(this.textShape)
      this.textEntity.setParent(this)
      this.textEntity.addComponent(new Billboard())
    }

    onBreak(){
        // play break animation
        // play sound
    }

    onPickup(){

    }
}