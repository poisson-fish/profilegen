const Employee = require('./Employee.js')

class Intern extends Employee {

    _school

    constructor(id, name, email, school) {
        super(id,name,email)
        this._school = school
        this._role = this.constructor.name
    }
    getSchool(){
        return this._school
    }


}
module.exports = Intern