import { test } from '@playwright/test'
test('frameHandling', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator("//a[text()='SwitchTo']").click();
    await page.locator("//a[text()='Frames']").click();
    await page.locator('//a[@href="#Multiple"]').click();
    const frame = page.frameLocator('//iframe[@src="MultipleFrames.html"]')

    await frame.frameLocator('//iframe[@style="float: left;height: 250px;width: 400px"]').locator('//input[@type="text"]').fill("hooo");
    // await page.frameLocator('//iframe[@id="singleframe"]').locator('//input[@type="text"]').first().fill("hello");





    // await page.locator("//a[text()='SwitchTo']").click();
    // await page.locator("//a[text()='Frames']").click();
    // await page.locator('//a[@href="#Multiple"]').click();
    // const frame1 = page.frameLocator('//iframe[@src="MultipleFrames.html"]');
    // await frame1.frameLocator('//iframe[@src="SingleFrame.html"]').locator('//input[@type="text"]').fill("Hello");

});

