const object = {
  name: "Irodabonu",
  age: 18,
  University: "IMC KREMS",
  introduce: function () {
    console.log(`My name is ${this.name} \nI am ${this.age} years old :)`);
  },
};

object.introduce();

const person = {
  call: "Human being",
  calling() {
    console.log(`I am a ${this.call} !!!`);
  },
};
person.calling();
person.call_me = "Are you calling me ???";
person.callme = function () {
  console.log(`${this.call_me}`);
};
person.callme();

object.age = 19;
object.introduce();

function object_creation() {
  news = {};
  news.name = "AI";
  news.age = 200;
  news.intro = function () {
    console.log(`${news.age / 100} years passed Currently`);
  };
  return news;
}

const obj_c = object_creation();
obj_c.intro();

function this_object_new(name) {
  this.name = name;
  this.age = 19;
  this.methods = function () {
    console.log(`I am a ${this.age} years old AI intellect`);
  };
}

objectnew = new this_object_new("SOPHIA");
objectnew.methods();

class my_class {
  constructor(name, age) {
    this.name = name;
    this.old = age;
  }
  tellme() {
    console.log(`<<< ${this.name} and ${this.old} >>>`);
  }
}
const telling = new my_class("Sammi", 20);
telling.tellme();

const parent = {
  machine: ["PC", "Virtual", "Desktop"],
  tool: ["mouse", "screen"],
  show() {
    console.log(`${this.machine[0]} has tool like ${this.tool[0]}`);
  },
};

parent.show();

const child = {
  __proto__: parent,
  machine: ["Virtual", "Desktop"],
};
child.show();

class parent_me {
  constructor(verse) {
    this.v = verse;
  }
  demonstrate() {
    console.log(`My version is ${this.v}`);
  }
}

class child_me extends parent_me {
  constructor(data) {
    super();
    this.v = data;
  }
  demonstrate() {
    console.log(`<<< Version updated >>>\nMy version is ${this.v}`);
  }
}

p = new parent_me("MBD 2024");
c = new child_me("MY-33 2029");
p.demonstrate();
c.demonstrate();

function proto() {
  this.name = "shukrona";
  this.age = 4;
}

proto.prototype.print = function () {
  console.log(`I love you ${this.name}`);
};

const is = new proto();
is.print();

// Object destruction
const desturction = {
  counrty: "USA",
  city: "New york",
  postcode: "A0023",
};

const { counrty, city, postcode } = desturction;
console.log(`${counrty} ${city} ${postcode}`);

function des({ counrty, postcode }) {
  console.log(counrty, postcode);
}
des(desturction);

const obj1 = { x: 1, y: 9 };
const obj2 = { x: 3, y: 11 };
const obj3 = { x: 2, y: 20 };
const merged = { obj1, obj2, obj3 };
console.log(merged);

const define_object = {};
Object.defineProperty(define_object, "city", {
  value: "Tashkent",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(define_object.city);
define_object.city = "Andijan";
console.log(define_object.city);
delete define_object.city;
Object.defineProperty(define_object, "university", {
  value: "economic",
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(define_object.university);
