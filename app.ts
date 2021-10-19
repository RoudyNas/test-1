

// function first() {
//     console.log("first(): factory evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("first(): called");
//     };
//   }
   
//   function second() {
//     console.log("second(): factory evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("second(): called");
//     };
//   }
   
//   class ExampleClass {
//     @first()
//     @second()
//     method() {}
//   }
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

// @sealed
// class BugReport {
//   type = "report";
//   title: string;
 
//   constructor(t: string) {
//     this.title = t;
//   }
// }
@sealed
class Dog{
   species:string;
   names:string;
    constructor(s:string, n:string){
     this.species=s;
     this.names=n;
    }

    speack(message:string):void{
        console.log(`bark ${message} bark`)
    }
//    public get fullName():string{
   
//     }
}
let dog1=new Dog(`berger`, `max`);
let dog2=new Dog(`kaleb`, `antar`);

console.log(dog1,dog2, dog1.speack(`hello`));

class Cat{
    constructor(
        public catName:string,  
        public catType:string
        ){}
}
let cat1=new Cat(`milou`, `bise`)
console.log(cat1)


//generics:

const addUID = <T extends {nam:string}> (obj:T)=>{ // capture whatever item it passes to the function ,
    // when we returne it it will know the properties of the object
    let uid=Math.floor(Math.random()*100);
    return{...obj,uid}
}
let docOne=addUID({nam:`Yoshu`,age:40});
//let docTwo=addUID(`hello`); // we are allowed to do it if we dont say extends object 
console.log(docOne);// we cant put docOne.nam,if we dont put generic bcz it doesnt know about nam or age
console.log(`generic`, docOne.nam,docOne.age);

//with interfaces :
interface Resource<T>{ // defines how an object look
    uid:number;
    resourceName: string;
    data: T ;// we want to make this flexible
}

const docThree: Resource<object> ={
    uid:1,
    resourceName: `person`,
    data:{namee: `shawn`}
}

const docFour: Resource <string[]> = {
    uid:2,
    resourceName:`shoppingList`,
    data:[ `bread`, `milk`, `toilet roll`]
    
    
}
console.log(`doc3`, docThree)
console.log(`doc4`, docFour)