export class Door extends Entity {
    public animator: Animator = new Animator()

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

      this.addComponent(new GLTFShape('models/door.glb'))

      this.addComponent(this.animator)

      this.addComponent(
        new OnClick((): void => {
          this.toggleDoor()
        })
      )
    }

    toggleDoor() {
        log('THIS IS BEING CLICKED!!!!!!!!!!')
        this.getComponent(Animator).addClip(new AnimationState("OpenDoor"))
    }
}