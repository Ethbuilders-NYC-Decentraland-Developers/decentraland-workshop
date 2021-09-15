import { IsDispenser } from "src/components/flags"
import { BeerGlass } from "./beerGlass"
import { BeerTap } from "./beerTap"

type tapColliders = {
    [key:string] : Entity
}

export class BeerDispenser extends Entity {
    private redTap: BeerTap = new BeerTap('red', new Vector3(.35, 0, .3))
    private yellowTap: BeerTap = new BeerTap('yellow', new Vector3(0, 0, .3))
    private greenTap: BeerTap = new BeerTap('green', new Vector3(-.35, 0, .3))
    private tapColliders: tapColliders

    constructor(){
        super()
        this.addComponent(new Transform({position: new Vector3(8,1.25,8)}))
        this.addComponent(new GLTFShape("models/beerDispenser.glb"))
        this.addComponent(new IsDispenser())

        this.tapColliders = {
            redBase_collider : this.redTap,
            yellowBase_collider : this.yellowTap,
            greenBase_collider : this.greenTap,
        }

        this.redTap.setParent(this)
        this.yellowTap.setParent(this)
        this.greenTap.setParent(this)

        engine.addEntity(this)
    }

    placeBeer(entity: Entity, tapMeshName: string){
        let tapEntity = this.tapColliders[tapMeshName] as BeerTap
        let beerGlassEntity = entity as BeerGlass
        if(tapEntity){
            tapEntity.placeBeer(beerGlassEntity)
        }
    }
}