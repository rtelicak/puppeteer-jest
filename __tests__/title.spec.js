import puppeteer from "puppeteer";

let page;
let browser;

beforeAll(async () => {
	browser = await puppeteer.launch({
		headless: true,
		// this pops up chrome
		// headless: false,
		// slowMo: 80,
		// args: [`--window-size=${width},${height}`]
	});
	page = await browser.newPage();
	// await page.setViewport({ 1920, 1080 });
});

afterAll(() => browser.close());

describe("Google.com", () => {
	test("it has 'Google' in its title", async () => {
		await page.goto('https://www.google.sk/');

		const title = await page.evaluate(() => document.title)

		expect(title).toEqual('Google')
	}, 10000);
});
