export class Goal {
    // id: number;
    // name: string;
    // description: string;
    //  showDescription: boolean;
    // // constructor(public id: number,public name: string,public description: string){
    // //   this.showDescription=false;
    
    // constructor(id:number,name:string,description:string,showDescription:boolean){
    //      this.id = id;
    //      this.name = name;
    //      this.description = description;
    //      this.showDescription =this.showDescription;
    // }
    showDescription: boolean;
    constructor(public id: number,public name: string,public description: string, public completeDate:Date){
      this.showDescription=false;
    }
}


