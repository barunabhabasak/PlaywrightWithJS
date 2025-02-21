exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page;
        this.loginLink = '#login2';
        this.usernameInput = "//input[@id='loginusername']";
        this.passwordInput = "//input[@id='loginpassword']";
        this.loginButton = "button[onclick='logIn()']"
    }

    async navigate(){
        await this.page.goto('https://demoblaze.com/index.html');
    }

    async login(page,username,password){

        await page.locator(this.loginLink).click();

        await page.fill(this.usernameInput,username);

        await page.fill(this.passwordInput,password);

        await page.locator(this.loginButton).click();

    }
}