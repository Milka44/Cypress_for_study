//собрать селекторы и и получить поля для них

class RegistrationModal {
	signUpBtn = ".hero-descriptor_btn"
    signUpName = "#signupName"
    signUpLastName ="#signupLastName"
    signUpEmail ="#signupEmail"
    signUpPwd ="#signupPassword"
    signUpRepeatPwd ="#signupRepeatPassword"
    registerBtn = ".modal-footer > .btn"
    userExistsAlert = '.alert'
    invalidNameMsg = '.invalid-feedback > p'
    invalidLastNameMsg =':nth-child(2) > .invalid-feedback > p'
    invalidEmailMsg = ':nth-child(3) > .invalid-feedback > p'
    invalidPwdMsg =':nth-child(4) > .invalid-feedback > p'
    invalidRptPwd =':nth-child(5) > .invalid-feedback > p'


	getSignUpBtn() {
		return cy.get(this.signUpBtn)
	
}
    getSignUpName() {
        return cy.get(this.signUpName)
    }
    getSignUpLastName() {
        return cy.get(this.signUpLastName)
    }
    getSignUpEmail() {
        return cy.get(this.signUpEmail)
    }
    getSignUpPwd() {
        return cy.get(this.signUpPwd)
    }
    getSignUpRepeatPwd() {
        return cy.get(this.signUpRepeatPwd)
    }
    getRegisterBtn() {
        return cy.get(this.registerBtn)
        
    }
    gerUrlAfterRegistration(){
        return cy.url()
    }
      getExistsAlert() {
        return cy.get(this.userExistsAlert)
    }
    getclearName(){
        return 	cy.get(this.signUpName).clear()
    }
    getNameFedback(){
        return cy.get(this.invalidNameMsg)
    }
    getclearLastName(){
        return 	cy.get(this.signUpLastName).clear()
    }
    getLastNameFedback(){
        return cy.get(this.invalidLastNameMsg)
    }
    getclearEmail(){
        return 	cy.get(this.signUpEmail).clear()
    }
    getEmailFedback(){
        return cy.get(this.invalidEmailMsg)
    }
    getclearPwd(){
        return 	cy.get(this.signUpPwd).clear()
    }
    getPwdFedback(){
        return cy.get(this.invalidPwdMsg)
    }
    getcleaRptPwd(){
        return 	cy.get(this.signUpRepeatPwd).clear()
    }
    getRptPwdFedback(){
        return cy.get(this.invalidRptPwd)
    }
}


const registrationModal = new RegistrationModal();
export default registrationModal;
