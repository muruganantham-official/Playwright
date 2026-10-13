import{test,expect} from '@playwright/test'
// test('Launch', async({page})=>{
//     // const browser = chromium.Launch();
//     // const context = newContext.browser();
//     // const page = newPage.context();
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     let username = page.locator("//input[@name='username']");
//     await username.fill("Admin")
//     let password = page.locator("//input[@name='password']");
//     await password.fill("admin123");
//     let login = page.locator("//button[@type='submit']");
//     await login.click();
//     await expect(page).toHaveTitle("OrangeHRM");
//     await page.locator("//img[@alt='client brand banner']").isVisible();
//     await page.locator("//input[@placeholder='Search']").click();
//     await page.locator("//input[@placeholder='Search']").fill("open");

    

// })

// test.only('Dropdown',async({page})=>{
//         await page.goto("https://testautomationpractice.blogspot.com/");
//         let Dropdown= page.locator('//select[@id="country"]');
//         // await Dropdown.selectOption({label:"United States"})
//         await Dropdown.selectOption('United States');
//         console.log(await Dropdown.inputValue());        
//     })


    test('Confirmation Alert', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Alerts.html');

    page.once('dialog', async (dialog) => {
        console.log(dialog.message());
        console.log(dialog.type());

        dialog.accept("open");
    });

    await page.locator('//a[@href="#CancelTab"]').click();
    await page.locator('//button[@onclick="confirmbox()"]').click()
    await page.locator('//a[@href="#Textbox"]').click();
    await page.locator('//button[@onclick="promptbox()"]').click();
    
});
    