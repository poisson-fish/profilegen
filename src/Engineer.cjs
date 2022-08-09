const Employee = require('./Employee.cjs')

class Engineer extends Employee {
  _github

  constructor (id, name, email, github) {
    super(id, name, email)
    this._github = github
    this._role = this.constructor.name
  }

  getGithub () {
    return this._github
  }

  renderToHtml () {
    return `
    <div class="card text-center" style="width: 18rem;">
        <div class="card-header">
        Employee
        </div>
        <div class="card-body">
            <h5 class="card-title">${this.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
            <p class="card-text">ID: ${this.getId()}</p>
            <a href="mailto:${this.getEmail()}" class="card-link">Email: ${this.getEmail()}</a>
            <a href="https://github.com/${this.getGithub()}" class="card-link">GitHub: ${this.getGithub()}</a>
        </div>
    </div>
    `
  }
}
module.exports = Engineer
