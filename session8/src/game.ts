import { DCLConnectEase, DynamicImage2 } from "../../node_modules/dclconnect/dist/index"

let imageAtlas = "images/alpha_circle.jpg"
let imageTexture = new Texture(imageAtlas)

const canvas = new UICanvas()

const playButton = new UIImage(canvas, imageTexture)
playButton.sourceLeft = 26
playButton.sourceTop = 128
playButton.sourceWidth = 128
playButton.sourceHeight = 128

const di = new DynamicImage2(playButton)

di.fadeIn(2, DCLConnectEase.easeInBounce)
