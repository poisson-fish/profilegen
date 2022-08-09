const Employee = require('./Employee.cjs')

class Intern extends Employee {
  _school

  constructor (id, name, email, school) {
    super(id, name, email)
    this._school = school
    this._role = this.constructor.name
  }

  getSchool () {
    return this._school
  }

  renderToHtml () {
    return `
    <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${this.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
            <p class="card-text">User has ID#${this.getId()}</p>
            <a href="#" class="btn btn-primary">${this.getSchool()}</a>
        </div>
    </div>
    `
  }
}
module.exports = Intern
