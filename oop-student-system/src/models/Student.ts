import { Person } from "./Person";

export class Student extends Person {
    private courses: string[] = [];

    constructor(name: string, age: number, public studentId: string) {
        super(name, age);
    }

    enroll(course: string) {
        this.courses.push(course);
    }

    getCourses(): string[] {
        return this.courses;
    }

    
}