import { beerPumpSound } from "src/sounds"
import { BeerGlass } from "./beerGlass"

export class BeerTap extends Entity {
    public beerGlassEntity: BeerGlass | null = null

    constructor(
        public color: string,
        public positionOffset: Vector3,
    ){
        super()
        this.addComponent(new Transform())
        this.addComponent(new GLTFShape(`models/${color.toLowerCase()}Tap.glb`))

        this.addComponent(new Animator())
        this.getComponent(Animator).addClip(new AnimationState("Blank", { looping: false }))
        this.getComponent(Animator).addClip(new AnimationState("Pour", { looping: false }))
        this.getComponent(Animator).getClip("Blank").play()

        this.addPointerDown()

        engine.addEntity(this)
    }

    placeBeer(entity: Entity){
        let beerGlassEntity = entity as BeerGlass
        this.beerGlassEntity = beerGlassEntity
        beerGlassEntity.putDown(this.positionOffset)
        beerGlassEntity.setParent(this)
    }

    playPourAnim(){
        beerPumpSound.getComponent(AudioSource).playOnce()
        this.getComponent(Animator).getClip("Pour").play()
        debugger
        if(this.beerGlassEntity && !this.beerGlassEntity.isFull){
            this.beerGlassEntity.fillGlass(this.color)
        }
    }

    stopAnimations() {
        this.getComponent(Animator).getClip("Blank").stop()
        this.getComponent(Animator).getClip("Pour").stop()
    }

    addPointerDown() {
        this.addComponent(new OnPointerDown(() => {
          this.playPourAnim()
        }, {
          button: ActionButton.PRIMARY,
          hoverText: "Pour",
          showFeedback: true
        }))
      }
}