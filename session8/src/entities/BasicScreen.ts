import { VideoMaterial } from "../materials/VideoMaterial"

export class BasicScreen extends Entity {
    public material: Material = new Material()
    public videoMaterial: VideoMaterial
    public planeShape: PlaneShape = new PlaneShape()

    constructor(
        transform: Transform,
        alphaSrc: string
    ){
        super()
        this.addComponent(transform)
        this.addComponent(this.planeShape)

        const uvArray = [
            0,.5, // TopRight
            .5,.5, // BottomRight
            .5,0, // BottomLeft
            0,0, // TopLeft
        ]

        this.planeShape.uvs = [
            ...uvArray,
            ...uvArray,
        ]
        
        this.videoMaterial = new VideoMaterial(
            "https://emedia.dclconnect.io:5443/tests/streams/306620935338210568993876.mp4",
            alphaSrc,
            10
        )
        this.addComponent(this.videoMaterial.material)
        this.videoMaterial.vt.playing = true
        engine.addEntity(this)
    }
}