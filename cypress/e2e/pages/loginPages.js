/// <reference types="cypress" />

import { __GlobalVariable } from "./globalvariable"


export class loginPage extends __GlobalVariable{
    
    constructor(){
        super() // All in __GlobalVariable Class
    }
    
    // ***** Actions *****
    visitLogin(){ cy.visit(this.urlLogin) }
    inputEmail(email){ cy.get(this.email).type(email) }   
    inputPassword(password){ cy.get(this.password).type(password,{ force :true }) }
    clickLoginBtn(){ cy.contains(this.loginbtn).click() }

    login(email,pass,i_email = true,i_pass = true){
        if (i_email == false){

            this.inputPassword(pass)
            this.clickLoginBtn()
        }
        else if (i_pass == false){
            this.inputEmail(email)
            this.clickLoginBtn()
        }
        else{
            this.inputEmail(email)
            this.inputPassword(pass)
            this.clickLoginBtn()
        }
    }

    logout(){
        cy.get(this.profileBtn).click()
        cy.wait(1000);
        cy.get('div[role="menu"] > button:nth-of-type(2)').click({force : true})
        //click({force : true})
        
        
    }
    // ***** End Actions *****

    // ***** Assertions *****
    
    assertLogin(){
        cy.url().then((url)=>{
            expect(url).to.include(this.urlDashboardPattern)
        })
    }
    
    assertUrlLogin(){
        cy.url().then((url)=>{
            expect(url).to.include(this.urlLoginPattern)
        })
    }

    assertUrlSales(){
        cy.url().then((url)=>{
            expect(url).to.include(this.urlSalesCreatePattern)
        })
    }

    assertAlertMsg(msg){
        //cy.contains(msg).should('be.visible')
        cy.get('.chakra-alert').then((txt)=>{
          //cy.log(txt.text());
          expect(txt.text()).to.include(msg)
        })
    }

    assertLogout(){
        cy.url().then((url)=>{
            expect(url).to.contains(this.urlLoginPattern)
            //cy.task('log', url)
        })
    }
    // ***** End Assertions *****

    
}
