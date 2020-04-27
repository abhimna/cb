const puppeteer = require('puppeteer');

const escapeXpathString = str => {
  const splitedQuotes = str.replace(/'/g, `', "'", '`);
  return `concat('${splitedQuotes}', '')`;
};

const clickByText = async (page, text) => {
  const escapedText = escapeXpathString(text);
  const linkHandlers = await page.$x(`//a[contains(text(), ${escapedText})]`);
  
  if (linkHandlers.length > 0) {
    await linkHandlers[0].click();
  } else {
    throw new Error(`Link not found: ${text}`);
  }
};

async function run() {
    console.log('Inside run');
    let browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();
    // Open page.
    await page.goto('https://mycutebaby.in/contest/participant/?n=5e9beaf669928', {timeout: 30000000});

//   console.log('lets wait for 10 seconds' + page.html());
setTimeout(function(){console.log('lets start')}, 10000); 
await page.$eval('.name_box', el => el.value = 'Light Bulb');
await page.$eval('#vote_btn', el => el.click());

    //await page.close();
    //await browser.close();
}
run();
setInterval(run, 1800000);
//run();
