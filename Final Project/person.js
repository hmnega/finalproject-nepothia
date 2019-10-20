/* Person Class */

"use strict";
/**
 * A Person Class
 * Provides the common properties of student, admin and faculty
 */
class Person {
    /**
     * 
     * @param {string} fname The first name of the person
     * @param {string} lname The last name of the person
     * @param {number} phone The phone number of the person
     * @param {number} userid The user ID of the person
     * @param {string/number} password The password of the person to login
     * @param {string} role The role of the person
     */
    constructor(fname, lname, phone, userid, password, role){
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.userid = userid;
        this.password = password;
        this.role = role;
    }
    /**
     * Gets the first name of the person
     * @returns{string} the first name
     */
    getFname(){
        return this.fname;
    }

    /**
     * Gets the last name of the person
     * @returns{string} the last name
     */
    getLname(){
        return this.lname;
    }
    /**
     * Gets the phone number of the person
     * @returns {number} the phone number
     */
    getPhone(){
        return this.phone;
    }
    /**
     * Gets the user id of the person
     * @returns {number} the User ID
     */
    getUserid(){
        return this.userid;
    }
    /**
     * Get the password of the person
     * @returns {string/number} the password to login
     */
    getPassword(){
        return this.password;
    }
    /**
     * Get the role of the person
     * @returns{string} the role of the person
     */
    getRole(){
        return this.role;
    }
    /**
     * Update first name
     * @param {string} fname First Name
     * @return {undefined}
     */
    updateFirstName(fname){ 
        this.fname = fname;
    }

    /**
     * Update last name
     * @param {string} lname Last Name
     * @return {undefined}
     */
    updateLastName(lname){
        this.lname = lname;
    }

    /**
     * Update phone number
     * @param {number} phone phone number
     * @return {undefined}
     */
    updatePhone(phone){
        this.phone = phone;
    }

    /**
     * Update password
     * @param {string} password Password
     * @return {undefined}
     */
    updatePassword(password){
        this.password = password;
    }
}


