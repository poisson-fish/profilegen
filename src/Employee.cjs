class Employee {
  _name
  _id
  _email
  _role

  constructor (id, name, email) {
    this._id = id
    this._name = name
    this._email = email
    this._role = this.constructor.name
  }

  getName () {
    return this._name
  }

  getId () {
    return this._id
  }

  getEmail () {
    return this._email
  }

  getRole () {
    return this._role
  }

  renderToHtml () {
    throw new Error('Abstract class cannot be rendered!')
  }
}
module.exports = Employee
