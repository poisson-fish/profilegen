const Intern = require('../src/Intern.cjs');

// Employee tests
test('creating Intern succeeds', () => {
  expect(new Intern("1", "Danny", "danny@danny.com", "MIT")).toBeDefined();
});
test('Intern has getName', () => {
    expect(new Intern(1, "Danny", "danny@danny.com", "MIT").getName()).toEqual("Danny")
});
test('Intern has getId', () => {
    expect(new Intern(1, "Danny", "danny@danny.com", "MIT").getId()).toEqual(1)
});
test('Intern has getEmail', () => {
    expect(new Intern(1, "Danny", "danny@danny.com", "MIT").getEmail()).toEqual("danny@danny.com")
});
test('Intern has getRole', () => {
    expect(new Intern(1, "Danny", "danny@danny.com", "MIT").getRole()).toEqual("Intern")
});

//Intern tests
test('Intern has getSchool', () => {
    expect(new Intern(1, "Danny", "danny@danny.com", "MIT").getSchool()).toEqual("MIT")
});