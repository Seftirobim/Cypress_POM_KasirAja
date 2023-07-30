import { dashboardPage } from "./dashboardPages";

export class Pengguna extends dashboardPage {
  constructor() {
    super() // All in __GlobalVariable Class
  }

  // ***** Actions *****
  visitPenggunaPage() {
    this.visitDashboard();
    cy.get(this.usersMenu).click();
  }

  inputNamaPengguna(any) {
    cy.get(this.namaPengguna).type(any);
  }

  inputEmailPengguna(any) {
    cy.get(this.emailPengguna).type(any);
  }

  inputPassPengguna(any) {
    cy.get(this.passPengguna).type(any);
  }

  clickSimpanBtn() {
    cy.wait(1000)
    cy.contains(this.btnSimpan).click();
  }

  clickTambahPengguna(){
    cy.get(this.tambahPgnBtn).click();
  }

  inputCariPengguna(any){
    cy.get(this.cariInput).type(any)
  }

  clickTableButton(){
    cy.get(this.tableBtn).first().click()
  }

  clickUbahBtn(){
    cy.contains(this.MenuUbah).click()
  }

  clickHapusBtn(){
    cy.contains(this.MenuHapus).first().click()
  }

  clickModalHapusBtn(){
    cy.get(this.modalDelBtn).click()
  }

  createPengguna(nama, email, pass,i_nama = true, i_email = true, i_pass  = true, i_simpan = true) {
    this.clickTambahPengguna()
    
    if(i_simpan == false){
      this.assertUrlCreatePengguna();
      this.inputNamaPengguna(nama);
      this.inputEmailPengguna(email);
      this.inputPassPengguna(pass);
    }else if (i_nama == false){
      this.assertUrlCreatePengguna();
      this.inputEmailPengguna(email);
      this.inputPassPengguna(pass);
      this.clickSimpanBtn();
    }else if (i_email == false){
      this.assertUrlCreatePengguna();
      this.inputNamaPengguna(nama);
      this.inputPassPengguna(pass);
      this.clickSimpanBtn();
    }else if (i_pass == false){
      this.assertUrlCreatePengguna();
      this.inputNamaPengguna(nama);
      this.inputEmailPengguna(email);
      this.clickSimpanBtn();
    }else{
      this.assertUrlCreatePengguna();
      this.inputNamaPengguna(nama);
      this.inputEmailPengguna(email);
      this.inputPassPengguna(pass);
      this.clickSimpanBtn();
    }
  }

  changePengguna(nama,email,pass,i_nama = false, i_email = false, i_pass  = false){
    this.clickTableButton()
    this.clickUbahBtn()
    this.assertUrlEdit()
    if(i_nama == true){

      cy.get(this.namaPengguna).clear()
      this.inputNamaPengguna(nama)
      this.clickSimpanBtn()
      this.assertAlertMsg('item diubah')
      cy.wait(2000)
      this.assertTableRowPengguna(nama)
    }
    else if (i_email == true){

      cy.get(this.emailPengguna).clear()
      this.inputEmailPengguna(email)
      this.clickSimpanBtn()
      this.assertAlertMsg('item diubah')
      cy.wait(2000)
      this.assertTableRowPengguna(email)
    }
    else if (i_pass == true){

      cy.get(this.passPengguna).clear()
      this.inputPassPengguna(pass)
      this.clickSimpanBtn()
      this.assertAlertMsg('item diubah')
    }
    
  }

  deletePengguna(name,DelAll=true){
    if(DelAll == false){

      cy.contains('[role="row"]',name)
      .within(()=>{
        this.clickTableButton()
        this.clickHapusBtn()
        cy.wait(1000) 
      })
      this.clickModalHapusBtn()
      cy.wait(1000)
    }else{
      cy.get(this.tableBtn).each(()=>{
        this.clickTableButton()
        this.clickHapusBtn()
        cy.wait(1000)
        this.clickModalHapusBtn()
        cy.wait(1000)
        //cy.task('log','test')
      })
    }
    

  }

  // ***** End Actions *****

  // ***** Assertion *****
  assertTableHeadPengguna() {
    let head = [];
    cy.get(this.tableHead)
      .each((data) => {
        head.push(data.text());
      })
      .then(() => {
        cy.ftr("users").then((ftr) => {
          const arrHeadString = head.join(", ");
          const arrFtrString = ftr.head.join(", ");

          expect(arrHeadString).to.be.eq(arrFtrString);
        });
      });
  }

  assertUrlCreatePengguna() {
    cy.url().then((url) => {
      expect(url).to.include(this.creatUsersPattern);
    });
  }

  assertTableRowPengguna(any){
    cy.get(this.tableRow).then((data)=>{
      expect(data.text()).to.include(any)
    })
  }

  assertUrlEdit(){
    cy.url().then((url)=>{
      expect(url).to.include(this.urlEditPattern)
    })
  }

  assertUrlKasir(){
    cy.wait(2000)
    cy.url().then((url)=>{
      expect(url).to.include(this.urlSalesCreatePattern)
    })
  }

  assertDelAllPengguna(name){
    cy.get(this.tableBtn).should('not.exist')
  }

  assertDelPengguna(any){
    cy.get(this.tableRow).then((data)=>{
      expect(data.text()).to.not.include(any)
    })
  }

  // ***** End Assertion *****
}