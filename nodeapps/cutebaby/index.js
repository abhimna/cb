const puppeteer=require('puppeteer')

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

        await page.gotto('https://mycutebaby.in/contest/participant/?n=5e9beaf669928');
        await page.screenshot({
	   path: 'landing-page.png',
           fullPage: true
        });
        browser.close();
})();
