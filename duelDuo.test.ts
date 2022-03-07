
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});

test('Draw button displays choices', async () => {
    const draw = driver.findElement(By.id('draw'))
    await draw.click()
    await driver.sleep(1000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
});

test('Clicking "Add to Duo" button displays <div id="player-duo">', async () => {
    const drawBtn = driver.findElement(By.id('draw'));
    await drawBtn.click();
    await driver.sleep(1000);
    const addToDuoBtn = driver.findElement(By.className('bot-btn'));
    await addToDuoBtn.click();
    await driver.sleep(1000);
    const playerDuo = driver.findElement(By.id('player-duo'));
    const displayed = await playerDuo.isDisplayed();
    expect(displayed).toBe(true);
});