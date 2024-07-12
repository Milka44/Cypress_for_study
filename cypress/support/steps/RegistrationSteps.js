//заполнить поля валидными данными
import registrationModal from "../pages/RegistrationModal"
import { validUserData, wrongLengthUserDataMax, wrongLengthUserDataMin } from "../../fixtures/userData"
import { wrongUserData } from "../../fixtures/userData"
import { wrongLengthUserData } from "../../fixtures/userData"

const registrationSteps = {
    fillWithValidUserData () {
        registrationModal.getSignUpBtn().click()
        registrationModal.getSignUpName().type(validUserData.username)
        registrationModal.getSignUpLastName().type(validUserData.lastname)
        registrationModal.getSignUpEmail().type(validUserData.email)
        registrationModal.getSignUpPwd().type(validUserData.password)
            },

    verifyRegisterBtnIsDisabled () {
        registrationModal.getRegisterBtn().should('be.disabled')
    },

    enterRepeatPwd () {
        registrationModal.getSignUpRepeatPwd().type(validUserData.password)
        
    },

    verifyRegisterBtnIsEnabled () {

        registrationModal.getRegisterBtn().should('not.be.disabled')
    },

    verifyClickSignUp (){
        registrationModal.getRegisterBtn().click()
        cy.wait(1000)
        registrationModal.gerUrlAfterRegistration().should('eq', 'https://qauto.forstudy.space/panel/garage')

    },
    verifyExistsAlert (){
            registrationModal.getRegisterBtn().click()
            registrationModal.getExistsAlert().should('contain', 'User already exists')

    },
    verifyNameValidation (){
        registrationModal.getclearName()
        registrationModal.getNameFedback().should('contain', 'Name required')
        registrationModal.getSignUpName().should('have.css','border-color','rgb(220, 53, 69)')
        registrationModal.getSignUpName().type(wrongUserData.username)
        registrationModal.getNameFedback().should('contain', 'Name is invalid')
        registrationModal.getclearName()
        registrationModal.getSignUpName().type(wrongLengthUserDataMin.username)
        registrationModal.getNameFedback().should('contain', 'Name has to be from 2 to 20 characters long')
        registrationModal.getclearName()
        registrationModal.getSignUpName().type(wrongLengthUserDataMax.username)
        registrationModal.getNameFedback().should('contain', 'Name has to be from 2 to 20 characters long')

    },
    verifyLastNameValidation (){
        registrationModal.getclearLastName()
        registrationModal.getLastNameFedback().should('contain', 'Last name required')
        registrationModal.getSignUpLastName().should('have.css','border-color','rgb(220, 53, 69)')
        registrationModal.getSignUpLastName().type(wrongUserData.lastname)
        registrationModal.getLastNameFedback().should('contain', 'Last name is invalid')
        registrationModal.getclearLastName()
        registrationModal.getSignUpLastName().type(wrongLengthUserDataMin.lastname)
        registrationModal.getLastNameFedback().should('contain', 'Last name has to be from 2 to 20 characters long')
       
    },

verifyEmailValidation (){
    registrationModal.getclearEmail()
    registrationModal.getEmailFedback().should('contain','Email required')
    registrationModal.getSignUpEmail().should('have.css','border-color','rgb(220, 53, 69)')
    registrationModal.getSignUpEmail().type(wrongUserData.email)
    registrationModal.getEmailFedback().should('contain','Email is incorrect')

},
verifyPwdValidation () {
    registrationModal.getclearPwd()
    registrationModal.getSignUpRepeatPwd().click()
    registrationModal.getPwdFedback().should('contain','Password required')
    registrationModal.getSignUpPwd().should('have.css','border-color','rgb(220, 53, 69)')
    registrationModal.getSignUpPwd().type(wrongUserData.password)
    registrationModal.getPwdFedback().should('contain','Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
    registrationModal.getRegisterBtn().should('be.disabled')
},
verifyRptPwdValidation () {
    registrationModal.getcleaRptPwd()
    registrationModal.getSignUpPwd().click()
    registrationModal.getRptPwdFedback().should('contain','Re-enter password required')
    registrationModal.getSignUpPwd().type(validUserData.password)
    registrationModal.getSignUpRepeatPwd().type(wrongUserData.rptPwd)
}


}

export default registrationSteps