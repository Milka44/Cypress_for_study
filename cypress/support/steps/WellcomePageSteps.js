import wellcomePage from "../pages/WellcomePage";

const wellcomePageSteps = {
	clickEveryHeaderButton() {
		wellcomePage.getLogoBtn().click();
		wellcomePage.getHomeBtn().contains('Home').click();

		wellcomePage.getAboutBtn().contains('About').click();
		wellcomePage.getContactsBtn().contains('Contacts').click();
		wellcomePage.getGuestLoginBtn().contains('Guest log in').click();
		wellcomePage.getLogout().click();
		wellcomePage.getSignInBtn().contains('Sign In').click();
		wellcomePage.closeModal().click();
		wellcomePage.getFbBtn().click();
		wellcomePage.getTgBtn().click();
		wellcomePage.geticonYoutobeBtn().click();
		wellcomePage.geticonInstagramBtn().click();
		wellcomePage.getContactURLLink().should('have.css', 'Color','rgb(2, 117, 216)')
		wellcomePage.getContactURLLink().contains('ithillel.ua').click();
		wellcomePage.getContactsEmailLink().contains('support@ithillel.ua')
		//wellcomePage.getContactsEmailLink().click()
}}

export default wellcomePageSteps;
