export class SearchHotel{
    constructor(page){
        this.page = page;
        this.location = page.locator('//select[@id="location"]');
        this.hLocation = page.locator('//select[@id="hotels"]');
        this.rtypeLocation = page.locator('//select[@id="room_type"]');
        this.Nofrooms = page.locator('//select[@id="room_nos"]');
        this.adperroom = page.locator('//select[@id="adult_room"]');

    }
    async FindtheLocation(){
        await this.location.selectOption({lable:"London"})

    }
    async findHotel(){
        await this.hLocation.selectOption({lebel :"Hotel Sunshine"})
        
    }
    async findRtype(){
        await this.rtypeLocation.selectOption({lable :"Double"})
    }
    async selectrooms(){
        await this.Nofrooms.selectOption({lable :"3 - Three"})
    }
    async adperrooms(){
        await this.adperroom.selectOption({lable: "1 - One"})
    }


}
