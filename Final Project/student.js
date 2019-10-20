/* Student Class */

"use strict";
/**
 * A Student Class that inherits form the Person Class and has its own properties too
 */
class Student extends Person {
    /**
     * 
     * @param {string} fname Student's first name
     * @param {string} lname Student's last name
     * @param {number} phone Student's phone number
     * @param {number} userid Students's user ID
     * @param {string/number} password Student's password to get in the system
     * @param {string} role Student's role in the system
     * @param {number} entryYear The year the student enrolled in the college
     * @param {number} gpa Student's GPA for the course
     */
    constructor(fname, lname, phone, userid, password, role, entryYear, gpa) {
        super(fname, lname, phone, userid, password, role);
        this._entryYear = entryYear;
        this._gpa = gpa;
        this.courses = [];
    }
    /**
     * Gets the student's enrolled year
     * @return {number} Year the student got enrolled
     */
    getEntryYear() {
        return this._entryYear;
    }
    /**
     * Gets the sutdent's GPA
     * @return {number} The student's GPA
     */
    getGPA() {
        return this._gpa;
    }
    /**
     * Adds course to the courses array
     * @param {string} course Course to be added
     * @return {undefined}
     */
    addCourse(course) {
        this.courses.push(course);
    }
    /**
     * Sorts the courses in ascending order
     * @returns {undefined}
     */
    sortCourses() {
        this.courses.sort((left, right) => {
            if (left.name > right.name) return 1;
            if (left.name < right.name) return -1;
            return 0;
        });
        return this.courses;
    }
    /**
     * Assigning courses
     * @param {string} courses Courses to be assigned
     * @return {undefined}
     */
    assignCourses(courses) {
        this.courses = courses;

    }
    /**
     * Get courses for the student
     * @return{undefined} 
     */
    getAllCourses() {
        return this.courses;
    }


}