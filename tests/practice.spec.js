//alert

// import{test} from '@playwright/test'
// test('Alert Handling',async({page})=>{
//     await page.goto("https://demo.automationtesting.in/Alerts.html");
//     page.once('dialog', async(dialog) =>{ //event listener(dialog)
//         // dialog.accept(); //simple alert (if it ok or cancel(confirmation alert) we should give dismiss(dismiss - inbuilt method))
        
//     dialog.accept("open");
//     console.log(dialog.message()); //get the text in the pop up
//     console.log(dialog.type()); // type of alert(alert(ok)/confirm(ok or cancel)/prompt(text messge)/)

//     })
    
// });

//frame handling

// import{test} from '@playwright/test'
// test.only('frame handling',async({page})=>{
//     await page.goto("https://demo.automationtesting.in/Register.html");
//     await page.locator('//a[text()="SwitchTo"]').click();
//     await page.locator('//a[text()="Frames"]').click();
//     // await page.frameLocator('//iframe[@id="singleframe"]').locator('//input[@type="text"]').fill("hello");
//     await page.locator('//a[@href="#Multiple"]').click();
//     await page.frameLocator('//iframe[@src="MultipleFrames.html"]').frameLocator('//iframe[@src="SingleFrame.html"]').locator('//input[@type="text"]').fill("hello");
// })

/**import{test} from '@playwright/test'
test.only('Alert Handling', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
     page.once('dialog',async(dialog)=>{
        dialog.accept("hello");
        // dialog.dismiss();
        console.log(dialog.message());
        console.log(dialog.type());
     })

     await page.locator("//a[text()='SwitchTo']").click();
     await page.locator("//a[text()='Alerts']").click();
    //  await page.locator('//a[@href="#OKTab"]').click();
     await page.locator('//a[@href="#CancelTab"]').click();
     await page.locator('//button[@onclick="confirmbox()"]').click();
     
} )**/

//frame handling

/**import{test} from '@playwright/test'
test.only('frame Handling', async({page})=>{

    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator('//a[text()="SwitchTo"]').click();
    await page.locator('//a[text()="Frames"]').click();
    await page.locator('//a[@href="#Multiple"]').click();
    await page.frameLocator('//iframe[@src="MultipleFrames.html"]').frameLocator('//iframe[@src="SingleFrame.html"]').locator('//input[@type="text"]').fill('hello');
})**/

//alert handling

// import{test} from '@playwright/test'
// test.only('alert handling',async({page})=>{
//     await page.goto("https://demo.automationtesting.in/Register.html#google_vignette");
//     page.once('dialog',async(dialog)=>{
//         dialog.accept();
//         console.log(dialog.message());
//         console.log(dialog.type());
//     })
//     await page.locator("//a[text()='SwitchTo']").click();
//     await page.locator("//a[text()='Alerts']").click();
//     await page.locator('//button[@class="btn btn-danger"]').click();
// })


// frame handling

// import{test} from '@playwright/test'
// test.only('framehandling',async({page})=>{
//     await page.goto("https://demo.automationtesting.in/Frames.html");
//     await page.frameLocator('//iframe[@style="float: left;height: 300px;width: 600px"]').locator('//input[@type="text"]').fill("hello");
// })



//window handling

// import { test } from '@playwright/test';

// test.only('windowhandling', async ({ page }) => {

//     await page.goto("https://demo.automationtesting.in/Windows.html#google_vignette");

//     const [prom] = await Promise.all([
//         context.waitForEvent('page'),
//         page.locator("//button[text()='click']").click()
//     ]);

//     await prom.locator("//span[text()='Downloads']").click();

// });

//window handling

// import{test} from '@playwright/test'
// test.only('windowhandling', async({page})=>{
//     await page.goto("https://demo.automationtesting.in/Register.html");
//     await page.locator("//a[text()='SwitchTo']").click();
//     await page.locator("//a[text()='Windows']").click();
//     // await page.locator('//a[@href="#Tabbed"]').click();
//     const prom = await page.waitForEvent('popup');
//     await page.locator('//button[@class="btn btn-info"]').click();
//     const window = prom
//     await window.locator("//span[text()='Downloads']").click();
// })

//windiow handling
// import{test} from '@playwright/test'
// test.only('windowhandling',async({context})=>{
//     const page = await context.newPage();
//     await page.goto("https://demo.automationtesting.in/Register.html");
//     await page.locator("//a[text()='SwitchTo']").click();
//     await page.locator("//a[text()='Windows']").click();
//     const [newPage] = await Promise.all([( page.waitForEvent('popup')),page.locator('//button[@class="btn btn-info"]').first().click()]);
//     await newPage.locator("//span[text()='Projects']").click();
//     await newPage.bringToFront()
//     const text = await page.locator("//h1[text()='Automation Demo Site ']").textContent();
//     console.log(text);

// }

// )

//window handling

// import{test} from '@playwright/test'
// test.only('windowHandling',async({context})=>{

//     const page = await context.newPage()
//     await page.goto("https://demo.automationtesting.in/Windows.html");
//     const [newPage] = await Promise.all([page.waitForEvent('popup'),page.locator('//button[@class="btn btn-info"]').first().click()])
//     await newPage.locator("//span[text()='Projects']").click();
//     await newPage.bringToFront();
//     const text = await page.locator("//h1[text()='Automation Demo Site ']").allTextContents();
//     console.log(text);
// })

//webtable handling

// import{test} from '@playwright/test'
// test.only('window tab handling', async({context})=>{

//     const page = await context.newPage();

//     await page.goto("https://demoqa.com/browser-windows");
//     const [newPage] = await Promise.all([page.waitForEvent('popup'),page.locator("//button[text()='New Tab']").click()]);
//     const text = await newPage.locator("//h1[text()='This is a sample page']").innerText();
//     console.log(text);
// })

//window handling

// import{test} from '@playwright/test'
// test.only('windowhandling', async({page})=>{
//     await page.goto("https://demo.automationtesting.in/Windows.html");
//     const [newPage] = await Promise.all([page.waitForEvent('popup'),page.locator('//button[@class="btn btn-info"]').first().click()]);

//     await newPage.locator("//span[text()='Projects']").click();

//     await newPage.bringToFront();

//     const text = await page.locator("//h1[text()='Automation Demo Site ']").innerText();

//     console.log(text);

// })

//alert Handling

// import{test} from '@playwright/test'
// test.only('alert handling', async({page})=>{
//   await page.goto("https://demo.automationtesting.in/Alerts.html");
//   page.once('dialog',async(dialog)=>{
//     dialog.accept("hello");
//     console.log(dialog.message());
//     console.log(dialog.type());
//   })

//   await page.locator("//a[text()='Alert with Textbox ']").click();
//   await page.locator('//button[@onclick="promptbox()"]').click();
// })

//dropdown

// import{test} from '@playwright/test'
// test.only('dropdown',async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     const dropdown = page.locator('//select[@id="country"]');
//     await dropdown.selectOption({label : 'United States'});
//     const val = await dropdown.inputValue();
//     console.log(val);
// })

// import{test} from '@playwright/test'
// test.only('framehandling',async({page})=>{
//     await page.goto("https://demo.automationtesting.in/Frames.html");
//     await page.locator('//a[@href="#Multiple"]').click();
//     await page.frameLocator('//iframe[@src="MultipleFrames.html"]').frameLocator('//iframe[@src="SingleFrame.html"]').locator('//input[@type="text"]').first().fill("hello");

// })


//webtable

import{test} from '@playwright/test'
 test('webtableHandling', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = page.locator('//table[@name="BookTable"]');
    console.log(await table.allInnerTexts());

 })