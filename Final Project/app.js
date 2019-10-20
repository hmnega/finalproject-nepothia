/* The App Class  */


"use strict";
/**
 * An App Class that creates and gets all the courses, students, faculties and admins.
 */
class App {
    /**
     * 
     * @param {string} courses Courses for the students
     * @param {string} students Students
     * @param {string} faculty Faculties
     * @param {string} admins Adminsitrations 
     */
    constructor(courses, students, faculty, admins) {
        this.courses = courses;
        this.students = students;
        this.faculty = faculty;
        this.admins = admins;
        this.admins.forEach(adm => adm.assignApp(this));
        this.faculty.forEach(members => members.assignApp(this));
    }

    /**
     * Student Creation
     * @return {array} returns student array
     */
    static createStudentsArray() {
        const student1 = new Student("Ashim", "Ghimire", 3195733590, 110228, "test", "student", 2019, 3.5);
        const student2 = new Student("hiwot", "Carter", 3195733589, 119879, "test", "student", 2019, 3.75);
        const student3 = new Student("Jane", "Doe", 3195736747, 113457, "test", "student", 2019, 3.5);
        return [student1, student2, student3];
    }

    /**
     * Faculty Creation
     * @return{array} returns array of faculty
     */
    static createFacultyArray() {
        const faculty1 = new Faculty("Keith", "Levi", 6412347658, 110374, "test", "faculty", "Computer");
        const faculty2 = new Faculty("Umur", "Inan", 6412548760, 110400, "test", "faculty", "Biology");
        return [faculty1, faculty2];
    }

    /**
     * Admin Creation
     * @return {array} Returns array of admin
     */
    static createAdminArray() {
        const admin1 = new Admin("Colleen", "Lamb", 3194630985, 110874, "test", "admin");
        const admin2 = new Admin("Brian", "Carter", 3198753921, 110764, "test", "admin");
        return [admin1, admin2];
    }

    /**
     * Course Creation
     * @return {array} Returns array of courses
     */
    static createCourses() {
        const course1 = new Course(301, "Intro To Javascript", "CS301");
        const course2 = new Course(303, "OOP", "CS303");
        const course3 = new Course(350, "Genetics", "B350");
        return [course1, course2, course3];
    }

    /**
     * Initializing all the static functions
     * 
     */
    static initialize() {
        let courses = App.createCourses();
        let students = App.createStudentsArray();
        let faculty = App.createFacultyArray();
        let admins = App.createAdminArray();
        students.forEach(student => student.assignCourses(courses));
        App.instance = new App(courses, students, faculty, admins);
        return App.instance;
    }

    /**
     * Get all the faculties
     * 
     */
    getAllFacultyMembers() {
        return this.faculty;
    }

    /**
     * Get all the courses
     * 
     */
    getAllCourses() {
        return this.courses;
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
     * Get all the students
     * 
     */
    getAllStudents() {
        return this.students;
    }

    /**
     * Get all the admins
     * 
     */
    getAllAdmins() {
        return this.admins;
    }
}


/**
 * 
 * @param {string} name Username
 * @param {string/number} password Password
 * @param {button} role Role of the user
 * @returns {string} user
 */
function checkLogin(name, password, role) {
    let user = null;
    switch (role) {
        case "admin": {
            user = app.admins.find(admin => admin.fname === name && password === admin.password);
            return user;

        }

        case "faculty": {
            user = app.faculty.find(member => member.fname === name && password === member.password);
            return user;

        }

        case "student": {
            user = app.getAllStudents().find(student => student.fname === name && password === student.password);
            return user;

        }

        default: {
            alert("Please check a button to Login");
            break;
        }
    }
    return user;

}

const app = App.initialize();
/**
 * Display Course
 */
let courses = app.sortCourses().map(course => course.name).join(",");
const getCourses = document.querySelector("#display");
getCourses.addEventListener("click", function (event) {
    document.querySelector("#displayCourses").innerHTML = courses;
})

/**
 * Login Page
 */
const loginButton = document.querySelector("#login");
loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const roles = document.getElementsByName("role");
    const role = Array.prototype.slice.call(roles).find(element => element.checked);
    const user = checkLogin(name, password, role.value);
    if (!user) {
        alert("Not a valid Login");
        return;
    }
    app.user = user;
    if (user.role === "admin") {
        const adminPanel = document.querySelector(".admin-box");
        document.querySelector(".login-box").style.display = "none";
        adminPanel.style.display = "block";
    } else if (user.role === "faculty") {
        const facultyPanel = document.querySelector(".faculty-box");
        document.querySelector(".login-box").style.display = "none";
        facultyPanel.style.display = "block";

    } else if (user.role === "student") {
        const studentPanel = document.querySelector(".student-box");
        document.querySelector(".login-box").style.display = "none";
        studentPanel.style.display = "block";
    }
});

/**
 * 
 * Logout 
 */
