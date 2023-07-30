import { Pengguna } from "../pages/usersPages";
const penggunaPg = new Pengguna()
import userKasir from '../../fixtures/users.json'

describe('Create, search, change, and delete user with valid data', () => {

  beforeEach(()=>{
    penggunaPg.visitPenggunaPage()
  })

  it('As a user with the admin role, i want to go to users page',()=>{
    
    penggunaPg.assertTableHeadPengguna()
  }) 

  it('As a user with the admin role, i want to create multiple users', () =>  {

    userKasir.addUsers.forEach((x)=>{
      penggunaPg.createPengguna(x.nama,x.email,x.password)
      penggunaPg.assertAlertMsg('item ditambahkan')
      cy.wait(1000)
    })
  });

  it('As a user with the admin role, I want to search user by its name', () =>  {

    penggunaPg.inputCariPengguna(userKasir.addUsers[1].nama)
    cy.wait(2000)
    penggunaPg.assertTableRowPengguna(userKasir.addUsers[1].nama)
  });

  it('As a user with the admin role, i want to delete a user by its name', () =>{
    penggunaPg.inputCariPengguna('Asep')
    cy.wait(2000)
    penggunaPg.deletePengguna('Asep',false)
    penggunaPg.assertDelPengguna('Asep')
  })

  it('As a user with the admin role, i want to change a user name', ()=>{
    penggunaPg.inputCariPengguna('Agan')
    cy.wait(2000)
    penggunaPg.changePengguna('Ragan','','',true)
  })

  it('As a user with the admin role, i want to change a user email', ()=>{
    penggunaPg.inputCariPengguna('Ragan')
    cy.wait(2000)
    penggunaPg.changePengguna('','ragan@cnt.com','',false,true)
  })

  it('As a user with the admin role, i want to change a user password', ()=>{
    penggunaPg.inputCariPengguna('Ragan')
    cy.wait(2000)
    penggunaPg.changePengguna('','','changePassword123',false,false,true)
  })

});

describe('Login using the modified user kasir role.', () => {
  
  it('As a user with the kasir role,i want to log in to the app after changing my email and password', ()=>{
    penggunaPg.visitLogin()
    penggunaPg.login('ragan@cnt.com','changePassword123')
    penggunaPg.assertUrlKasir()
  })

});

describe('Create User With invalid data', () => {
    
  beforeEach(()=>{
    penggunaPg.visitPenggunaPage()
  })
  
  it('As a user with the admin role, i want to create duplicate users', () => {

    userKasir.duplicateUsers.forEach((x)=>{
      penggunaPg.createPengguna(x.nama,x.email,x.password)
      cy.wait(1000)
    })
    penggunaPg.assertAlertMsg('Item already exists')
  })

  it('As a user with the admin role, i want to create a user with empty name field', () =>{
    penggunaPg.createPengguna('',userKasir.addUsers[0].email,userKasir.addUsers[0].password,false)
    penggunaPg.assertAlertMsg(penggunaPg.emptyNmPenggunaMsg)
    
  })

  it('As a user with the admin role, i want to create a new user with empty email', () =>{
    penggunaPg.createPengguna(userKasir.addUsers[0].nama,'',userKasir.addUsers[0].password,true,false)
    penggunaPg.assertAlertMsg(penggunaPg.emptyEmailPenggunaMsg)
    
    
  })

  it('As a user with the admin role, i want to create a user with empty password', () =>{
    penggunaPg.createPengguna(userKasir.addUsers[0].nama,userKasir.addUsers[0].email,'',true,true,false)
    penggunaPg.assertAlertMsg(penggunaPg.emptyPassPenggunaMsg)
    
  })

  it('As a user with the admin role, i want to create a user with invalid email format', () =>{
    penggunaPg.createPengguna(userKasir.addUsers[0].nama,'agan@',userKasir.addUsers[0].password)
    penggunaPg.assertAlertMsg(penggunaPg.InvEmailMsg)
    
  })

  it('As a user with the admin role, i want to create a user with empty form', () =>{
    penggunaPg.clickTambahPengguna()
    penggunaPg.clickSimpanBtn()
    penggunaPg.assertAlertMsg(penggunaPg.emptyAllsPenggunaMsg)
    
  })

  //  it('delete all users', () =>{
  //   penggunaPg.deletePengguna('',true)
  //   penggunaPg.assertDelAllPengguna()
  // })

});




