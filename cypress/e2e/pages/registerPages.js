/// <reference types="cypress" />

import { loginPage } from "./loginPages";

export class registerPage extends loginPage{
    
    constructor(){
        super() // All in __GlobalVariable Class
    }

    // ***** Actions *****
    visitRegister(){
        this.visitLogin()
        cy.contains(this.daftarLink).click() 
    }

    inputNamaToko(nama_toko){ cy.get(this.namatoko).should("be.visible").type(nama_toko,{force : true}) }
    clickDaftarButton(){ cy.contains(this.daftarBtn).should("be.visible").click() }
    clickPassVisible () { cy.get(this.passVisible).should("be.visible").click() }

    register(nama_toko,email,password,i_namaToko = true,i_email = true,i_pass = true, btnClick = true){
        
        if(btnClick == false){
            this.inputNamaToko(nama_toko)
            this.inputEmail(email)
            this.inputPassword(password)
            
        }
        else if(i_namaToko == false){
            this.inputEmail(email)
            this.inputPassword(password)
            this.clickDaftarButton()
        }
        else if (i_email == false){
            this.inputNamaToko(nama_toko)
            this.inputPassword(password)
            this.clickDaftarButton()
        }else if (i_pass == false){
            this.inputNamaToko(nama_toko)
            this.inputEmail(email)
            this.clickDaftarButton()
        }else{
            this.inputNamaToko(nama_toko)
            this.inputEmail(email)
            this.inputPassword(password)
            //this.assertLengthPassword()
            this.clickDaftarButton()
        }
    }
    // ***** End Actions *****

    // ***** Assertions *****
    assertUrlRegister(){
        cy.url().then((url) => {
            expect(url).to.include(this.urlRegisterPattern)   
        })
    }

    assertRegister(){

        this.assertAlertMsg(this.BerhasilMsg)
        cy.url().then((url) => {
            expect(url).to.include(this.urlLoginPattern)   
        })
    }

    assertLengthPassword(){
        const reqLength = 12
        cy.get(this.password).invoke('val').then((data)=>{

            // cy.log(data.length)
        
            if (data.length < reqLength){
                this.assertAlertMsg(this.passMinMsg)
                //expect(data.length).to.be.at.least(reqLength)
            }
        })
    }

    assertPassVisible(){

        cy.get(this.password).then((attr)=>{
            cy.log(attr.attr('type'))
            expect(attr.attr('type')).to.contains('text')
        })
    }

    assertPassInvisible(){

        cy.get(this.password).then((attr)=>{
            cy.log(attr.attr('type'))
            expect(attr.attr('type')).to.contains('password')
        })
    }
    // ***** End Assertions *****

    
}