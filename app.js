"use strict";
// function first() {
//     console.log("first(): factory evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("first(): called");
//     };
//   }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function sealed(constructor) {
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
let Dog = class Dog {
    constructor(s, n) {
        this.species = s;
        this.names = n;
    }
    speack(message) {
        console.log(`bark ${message} bark`);
    }
};
Dog = __decorate([
    sealed
], Dog);
let dog1 = new Dog(`berger`, `max`);
let dog2 = new Dog(`kaleb`, `antar`);
console.log(dog1, dog2, dog1.speack(`hello`));
class Cat {
    constructor(catName, catType) {
        this.catName = catName;
        this.catType = catType;
    }
}
let cat1 = new Cat(`milou`, `bise`);
console.log(cat1);
//generics:
const addUID = (obj) => {
    // when we returne it it will know the properties of the object
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ nam: `Yoshu`, age: 40 });
//let docTwo=addUID(`hello`); // we are allowed to do it if we dont say extends object 
console.log(docOne); // we cant put docOne.nam,if we dont put generic bcz it doesnt know about nam or age
console.log(`generic`, docOne.nam, docOne.age);
const docThree = {
    uid: 1,
    resourceName: `person`,
    data: { namee: `shawn` }
};
const docFour = {
    uid: 2,
    resourceName: `shoppingList`,
    data: [`bread`, `milk`, `toilet roll`]
};
console.log(`doc3`, docThree);
console.log(`doc4`, docFour);
