import wellcomePage from "../pages/WellcomePage";

const wellcomePageSteps = {
	clickEveryHeaderButton() {
		wellcomePage.getLogoBtn().click();
		wellcomePage.getAboutBtn().click();
		wellcomePage.getContactsBtn().click();
		wellcomePage.getGuestLoginBtn().click();
		wellcomePage.getLogout().click();
		wellcomePage.getSignInBtn().click();
		wellcomePage.closeModal().click();
		wellcomePage.getFbBtn().click();
		wellcomePage.getTgBtn().click();
		wellcomePage.geticonYoutobeBtn().click();
		wellcomePage.geticonInstagramBtn().click();
		wellcomePage.getContactURLLink().click();
		wellcomePage.getContactsEmailLink().contains('support@ithillel.ua')
		wellcomePage.getContactsEmailLink().click()
}}

export default wellcomePageSteps;
