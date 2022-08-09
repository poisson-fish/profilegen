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
        <div class="card-header">
        Manager
        </div>
        <div class="card-body">
            <h5 class="card-title">${this.getName()}</h5>
            <h6 class="card-subtitle mb-1 text-muted">${this.getRole()}</h6>
            <p class="card-text">ID: ${this.getId()}</p>
            <p class="card-text">Office Number: ${this.getOfficeNumber()}</p>
            <a href="mailto:${this.getEmail()}" class="card-link">Email: ${this.getEmail()}</a>
        </div>
    </div>
    `
  }
}
module.exports = Manager
