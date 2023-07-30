import { registerPage } from "../pages/registerPages";
const registerPg = new registerPage();
import user from '../../fixtures/credentials.json'

describe('Register With Valid Data', () => {

    beforeEach(() => {
        registerPg.visitRegister()
    })

    it("As a user, i want to go to register page", () => {
  
        registerPg.assertUrlRegister()
    
    });
    
    it('As a user, i want to register to the app', ()=>  {
    
        registerPg.register(user.nama_toko[0],user.email[0],user.password[0])
        registerPg.assertLengthPassword()
        registerPg.assertRegister()
    })
    
    it('As a user, i want to check the password visibililty',  () => {
        
        registerPg.register(user.nama_toko[0],user.email[0],user.password[0],'','','',false)
        registerPg.clickPassVisible()
        registerPg.assertPassVisible()
    });
    
    it('As a user, i want to disable the password visibililty', () => {
        
        registerPg.register(user.nama_toko[0],user.email[0],user.password[0],'','','',false)
        registerPg.clickPassVisible()
        registerPg.clickPassVisible()
        registerPg.assertPassInvisible()
    });
});

describe('Register With Invalid Data', () => {

    beforeEach(() => {
        registerPg.visitRegister()
    })

    it('As a user, i want to register with duplicate data', () => {
        user.regDuplicate.forEach((a)=>{
        registerPg.register(a.nama_toko,a.email,a.password)
        })
        registerPg.assertAlertMsg(registerPg.RegDuplicateMsg)
    });
    
    it('As a user, i want to register with numeric format at store name',() =>  {
        
        registerPg.register(123456,'test@example.com','test12345678')
        registerPg.assertLengthPassword()
        registerPg.assertAlertMsg(registerPg.NmTokoFormatMsg)
    });
    
    it('As a user, i want to register with invalid email format', () => {
       
        registerPg.register('Sampurasun 2','test@','password1231415')
        registerPg.assertLengthPassword()
        registerPg.assertAlertMsg(registerPg.InvEmailMsg)
        
    })
    
    it('As a user, I want to register with a password that is less than 12 characters.', () =>{
        
        registerPg.register('Sampurasun 2','test@example.com','password')
        registerPg.assertLengthPassword()
        
    })
    
    it('As a user, i want to register with empty store name', () => {
        
        registerPg.register('','test@example.com','password123456',false,true,true)
        registerPg.assertAlertMsg(registerPg.NmTokoEmptyMsg)
    });
    
    it('As a user, i want to register with empty email', () => {
        
        registerPg.register(user.nama_toko[1],'',user.email[1],true,false,true)
        registerPg.assertAlertMsg(registerPg.emptyEmailMsg)
    });
    
    it('As a user, i want to register with empty password', () =>  {
        
        registerPg.register(user.nama_toko[1],user.email[1],'',true,true,false)
        registerPg.assertAlertMsg(registerPg.emptyPassMsg)
    });
    
    it('As a user, i want to register with empty form', () => {
        
        registerPg.clickDaftarButton()
        registerPg.assertAlertMsg(registerPg.RgemptyAllMsg)
    });
});


