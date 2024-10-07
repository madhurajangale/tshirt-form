class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, rollNo) {
        super(name, age); 
        if (rollNo <= 0) {
            throw new Error("Roll number must be greater than zero.");
        }
        this.rollNo = rollNo;
    }
    displayInfo() {
        const personInfo = super.displayInfo();
        return `${personInfo}, Roll No: ${this.rollNo}`;
    }
}

try {
    const student1 = new Student("Madhura", 20, 5);
    console.log(student1.displayInfo());
    const student2 = new Student("Yash", 21, 0); 
    console.log(student2.displayInfo());
} catch (error) {
    console.error(`Error: ${error.message}`);
}

