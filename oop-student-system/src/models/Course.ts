import { Student } from "./Student";

export class Course {
    private students: Student[] = new Array();
    private grades: Map<Student, number> = new Map();

    constructor(public name: string, public teacher: string) {}
    
    enrollStudent(student: Student) {
        this.students.push(student);
    }

    assignGrade(student: Student, grade: number) {
        this.grades.set(student, grade);
    }

    getStudentGrades(): Map<Student, number> {
        return this.grades;
    }

    calculateAverage(): number {
        let sum = 0;
        let count = 0;

        for (const [student, grade] of this.grades) {
            sum += grade;
            count++;
        }

        if (count === 0) {
            return 0;
        }

        return sum / count;
    }
}