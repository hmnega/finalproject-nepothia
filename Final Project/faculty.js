/* Faculty Class */

"use strict";
/**
 * A Faculty Class that inherits form the Person Class and has its own properties too
 */
class Faculty extends Person {
    /**
     * 
     * @param {string} fname Faculty's first name
     * @param {string} lname Faculty's last name
     * @param {number} phone Faculty's phone number
     * @param {number} userid Students's user ID
     * @param {string/number} password Faculty's password to get in the system
     * @param {string} role Faculty's role in the system
     * @param {string} department Faculty's department in the college
     */
    constructor(fname, lname, phone, userid, password, role, department) {
        super(fname, lname, phone, userid, password, role);
        this.department = department;

    }
    /**
     * Gets the department of the faculty
     * @returns {string} department of the faculty
     */
    getDepartment() {
        return this.department;
    }


    /**
     * 
     * @param {} app 
     *  
     */
    assignApp(app) {
        this.app = app;
    }

    /**
     * Assigning admin
     * @param {string} admin administrator
     * 
     */
    assignAdmin(admin) {
        this.admin = admin;
    }

    /**
     * Faculty can add courses
     * @param {string} course Course to be added
     */
    addCourse(course) {
        this.app.courses.push(course);
    }
    /**
     * Gets all the student
     * 
     */
    getAllStudents() {
        return this.app.getAllStudents();
    }

    /**
     * Gets the student courses
     * @param {string} student Name of the student
     *
     */
    getStudentCourses(student) {
        return student.getCourses();
    }

    /**
     * Gets all the Faculty Memembers
     * 
     */
    getAllFacultyMembers() {
        return this.app.getAllFacultyMembers();
    }

    /**
     * Faculty can see the courses
     * 
     */
    getAllCourses() {
        return this.app.courses;
    }

    /**
     * Sorts the courses in ascending order
     * 
     */
    sortCourses() {
        this.app.courses.sort((left, right) => {
            if (left.name > right.name) return 1;
            if (left.name < right.name) return -1;
            return 0;
        });
        return this.app.courses;
    }


}