const Employee = require('./Employee.cjs')

class Manager extends Employee {
  _officeNumber

  constructor (id, name, email, officeNumber) {
    super(id, name, email)
    this._officeNumber = officeNumber
    this._role = this.constructor.name
  }

  getOfficeNumber () {
    return this._officeNumber
  }

  renderToHtml () {
    return `
    <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${this.getName()}</h5>
            <h6 class="card-subtitle mb-1 fw-bold text-muted">${this.getRole()}</h6>
            <p class="card-text">User has ID#${this.getId()}</p>
            <a href="#" class="btn btn-primary">${this.getOfficeNumber()}</a>
        </div>
    </div>
    `
  }
}
module.exports = Manager
