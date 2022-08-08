const Employee = require('./Employee.js')

class Manager extends Employee {

    _officeNumber

    constructor(id, name, email, officeNumber) {
        super(id,name,email)
        this._officeNumber = officeNumber
        this._role = this.constructor.name
    }
    getOfficeNumber(){
        return this._officeNumber
    }


}
module.exports = Manager