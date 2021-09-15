export class Sound extends Entity {
    constructor(audio: AudioClip, loop: boolean = false, transform?: Vector3) {
      super()
      engine.addEntity(this)
      this.addComponent(new AudioSource(audio))
      this.getComponent(AudioSource).loop = loop
      this.addComponent(new Transform())
      if (transform) {
        this.getComponent(Transform).position = transform
      } else {
        this.getComponent(Transform).position = Camera.instance.position
      }
    }
  
    playAudioOnceAtPosition(transform: Vector3): void {
      this.getComponent(Transform).position = transform
      this.getComponent(AudioSource).playOnce()
    }
  
    playAudioAtPosition(transform: Vector3): void {
      this.getComponent(Transform).position = transform
      this.getComponent(AudioSource).playing = true
    }
  }

export const errorSound = new Sound(new AudioClip("sounds/error.mp3"))
export const beerPumpSound = new Sound(new AudioClip("sounds/beerPump.mp3"))
export const pickUpSound = new Sound(new AudioClip("sounds/pickUp.mp3"))
export const putDownSound = new Sound(new AudioClip("sounds/putDown.mp3"))
export const swallowSound = new Sound(new AudioClip("sounds/swallow.mp3"))