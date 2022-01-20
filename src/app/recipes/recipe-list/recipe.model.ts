
export class Recipe{
    public name:string;
    public descritpion:string;
    public imagePath:string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.descritpion = desc;
        this.imagePath = imagePath;
    }
}