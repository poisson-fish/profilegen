import fs from 'fs'
import inquirer from 'inquirer'
import Manager from './Manager.cjs'
import Engineer from './Engineer.cjs'
import Intern from './Intern.cjs'

const team_manager_questions = [
  {
    type: 'input',
    name: 'manager_name',
    message: 'Enter a team manager name'
  },
  {
    type: 'input',
    name: 'manager_id',
    message: 'Enter a team manager ID'
  },
  {
    type: 'input',
    name: 'manager_email',
    message: 'Enter a team manager email'
  },
  {
    type: 'input',
    name: 'manager_officeNumber',
    message: 'Enter a team manager office number'
  }
]
const engineer_questions = [
  {
    type: 'input',
    name: 'engineer_name',
    message: 'Enter an engineer name'
  },
  {
    type: 'input',
    name: 'engineer_id',
    message: 'Enter an engineer ID'
  },
  {
    type: 'input',
    name: 'engineer_email',
    message: 'Enter an engineer email'
  },
  {
    type: 'input',
    name: 'engineer_github',
    message: 'Enter a GitHub username for engineer'
  }
]
const intern_questions = [
  {
    type: 'input',
    name: 'intern_name',
    message: 'Enter an intern name'
  },
  {
    type: 'input',
    name: 'intern_id',
    message: 'Enter an intern ID'
  },
  {
    type: 'input',
    name: 'intern_email',
    message: 'Enter an intern email'
  },
  {
    type: 'input',
    name: 'intern_school',
    message: 'Enter a school for intern'
  }
]

const employee_type_question = [
  {
    type: 'list',
    name: 'employee_type',
    message: 'Choose what type of employee to add',
    choices: ['Engineer', 'Intern', 'Done'],
    filter (val) {
      return val.toUpperCase()
    }
  }
]




const fullTeam = []

async function promptTeamMembers(){
  var members = []
  inquirer.prompt(employee_type_question).then((employee_type_answer) => {
    var askAgain = true
    switch(employee_type_answer.employee_type){
      case 'Engineer':
        inquirer.prompt(engineer_questions).then((engineer_answers) => {
          members.push(new Engineer(engineer_answers.engineer_id,engineer_answers.engineer_name,engineer_answers.engineer_email,engineer_answers.engineer_github))
        })
      break;

      case 'Intern':
        inquirer.prompt(intern_questions).then((intern_answers) => {
          members.push(new Intern(intern_answers.intern_id,intern_answers.intern_name,intern_answers.intern_email,intern_answers.intern_school))
        })
      break;

      case 'Done':
        if(employee_type_answer.employee_type === 'Done') askAgain = false
      break;
    }
    if(askAgain){
      members.push(promptTeamMembers())
    }
  })
  return members
}
inquirer.prompt(team_manager_questions).then((team_manager_answer) => {
  fullTeam.push(new Manager(team_manager_answer.manager_id,team_manager_answer.manager_name,team_manager_answer.manager_email,team_manager_answer.manager_officeNumber))
}).then(() => {
  fullTeam.push(promptTeamMembers())
})

