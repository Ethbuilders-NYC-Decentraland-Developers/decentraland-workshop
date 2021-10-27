export class VideoMaterial {
    public material: Material = new Material()
    public vc: VideoClip
    public vt: VideoTexture

    constructor(
        url: string,
        alphaSrc?: string,
        emissiveIntensity?: number,
    ){
        this.vc = new VideoClip(url)
        this.vt = new VideoTexture(this.vc)
        this.material.albedoTexture = this.vt
        if(alphaSrc){
            this.material.alphaTexture = new Texture(alphaSrc)
        }
        if(emissiveIntensity){
            this.material.emissiveTexture = this.vt
            this.material.emissiveIntensity = emissiveIntensity
            this.material.emissiveColor = Color3.White()
        }
    }
}