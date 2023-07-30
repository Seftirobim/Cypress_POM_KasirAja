export class __GlobalVariable{

    constructor(){
    
    //URL PATTERN
        this.urlLogin = 'http://kasirdemo.belajarqa.com/' 
        this.urlLoginPattern = '/login'
        this.urlRegisterPattern = '/register'
        this.urlDashboardPattern = '/dashboard'
        this.creatUsersPattern = 'users/create'
        this.urlEditPattern = '/edit'
        this.urlSalesCreatePattern = 'sales/create'
        this.urlCategoryPattern = '/categories'
        this.urlCategoryCreatePattern = '/categories/create'
    
    // ***** LOGIN PAGES *****
        // Elements
        this.email = 'input#email'
        this.password = '#password'
        this.loginbtn = 'login'
        this.daftarLink = 'ingin mencoba, daftar ?'

        // Notifications and errors
        this.InvEmailMsg = '"email" must be a valid email'
        this.emptyEmailMsg = '"email" is not allowed to be empty'
        this.emptyPassMsg = '"password" is not allowed to be empty'
        this.InvCredMsg = 'Kredensial yang Anda berikan salah'
        this.LgEmptyAllMsg = 'email and password are required'
    // ***** END LOGIN PAGES *****
        
    // ***** REGISTER PAGES *****
        // Elements 
        this.namatoko = '#name'
        this.passVisible = '.chakra-input__right-element'
        this.loginLink = 'sudah punya akun, login ?'
        this.daftarBtn = 'daftar'

        //Notifications and errors
        this.BerhasilMsg = 'Toko berhasil didaftarkan'
        this.NmTokoFormatMsg = '"nama" must be a text'
        this.RegDuplicateMsg = 'Data already exists'
        this.passMinMsg = 'The minimum password length must be 12 characters'
        this.NmTokoEmptyMsg = '"name" is not allowed to be empty'
        this.RgemptyAllMsg = 'nama toko, email and password are required'
    // ***** END REGISTER PAGES *****

    // ***** DASHBOARD PAGES *****
        // Elements
        this.dashboardMenu = '[href="/dashboard"]'
        this.dashboardContainer = ".chakra-container"
        this.salesMenu = '[href="/sales"]'
        this.purchasesMenu = '[href="/purchases"]'
        this.categoriesMenu = '[href="/categories"]'
        this.productsMenu = '[href="/products"]'
        this.usersMenu = '[href="/users"]'
        this.customersMenu = '[href="/customers"]'
        this.profileBtn = 'button[id^="menu-button"]'
        this.MenuProfileBtn = 'button[id^="menu-list"]' 
        this.logoutBtn = 'logout'
        this.modalDelBtn = '.css-n45e6f'


    // ***** END DASHBOARD PAGES *****
    
    // ***** PENGGUNA PAGES *****
        // Elements
        this.tableHead = ".css-jfypmb"
        this.tableRow = '[role="row"]'
        this.tableBtn = '.css-pu8osu'
        this.MenuUbah = 'ubah'
        this.MenuHapus = 'hapus'
        this.MenuHapusIndex = '[data-index="1"]'
        this.tambahPgnBtn = '[href="/users/create"]'
        this.namaPengguna = "input#nama"
        this.emailPengguna = "#email"
        this.passPengguna = "#password"
        this.btnSimpan = "simpan"
        this.cariInput = '[placeholder="cari"]'
        
    
        // Notifications and errors
        this.notifDesc = ".chakra-alert__desc"
        this.emptyNmPenggunaMsg = '"name" is not allowed to be empty'
        this.emptyEmailPenggunaMsg = '"email" is not allowed to be empty'
        this.emptyPassPenggunaMsg = '"password" is not allowed to be empty'
        this.emptyAllsPenggunaMsg = '"name, email and password" are not allowed to be empty'
    // ***** PENGGUNA PAGES *****

    // ***** KATEGORI PAGES *****

        //Elements
        this.addCatBtn = '[href="/categories/create"]'
        this.nameCategory = '#nama'
        this.descCategory = '#deskripsi'
        this.saveBtnCategory = 'simpan'

        // Notifications and errors
        this.emptyNmCatMsg = '"name" is not allowed to be empty'


    // ***** END KATEGORI PAGES *****
    }
}