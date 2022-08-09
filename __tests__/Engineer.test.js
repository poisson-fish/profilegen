const Engineer = require('../src/Engineer.cjs');

// Employee tests
test('creating Engineer succeeds', () => {
  expect(new Engineer("1", "Danny", "danny@danny.com", "somegithub")).toBeDefined();
});
test('engineer has getName', () => {
    expect(new Engineer(1, "Danny", "danny@danny.com", "somegithub").getName()).toEqual("Danny")
});
test('engineer has getId', () => {
    expect(new Engineer(1, "Danny", "danny@danny.com", "somegithub").getId()).toEqual(1)
});
test('engineer has getEmail', () => {
    expect(new Engineer(1, "Danny", "danny@danny.com", "somegithub").getEmail()).toEqual("danny@danny.com")
});
test('engineer has getRole', () => {
    expect(new Engineer(1, "Danny", "danny@danny.com", "somegithub").getRole()).toEqual("Engineer")
});

//Engineer tests
test('Engineer has getGithub', () => {
    expect(new Engineer(1, "Danny", "danny@danny.com", "somegithub").getGithub()).toEqual("somegithub")
});

test('Engineer has renderToHtml', () => {
    expect(new Engineer(1, "Danny", "danny@danny.com", "somegithub").renderToHtml()).toBeDefined()
});