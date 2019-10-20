/* Admin Class */

"use strict";
/**
 *  Admin Class that inherits form the Person Class and has its own properties too
 */
class Admin extends Person {
    /**
     * 
     * @param {string} fname Student's first name
     * @param {string} lname Student's last name
     * @param {number} phone Student's phone number
     * @param {number} userid Students's user ID
     * @param {string/number} password Student's password to get in the system
     * @param {string} role Student's role in the system
     */
    constructor(fname, lname, phone, userid, password, role) {
        super(fname, lname, phone, userid, password, role);
    }

    /**
     * 
     * @param {*} app 
     * @returns {undefined}
     */
    assignApp(app) {
        this.app = app;
    }

    /**
     * Admin can see all the faculty members
     * @returns{undefined}
     */
    getAllFacultyMembers() {
        return this.app.faculty;
    }

    /**
     * Admin can see all the students
     * @returns {undefined}
     */
    getAllStudents() {
        return this.app.students;
    }

    /**
     * Admin can see all the admins
     * @returns {undefined}
     */
    getAllAdmins() {
        return this.app.admins;
    }

    /**
     * Admin can see all the courses
     * @returns {undefined}
     */
    getAllCourses() {
        return this.app.courses;
    }

    /**
     * Admin can add courses
     * @param {string} course Course to be added
     * @returns {undefined}
     */
    addCourse(course) {
        this.app.courses.push(course);
    }

    /**
     * Sorts the courses in ascending order
     * @returns {undefined}
     */
    sortCourses() {
        this.app.courses.sort((left, right) => {
            if (left.name > right.name) return 1;
            if (left.name < right.name) return -1;
            return 0;
        });
        return this.app.courses;
    }

    /**
     * Admin can add other admins
     * @param {string} admin Name of the admin
     * @returns {undefined}
     */
    addAdmin(admin) {
        this.app.admins.push(admin);
    }

    /**
     * Admin can add the faculty
     * @param {string} faculty Name of the faculty
     * @returns {undefined}
     */
    addFaculty(faculty) {
        this.app.faculty.push(faculty);
    }

    /**
     * Admin can add a student
     * @param {string} student Name of the student
     * @returns {undefined}
     */
    addStudent(student){
        this.app.students.push(student);
    }

    /**
     * 
     * @param {string} student Student Name
     * @param {string} course Course Name
     * @return {undefined}
     */
    assignCourse(student, course) {
        student.addCourse(course);
    }

    /**
     * 
     * @param {string} student Name of the student
     * @returns {undefined}
     */
    getStudentCourse(student) {
        return student.getCourses();
    }
}