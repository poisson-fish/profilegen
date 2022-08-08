const Manager = require('../src/Manager.cjs');

// Employee tests
test('creating Manager succeeds', () => {
  expect(new Manager("1", "Danny", "danny@danny.com", 1)).toBeDefined();
});
test('Manager has getName', () => {
    expect(new Manager(1, "Danny", "danny@danny.com", 1).getName()).toEqual("Danny")
});
test('Manager has getId', () => {
    expect(new Manager(1, "Danny", "danny@danny.com", 1).getId()).toEqual(1)
});
test('Manager has getEmail', () => {
    expect(new Manager(1, "Danny", "danny@danny.com", 1).getEmail()).toEqual("danny@danny.com")
});
test('Manager has getRole', () => {
    expect(new Manager(1, "Danny", "danny@danny.com", 1).getRole()).toEqual("Manager")
});

//Manager tests
test('Manager has getOfficeNumber', () => {
    expect(new Manager(1, "Danny", "danny@danny.com", 1).getOfficeNumber()).toEqual(1)
});