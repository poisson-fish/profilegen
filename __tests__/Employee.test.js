const Employee = require('../src/Employee.cjs')

// Employee tests
test('creating Employee succeeds', () => {
  expect(new Employee('1', 'Danny', 'danny@danny.com')).toBeDefined()
})
test('Employee has getName', () => {
  expect(new Employee(1, 'Danny', 'danny@danny.com').getName()).toEqual('Danny')
})
test('Employee has getId', () => {
  expect(new Employee(1, 'Danny', 'danny@danny.com').getId()).toEqual(1)
})
test('Employee has getEmail', () => {
  expect(new Employee(1, 'Danny', 'danny@danny.com').getEmail()).toEqual('danny@danny.com')
})
test('Employee has getRole', () => {
  expect(new Employee(1, 'Danny', 'danny@danny.com').getRole()).toEqual('Employee')
})
test('Employee abstract renderToHtml throws', () => {
  expect(() => new Employee(1, 'Danny', 'danny@danny.com').renderToHtml()).toThrow()
})
