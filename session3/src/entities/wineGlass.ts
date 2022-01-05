import { IsDrinkable, IsHoldable, IsWineGlass } from "src/components/flags"
import { PlayerState } from "src/multiplayer/state"
import { swallowSound } from "src/sounds"
import { Wait } from 'dclconnect'
import {
    updateP2PBeerPickUp,
    updateP2PBeerPutDown,
    updateP2PBeerFill,
    updateP2PBeerDrink,
} from "src/multiplayer/messagebus"

type BeerGlassAnimations = {
    [key:string] : AnimationState
}

export class WineGlass extends Entity {
    public isFull: boolean = false
    public color: string | null = null
    public isBeingHeld: boolean = false
    private holdPosition: Vector3 = new Vector3(.2, -.35, .5)
    private pickingUp: boolean = false

    // Animation States
    private animPourBlank: AnimationState = new AnimationState("Blank", { looping: false })
    private animPourRed: AnimationState = new AnimationState("PourRed", { looping: false })
    private animPourYellow: AnimationState = new AnimationState("PourYellow", { looping: false })
    private animPourGreen: AnimationState = new AnimationState("PourGreen", { looping: false })

    private animations: BeerGlassAnimations

    constructor(
        position: Vector3
    ){
        super()
        this.addComponent(new Transform({
            position,
            scale: new Vector3(2,2,2),
            rotation: new Quaternion().setEuler(0,-90,0)
        }))
        this.addComponent(new GLTFShape("models/beerGlass.glb"))

        this.addComponent(new Animator())
        this.getComponent(Animator).addClip(this.animPourBlank)
        this.getComponent(Animator).addClip(this.animPourRed)
        this.getComponent(Animator).addClip(this.animPourYellow)
        this.getComponent(Animator).addClip(this.animPourGreen)
        this.animPourBlank.play()

        this.animations = {
            blank: this.animPourBlank,
            red: this.animPourRed,
            yellow: this.animPourYellow,
            green: this.animPourGreen
        }

        this.addPointerDown()
        this.addComponent(new IsHoldable())
        this.addComponent(new IsDrinkable())
        this.addComponent(new IsWineGlass())

        engine.addEntity(this)
    }

    addPointerDown(){
        this.addComponent(
            new OnPointerDown(
                () => this.pickUp(),
                {
                    button: ActionButton.PRIMARY,
                    showFeedback: true,
                    hoverText: "Pick Up",
                }
            )
        )
    }

    public pickUp(){
        if(!PlayerState.isHolding && !PlayerState.holdingEntityId && !this.pickingUp){
            this.pickingUp = true
            this.setParent(Attachable.FIRST_PERSON_CAMERA)
            this.getComponent(Transform).position = this.holdPosition

            PlayerState.isHolding = true
            PlayerState.holdingEntityId = this.uuid

            new Wait(() => {
                this.pickingUp = false
            }, 1)
            this.removeComponent(OnPointerDown)
        }
    }

    public putDown(position: Vector3){
        if(PlayerState.isHolding && PlayerState.holdingEntityId == this.uuid){
            PlayerState.isHolding = false
            PlayerState.holdingEntityId = null
            this.setParent(null)
            this.getComponent(Transform).position = position
            this.addPointerDown()
        }
    }

    stopAnimations() {
        this.animPourBlank.stop()
        this.animPourRed.stop()
        this.animPourYellow.stop()
        this.animPourGreen.stop()
    }

    public fillGlass(color:string){
        let animation = this.animations[color]
        if(animation){
            animation.play()
            this.isFull = true
            this.color = color
        }
    }

    public drink(){
        if(this.isFull && !this.pickingUp){
            swallowSound.getComponent(AudioSource).playOnce()
            this.isFull = false
            this.stopAnimations()
            this.animPourBlank.play()
        }
    }
}