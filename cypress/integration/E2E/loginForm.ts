/// <reference types="Cypress" />

import { LoginForm, Navigation } from '../../pageObject/index';
import { CommonElemetns } from '../../pageObject/index';

/*
Downloading a filedescription of functionality:

# Downloading the file is possible after logging into the application. To log in, fill in the login form with the appropriate information, and then click the 'login' button or use the Enter key. In case of incorrect completion, an error message appears.

# After going to the protected area of the site, it is possible to download the file or log out using the appropriate links on the site.

# The file is saved to the default save folder (e.g. downloaded).

# Login details:

  * User: tester
  
  * Password: 123-xyz

*/

describe('Zadanie 6 Login Form', () => {
  
  let loginForm = new LoginForm();
  let ce = new CommonElemetns();

    beforeEach(() => {
        loginForm = Navigation.loginForm();
    })
  
  it('Should test of Zadanie 1', () => {
    ce.getOpenDetails().click();
    ce.getClose().click();


    loginForm.getLoginForm().within(($form) => {
      ce.getLogin().then((login) => {
        loginForm.getInputlogin().type(login.login);
        loginForm.getInputPassword().type(login.password);
        ce.getRoot().submit(login);  
      })  
    })
    // To log in, fill in the login form with the appropriate information, and then click the 'login' button

    

  })
      
});

