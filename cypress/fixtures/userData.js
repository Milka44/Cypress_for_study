export const validUserData = {
    username: 'Neo',
    lastname: 'Neon',
    email: `neofortest${Cypress._.random(0, 1e6)}@gm.com`,
    password: 'Neofortest222',
  };

export 
const wrongUserData ={
    username: '12',
    lastname: '12',
    email: 'neofortest22',
    password: 'neofortest',
    rptPwd: 'Neofortest221'
}

export 
const wrongLengthUserDataMin ={
    username: 'N',
    lastname: 'L',
   }

export 
const wrongLengthUserDataMax ={
    username: 'Nnnnnnnnnnnnnnnnnnnnmax',
    lastname: 'Lnnnnnnnnnnnnnnnnnnnmax',
}