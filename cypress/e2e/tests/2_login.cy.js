import { loginPage } from "../pages/loginPages";
const loginPg = new loginPage()
import user from '../../fixtures/credentials.json'

describe('Login with valid data', () => {
    
    beforeEach(() => {
        loginPg.visitLogin()
        
    })

    it('As a user, i want to go to login page', () => {
    
        loginPg.assertUrlLogin()
    })
    
    it('As a user with the admin role, i want to login with valid credentials', () => {
    
        loginPg.login(user.email[0],user.password[0])
        cy.wait(2000)
        loginPg.assertLogin()
    
        //cy.log(user.nama_toko[0])
        
    });
    
    it('As a user with the kasir role, i want to login with valid credentials', () => {
    
        loginPg.login('sampurasun2kasir@example.com',user.password[0])
        cy.wait(2000)
        loginPg.assertUrlSales()
    
        //cy.log(user.nama_toko[0])
        
    });

    it('As a user, i want to logout the app', () => {
    
        loginPg.login(user.email[0],user.password[0])
        loginPg.logout()
        loginPg.assertLogout()
    });
});



describe('Login with invalid data', () => {
    
    beforeEach(() => {
        loginPg.visitLogin()
        
    })

    it('As a user, i want to login with invalid credentials', () => {
   
        loginPg.login(user.email[1],user.password[0])
        cy.wait(2000)
        loginPg.assertAlertMsg(loginPg.InvCredMsg)
    });
    
    it('As a user, i want to login with invalid email format', () =>  {
        
        loginPg.login('sampurasun@',user.password[0])
        loginPg.assertAlertMsg(loginPg.InvEmailMsg)
       
    });
    
    it('As a user, i want to login with empty email', () =>  {
       
        loginPg.login('',user.password[0],false,true)
        loginPg.assertAlertMsg(loginPg.emptyEmailMsg)
       
    });
    
    it('As a user, i want to login with empty password', () =>  {
        
        loginPg.login(user.email[0],'',true,false)
        loginPg.assertAlertMsg(loginPg.emptyPassMsg)
       
    });
    
    it('As a user, i want to login with empty credentials',() => {
        
        loginPg.clickLoginBtn()
        loginPg.assertAlertMsg(loginPg.LgEmptyAllMsg)
       
    });
});



