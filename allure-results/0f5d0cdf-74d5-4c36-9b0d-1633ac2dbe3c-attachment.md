# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: usernamefill.spec.js >> Confirmation Alert
- Location: tests\usernamefill.spec.js:31:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[@onclick="promptbox()"]')
    - locator resolved to <button class="btn btn-info" onclick="promptbox()">click the button to demonstrate the prompt box </button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    35 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [aria-hidden] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7]:
        - /url: http://www.automationtesting.in
      - heading [level=1] [ref=e10]: Automation Demo Site
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link [ref=e16]:
            - /url: Index.html
            - text: Home
        - listitem [ref=e17]:
          - link [ref=e18]:
            - /url: Register.html
            - text: Register
        - listitem [ref=e19]:
          - link [ref=e20]:
            - /url: WebTable.html
            - text: WebTable
        - listitem [ref=e21]:
          - link [ref=e22]:
            - /url: SwitchTo.html
            - text: SwitchTo
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link [ref=e25]:
            - /url: Widgets.html
            - text: Widgets
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link [ref=e28]:
            - /url: Interactions.html
            - text: Interactions
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link [ref=e31]:
            - /url: SwitchTo.html
            - text: Video
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link [ref=e34]:
            - /url: WYSIWYG.html
            - text: WYSIWYG
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link [ref=e37]:
            - /url: "#"
            - text: More
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link [ref=e40]:
            - /url: http://practice.automationtesting.in/
            - text: Practice Site
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link [ref=e48]:
          - /url: "#OKTab"
          - text: Alert with OK
      - listitem [ref=e49]:
        - link [expanded] [ref=e50]:
          - /url: "#CancelTab"
          - text: Alert with OK & Cancel
      - listitem [ref=e51]:
        - link [ref=e52]:
          - /url: "#Textbox"
          - text: Alert with Textbox
    - generic [ref=e53]:
      - button [ref=e54] [cursor=pointer]: click the button to display a confirm box
      - paragraph [ref=e55]: You pressed Ok
  - generic [ref=e57]:
    - insertion [ref=e60]:
      - generic [ref=e63]:
        - heading [level=2] [ref=e65]: Discover more
        - link [ref=e66] [cursor=pointer]:
          - generic [ref=e67]: Automation testing tools
        - link [ref=e71] [cursor=pointer]:
          - generic [ref=e72]: Software testing services
        - link [ref=e76] [cursor=pointer]:
          - generic [ref=e77]: Web application testing
        - link [ref=e81] [cursor=pointer]:
          - generic [ref=e82]: QA consulting services
        - link [ref=e86] [cursor=pointer]:
          - generic [ref=e87]: Automation demo site
        - link [ref=e91] [cursor=pointer]:
          - generic [ref=e92]: Alerts testing guide
        - link [ref=e96] [cursor=pointer]:
          - generic [ref=e97]: Windows testing tutorial
        - link [ref=e101] [cursor=pointer]:
          - generic [ref=e102]: Frames testing examples
    - insertion [ref=e108]:
      - generic [ref=e111]:
        - heading [level=2] [ref=e113]: Discover more
        - link [ref=e114] [cursor=pointer]:
          - generic [ref=e115]: Widgets testing course
        - link [ref=e119] [cursor=pointer]:
          - generic [ref=e120]: Drag and Drop testing
        - link [ref=e124] [cursor=pointer]:
          - generic [ref=e125]: Video testing platform
        - link [ref=e129] [cursor=pointer]:
          - generic [ref=e130]: Source Robotics
        - link [ref=e134] [cursor=pointer]:
          - generic [ref=e135]: WYSIWYG editor testing
        - link [ref=e139] [cursor=pointer]:
          - generic [ref=e140]: File upload testing
        - link [ref=e144] [cursor=pointer]:
          - generic [ref=e145]: Progress bar testing
        - link [ref=e149] [cursor=pointer]:
          - generic [ref=e150]: Modals testing examples
    - insertion [ref=e156]:
      - generic [ref=e159]:
        - heading [level=2] [ref=e161]: Discover more
        - link [ref=e162] [cursor=pointer]:
          - generic [ref=e163]: Practice testing site
        - link [ref=e167] [cursor=pointer]:
          - generic [ref=e168]: Book Play Tickets
        - link [ref=e172] [cursor=pointer]:
          - generic [ref=e173]: Read Showbiz News
        - link [ref=e177] [cursor=pointer]:
          - generic [ref=e178]: Compare Broadband
        - link [ref=e182] [cursor=pointer]:
          - generic [ref=e183]: Find Tech Guides
        - link [ref=e187] [cursor=pointer]:
          - generic [ref=e188]: Software testing training
        - link [ref=e192] [cursor=pointer]:
          - generic [ref=e193]: Automation testing tools
        - link [ref=e197] [cursor=pointer]:
          - generic [ref=e198]: Software testing services
    - insertion [ref=e204]:
      - generic [ref=e207]:
        - heading [level=2] [ref=e209]: Discover more
        - link [ref=e210] [cursor=pointer]:
          - generic [ref=e211]: Try Dev Tools
        - link [ref=e215] [cursor=pointer]:
          - generic [ref=e216]: Try Cloud Tools
        - link [ref=e220] [cursor=pointer]:
          - generic [ref=e221]: Learn to Code
        - link [ref=e225] [cursor=pointer]:
          - generic [ref=e226]: JQuery testing resources
        - link [ref=e230] [cursor=pointer]:
          - generic [ref=e231]: Try CMS Tools
        - link [ref=e235] [cursor=pointer]:
          - generic [ref=e236]: Dynamic data testing
        - link [ref=e240] [cursor=pointer]:
          - generic [ref=e241]: Compare TVs
        - link [ref=e245] [cursor=pointer]:
          - generic [ref=e246]: Binge Hit Series
    - contentinfo [ref=e251]:
      - generic [ref=e253]:
        - generic [ref=e254]:
          - text: "\"@ 2016\""
          - link [ref=e255]:
            - /url: "#"
            - text: Automation Testing
          - text: "\"All Rights Reserved.\""
        - generic [ref=e256]:
          - link [ref=e257]:
            - /url: https://www.facebook.com/automationtesting2016/
            - generic [ref=e258]: 
          - link [ref=e259]:
            - /url: https://twitter.com/krishnasakinala
            - generic [ref=e260]: 
          - link [ref=e261]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
            - generic [ref=e262]: 
          - link [ref=e263]:
            - /url: https://plus.google.com/105286300926085335367
            - generic [ref=e264]: 
          - link [ref=e265]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
            - generic [ref=e266]: 
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | // test('Launch', async({page})=>{
  3  | //     // const browser = chromium.Launch();
  4  | //     // const context = newContext.browser();
  5  | //     // const page = newPage.context();
  6  | //     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  7  | //     let username = page.locator("//input[@name='username']");
  8  | //     await username.fill("Admin")
  9  | //     let password = page.locator("//input[@name='password']");
  10 | //     await password.fill("admin123");
  11 | //     let login = page.locator("//button[@type='submit']");
  12 | //     await login.click();
  13 | //     await expect(page).toHaveTitle("OrangeHRM");
  14 | //     await page.locator("//img[@alt='client brand banner']").isVisible();
  15 | //     await page.locator("//input[@placeholder='Search']").click();
  16 | //     await page.locator("//input[@placeholder='Search']").fill("open");
  17 | 
  18 |     
  19 | 
  20 | // })
  21 | 
  22 | // test.only('Dropdown',async({page})=>{
  23 | //         await page.goto("https://testautomationpractice.blogspot.com/");
  24 | //         let Dropdown= page.locator('//select[@id="country"]');
  25 | //         // await Dropdown.selectOption({label:"United States"})
  26 | //         await Dropdown.selectOption('United States');
  27 | //         console.log(await Dropdown.inputValue());        
  28 | //     })
  29 | 
  30 | 
  31 |     test('Confirmation Alert', async ({ page }) => {
  32 | 
  33 |     await page.goto('https://demo.automationtesting.in/Alerts.html');
  34 | 
  35 |     page.once('dialog', async (dialog) => {
  36 |         console.log(dialog.message());
  37 |         console.log(dialog.type());
  38 | 
  39 |         dialog.accept("open");
  40 |     });
  41 | 
  42 |     await page.locator('//a[@href="#CancelTab"]').click();
  43 |     await page.locator('//button[@onclick="confirmbox()"]').click()
  44 |     await page.locator('//a[@href="#Textbox"]').click();
> 45 |     await page.locator('//button[@onclick="promptbox()"]').click();
     |                                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  46 |     
  47 | });
  48 |     
```