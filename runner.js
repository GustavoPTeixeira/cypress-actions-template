const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImY5NzIxNmExLTc4MDQtNDI1Ny05MTMyLWZmMjU3ZDk0NGRlNC0xNzE1MjY0OTM4NzY0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMTM2N2U5NzctZjk4Mi00MWE1LWE1ZjUtZDk5YjhkY2NjNjMzIiwidHlwZSI6InQifQ.TxbWMIvgZ7RTUytq-lv5VKFGUHZB1ilfDG_MbAU0ycU'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