function logout(event) {
    event.preventDefault();
    if (!app.user) {
        return;
    }
    switch (app.user.role) {
        case "admin":
            document.querySelector(".admin-box").style.display = "none";
            break;

        case "faculty":
            console.log(app.user);
            document.querySelector(".faculty-box").style.display = "none";
            break;
        case "student":
            document.querySelector(".student-box").style.display = "none";
            break;
    }
    app.user = null;
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector(".login-box").style.display = "block";

}
document.querySelectorAll(".logout").forEach(log => log.addEventListener("click", logout));



/**
 * 
 * See All Courses 
 */
function seeAllCourses(event) {
    event.preventDefault();
    if (!app.user) {
        return;
    }
    const displayContent = document.querySelectorAll(".displayContent");
    displayContent.forEach(dc => dc.innerHTML = app.user.sortCourses().map(course => `${course.name} [Course Code:${course.code}]`).join("<br>"));
}
document.querySelectorAll(".allCourses").forEach(el => el.addEventListener("click", seeAllCourses));


/**
 * 
 * See All Students 
 */
function seeAllStudents(event) {
    event.preventDefault();
    if (!app.user || (app.user.role !== "admin" && app.user.role !== "faculty")) {
        return;
    }
    const displayContent = document.querySelectorAll(".displayContent");
    displayContent.forEach(dc => dc.innerHTML = app.user.getAllStudents().map(student => `${student.fname} ${student.lname} [ID:${student.userid}]`).join("<br>"));
}
document.querySelectorAll(".allStudents").forEach(el => el.addEventListener("click", seeAllStudents));



/**
 * See All Faculty
 * 
 */
function seeAllFaculty(event) {
    event.preventDefault();
    if (!app.user || (app.user.role !== "admin" && app.user.role !== "faculty")) {
        alert("Insufficient Permission");
        return;
    }
    const displayContent = document.querySelectorAll(".displayContent");
    displayContent.forEach(dc => dc.innerHTML = app.user.getAllFacultyMembers().map(faculty => `${faculty.fname} ${faculty.lname} [Department:${faculty.department}]`).join("<br>"));
}
document.querySelectorAll(".allFaculty").forEach(el => el.addEventListener("click", seeAllFaculty));


/**
 * See All Admin
 */
function seeAllAdmins(event) {
    event.preventDefault();
    if (!app.user || app.user.role !== "admin") {
        alert("Insufficient Permission");
        return;
    }
    const displayContent = document.querySelector(".displayContent");
    displayContent.innerHTML = app.user.getAllAdmins().map(admin => `${admin.fname} ${admin.lname}`).join("<br>");

}
document.querySelector(".allAdmins").addEventListener("click", seeAllAdmins);

/**
 * Add Courses
 */
const addCourse = document.querySelectorAll(".addCourse");
addCourse.forEach(el => el.addEventListener("click", function (event) {
    event.preventDefault();
    if (!app.user || (app.user.role !== "admin" && app.user.role !== "faculty")) {
        alert("Insufficient Permission");
        return;
    }
    let formData;
    if (app.user.role == "admin") {
        formData = new FormData(document.querySelector(".addCourseFormAdmin"));

    } else {
        formData = new FormData(document.querySelector(".addCourseFormFaculty"));
    }

    let newCourse = new Course(formData.get("courseID"), formData.get("courseName"), formData.get("courseCode"));
    app.user.addCourse(newCourse);
    console.log(newCourse)
}))

/**
 * Add Student
 */
const addStudent = document.querySelector(".addStudent");
addStudent.addEventListener("click", function (event) {
    event.preventDefault();
    if (!app.user || (app.user.role !== "admin" && app.user.role !== "faculty")) {
        alert("Insufficient Permission");
        return;
    }
    let formData = new FormData(document.querySelector(".addStudentForm"));
    let newStudent = new Student(formData.get("firstname"), formData.get("lastname"), formData.get("phonenumber"), formData.get("studentid"), formData.get("password"), formData.get("role"), formData.get("entryyear"), formData.get("gpa"));
    app.user.addStudent(newStudent);
})

/**
 * Add Faculty
 */
const addFaculty = document.querySelector(".addFaculty");
addFaculty.addEventListener("click", function (event) {
    event.preventDefault();
    if (!app.user || (app.user.role !== "admin" && app.user.role !== "faculty")) {
        alert("Insufficient Permission");
        return;
    }
    let formData = new FormData(document.querySelector(".addFacultyForm"));
    let newFaculty = new Faculty(formData.get("firstname"), formData.get("lastname"), formData.get("phonenumber"), formData.get("facultyid"), formData.get("password"), formData.get("role"), formData.get("department"));
    app.user.addFaculty(newFaculty);
})

/**
 * Add Admin
 */
const addAdmin = document.querySelector(".addAdmin");
addAdmin.addEventListener("click", function (event) {
    event.preventDefault();
    if (!app.user || app.user.role !== "admin") {
        alert("Insufficient Permission");
        return;
    }
    let formData = new FormData(document.querySelector(".addAdminForm"));
    let newAdmin = new Admin(formData.get("firstname"), formData.get("lastname"), formData.get("phonenumber"), formData.get("adminid"), formData.get("password"), formData.get("role"));
    app.user.addAdmin(newAdmin);
})