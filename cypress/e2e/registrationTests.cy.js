//precondition - зайти на главную найти и нажать кнопку 'Sign up' затем описать тесті для модалки

import registrationSteps from "../support/steps/RegistrationSteps";
import { validUserData } from "../fixtures/userData"
import './commands'


describe("Sign up into Qaauto", () => {
	beforeEach('passes', () => {
		cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/")
		registrationSteps.fillWithValidUserData();
			
		})
		it("Verify register button is disabled ", () => {
			registrationSteps.verifyRegisterBtnIsDisabled();
		
		});

		it("Verify registration is successful", () => {
			registrationSteps.enterRepeatPwd();
			registrationSteps.verifyRegisterBtnIsEnabled();
			registrationSteps.verifyClickSignUp()
			
		});

		it('Verify second try alert "User already exists" ', () => {
			registrationSteps.enterRepeatPwd();
			registrationSteps.verifyExistsAlert()
		});
		
		it('Verify register name  validation', () => {
			
	  		registrationSteps.verifyNameValidation()
			
		  });
		  it('Verify register last name validation', () => {
			
			registrationSteps.verifyLastNameValidation()
		  });

		  it('Verify register email validation', () => {
			
			registrationSteps.verifyEmailValidation()
		  })
		  it('Verify register password validation', () => {
			
			registrationSteps.verifyPwdValidation()
		  })
		  it('Verify register rpt-password validation', () => {
			
			registrationSteps.verifyRptPwdValidation()
		  })
	})	
	
	it('Login', ()=> {
		cy.login(validUserData.email, validUserData.password);
	})
	
	

		
	
    

    
    