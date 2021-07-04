Feature('Students');

Scenario('Add student with success', ({I, login_page, home_page }) => {
 
    const code = require('../utils/code')
    const name = require('../utils/name')

    const myCode = code.getCode()
    const myName = name.getName()

    login_page.doLogin('teste@teste.com', '123456')
    home_page.registerStudent(myCode, myName)
    home_page.searchStudent(myName, myCode)
});
