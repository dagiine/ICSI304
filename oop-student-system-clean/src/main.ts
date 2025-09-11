import { Student } from "./domain/Student";
import { Teacher } from "./domain/Teacher";
import { Course } from "./domain/Course";
import { CourseService } from "./business/CourseService";
import { StudentService } from "./business/StudentService";
import { TeacherService } from "./business/TeacherService";

// Өгөгдөл бэлтгэх
const student1 = new Student("S001", "Бат", 20);
const student2 = new Student("S002", "Сараа", 21);
const teacher1 = new Teacher("T001", "Мөнх", 35, "Математик");
const softCourse = new Course("C001", "ПХ-ийн Зохиомж ба Архитектур", teacher1.id);

// Үйлчилгээний классуудыг үүсгэх
const courseService = new CourseService([softCourse]);
const studentService = new StudentService([student1, student2]);
const teacherService = new TeacherService([teacher1]);

// Оюутан хичээлд бүртгүүлэх
courseService.enrollStudent("C001", student1);
courseService.enrollStudent("C001", student2);

// Оюутнуудад үнэлгээ оноох
courseService.assignGrade("C001", "S001", 85);
courseService.assignGrade("C001", "S002", 90);

// Дүнгийн жагсаалт авах
console.log(' ${softCourse.name} хичээлийн үнэлгээ:');
softCourse.getStudentGrades().forEach((grade, studentId) => {
    const student = studentService.findStudentById(studentId);
    console.log('${student?.name}: ${grade} оноо');
});

// Багшийн мэдээлэл
const teacher = teacherService.getTeacherById("T001");
console.log(' ${teacher?.name} багш ${teacher?.subject} хичээл зааж байна.');