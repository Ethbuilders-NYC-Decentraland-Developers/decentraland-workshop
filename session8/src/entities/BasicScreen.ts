import { VideoMaterial } from "../materials/VideoMaterial"
import { MostScreenValues } from "./MultiScreen"

export class BasicScreen extends Entity {
    public material: Material = new Material()
    public videoMaterial: VideoMaterial
    public planeShape: PlaneShape = new PlaneShape()

    constructor(
        transform: Transform,
        mostScreenValues: MostScreenValues,
        alphaSrc?: string,
    ){
        super()
        this.addComponent(transform)
        this.addComponent(this.planeShape)

        const { position, scale }= transform
        const { MostLeft, MostRight, MostBottom, MostTop } = mostScreenValues

        let tl: Vector2 = new Vector2(position.x - (scale.x/2), position.y + (scale.y/2))
        let tr: Vector2 = new Vector2(position.x + (scale.x/2), position.y + (scale.y/2))
        let bl: Vector2 = new Vector2(position.x - (scale.x/2), position.y - (scale.y/2))
        let br: Vector2 = new Vector2(position.x + (scale.x/2), position.y - (scale.y/2))

        debugger;

        let sideUVs : Array<number> = [
            Scalar.InverseLerp(MostLeft, MostRight, bl.x),
            Scalar.InverseLerp(MostTop, MostBottom, bl.y),

            Scalar.InverseLerp(MostLeft, MostRight, br.x),
            Scalar.InverseLerp(MostTop, MostBottom, br.y),

            Scalar.InverseLerp(MostLeft, MostRight, tr.x),
            Scalar.InverseLerp(MostTop, MostBottom, tr.y),

            Scalar.InverseLerp(MostLeft, MostRight, tl.x),
            Scalar.InverseLerp(MostTop, MostBottom, tl.y),
        ]

        this.planeShape.uvs = [
            ...sideUVs,
            ...sideUVs,
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