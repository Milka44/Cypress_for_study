class Wellcomepage {
	headerLogo = ".header_logo";
	aboutBtn = '[appscrollto="aboutSection"]';
	contactsBtn = '[appscrollto="contactsSection"]';
	guestLoginBtn = ".header_right > .header-link";
	signInBtn = ".header_right > .btn";
	iconFbBtn = ".icon-facebook";
	iconTgBtn = ".socials_link .icon-telegram";
	iconYoutobeBtn = ".socials_link > .icon-youtube";
	iconInstagramBtn = ".socials_link >.icon-instagram";
	iconInstagramBtn = ".socials_link >.icon-instagram";
	contactsURL = ".display-4";
	contactsEmailLink = ".h4";

	getLogoBtn() {
		return cy.get(this.headerLogo);
	}

	getAboutBtn() {
		return cy.get(this.aboutBtn);
	}

	getContactsBtn() {
		return cy.get(this.contactsBtn);
	}

	getGuestLoginBtn() {
		return cy.get(this.guestLoginBtn);
	}

	getLogout() {
		return cy.get(".sidebar > .btn-link");
	}
	getSignInBtn() {
		return cy.get(this.signInBtn);
	}
	closeModal() {
		return cy.get(".close > span");
	}
	getFbBtn() {
		return cy.get(this.iconFbBtn);
	}
	getTgBtn() {
		return cy.get(this.iconTgBtn);
	}
	geticonYoutobeBtn() {
		return cy.get(this.iconYoutobeBtn);
	}
	geticonInstagramBtn() {
		return cy.get(this.iconInstagramBtn);
	}

	getContactURLLink() {
		return cy.get(this.contactsURL);
	}
	getContactsEmailLink() {
		return cy.get(this.contactsEmailLink);
	}
}

const wellcomePage = new Wellcomepage();
export default wellcomePage;
