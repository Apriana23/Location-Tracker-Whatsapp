const puppeteer = require('puppeteer');


(async () => {


	// Start QR Code Whatsapp
	const browser = await puppeteer.launch({
        headless: false, // No headless to scan the QR code.
        userDataDir: 'data/userdata' // Persist the session.
    });

    const page = await browser.newPage();
    await page.goto('https://web.whatsapp.com/');
    await page.waitFor(5000);

    console.log('Awaiting/Checking peering with WhatsApp phone');
    await page.waitFor('#side', { timeout: 60000 }).then(() => { // Scan the QR code within the next minute.
        console.log('Connected !');
    }).catch((res) => {
        console.log('Not connected !', res);
        return -1;
    })
    await page.waitFor(1000);


    //Find Group
	await page.focus('._2S1VP'); // Focus search input form.
    await page.keyboard.type('Testeee', { delay: 100 });

    // Select the best result.
     const groups = await page.$$('._25Ooe');
        for (const group of groups)
    await group.click();



    // Select Group Status
    await page.click('._5SiUq');
    await page.waitFor(1000);

    //Select Locations Tab
    const handles = await page.$$('._2phEY');
		for (const handle of handles)
  	await handle.click();
  	await page.waitFor(1000);

  	//Select Users Tracker
  	 const users = await page.$$('._2EXPL');
        for (const user of users)
    await user.click();
    await page.waitFor(1000);

})();