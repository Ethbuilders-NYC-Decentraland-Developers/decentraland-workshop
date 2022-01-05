import { BasicScreen } from "./BasicScreen"

export class MultiScreen extends Entity {
    public screens: Array<BasicScreen> = []

    constructor(
        public transforms: Array<Transform>,
        public url: string,
        public emissiveIntensity?: number,
        public alphaSrc?: string,
    ){
        super()

        this.addComponent(new Transform({
            position: new Vector3(8,5,8)
        }))

        let MostLeft: number = 0
        let MostRight: number = 0
        let MostBottom: number = 0
        let MostTop: number = 0



        transforms.forEach(transform => {
            const { position, scale } = transform

            MostTop = MostTop > position.y + (scale.y/2) ? MostTop : position.y + (scale.y/2)
            MostBottom = MostBottom < position.y - (scale.y/2) ? MostBottom : position.y - (scale.y/2)
            MostLeft = MostLeft < position.x - (scale.x/2) ? MostLeft : position.x - (scale.x/2)
            MostRight= MostRight > position.x + (scale.x/2) ? MostRight : position.x + (scale.x/2)

            const mostValues: MostScreenValues = {
                MostTop,
                MostBottom,
                MostLeft,
                MostRight,
            }

            const newScreen = new BasicScreen(
                transform,
                mostValues,
                alphaSrc,
            )
            newScreen.setParent(this)
        })

        engine.addEntity(this)
    }
}

export type MostScreenValues = {
    MostTop: number,
    MostBottom: number,
    MostLeft: number,
    MostRight: number,
}