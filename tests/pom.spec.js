import{test} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { SearchHotel } from '../page/SearchHotel';

test('page object model', async({page})=>{

    const login = new LoginPage(page)
    await login.visitUrl();
    await login.enterUsername("ruganleo");
    await login.enterPassword("Open@123");
    await login.clickLoginButton();

    const hotel = new SearchHotel(page)
    await hotel.FindtheLocation();
    await hotel.findHotel();
    await hotel.findRtype();
    await hotel.selectrooms();
    await hotel.adperrooms();

    
})
