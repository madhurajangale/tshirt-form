class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  printDetails() {
    console.log(`Regular- Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
  }

  printDetailsArrow = () => {
    console.log(`Arrow Function(member) - Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
  }

  static greet(name, age, job) {
    console.log(`Static - Name: ${name}, Age: ${age}, Job: ${job}`);
  }
}

const person1 = new Person('Madhura', 20, 'Web Developer');

person1.printDetails();      
person1.printDetailsArrow();   
Person.greet('Madhura', 20, 'student');

const display = (name,age,job) => {
  console.log(`Arrow (Non-member) - Name: ${name}, Age: ${age}, Job: ${job}`);
};

display(person1.name, person1.age, person1.job);

