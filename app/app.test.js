'use strict';

angular.module('app').controller('test', function () {
    this.testing = (a, b) => {
        return a + b;
    };

});


class AnimalES6 {
    constructor(name) {
        this.name = name;
        this._age = 0;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            console.log("We do not support undead animals");
        }

        this._age = value;
    }

    doSomething() {
        console.log("I'm a " + this.name);
    }
}

var a = new AnimalES6("윳후");
console.log(a);


a.age = -1;