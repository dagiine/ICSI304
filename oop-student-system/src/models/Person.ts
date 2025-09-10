export class Person {
    constructor(public name: string, public age: number) {}
    
    introduce(): string {
        return `Сайн байна уу! Намайг ${this.name} гэдэг. Би ${this.age} настай.`;
    }

    getRole(): string {
        return "Person";
    }
}

export class Student extends Person {
    constructor(name: string, age: number, public studentId: string) {
        super(name, age);
    }

    override getRole(): string {
        return "Student";
    }
}

export class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }

    override getRole(): string {
        return "Teacher";
    }
}