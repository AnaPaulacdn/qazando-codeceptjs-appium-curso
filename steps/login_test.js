Feature('login');

const { I, login_page } = inject()

Before (() => {
    console.log('Before')
});

BeforeSuite (() => {
    console.log('BeforeSuite')
});

After(() => {
    console.log('After')
});

AfterSuite (() => {
    console.log('AfterSuite')
});

Scenario('Login with success', ({home_page}) => {

    I.runOnIOS(()=> {
        console.log('Estou no IOS!')
    });

    I.runOnAndroid(()=> {
        console.log('Estou no Android!')
    });

    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSuccess()
});

Scenario('Login with error', ({login_page}) => {
    login_page.doLogin('eteste@teste.com', '123456')
    login_page.checkLoginError()
});
