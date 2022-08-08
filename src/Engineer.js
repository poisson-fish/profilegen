const Employee = require('./Employee.js')

class Engineer extends Employee {

    _github

    constructor(id, name, email, github) {
        super(id,name,email)
        this._github = github
        this._role = this.constructor.name
    }
    getGithub(){
        return this._github
    }


}
module.exports = Engineer