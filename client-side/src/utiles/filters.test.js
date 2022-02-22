const puppeteer = require('puppeteer');
const { applyFilters } = require('./filters');

it('matches even if received contains additional elements', () => {
	let dataSet = [
		{
			_id: '620d4c67903bed77721b9a11',
			logo: 'http://placehold.it/32x32',
			company: 'CONJURICA',
			email: 'bergerhardy@conjurica.com',
			phone: '+1 (914) 476-2387',
			city: 'Gilgo',
			specialties: ['excavation'],
		},
		{
			_id: '620d4c674394763a45ceb21e',
			logo: 'http://placehold.it/32x32',
			company: 'APPLIDEC',
			email: 'bergerhardy@applidec.com',
			phone: '+1 (822) 596-2490',
			city: 'Lynn',
			specialties: ['excavation', 'electrical'],
		},
	];
	let expected = [
		{
			_id: '620d4c67903bed77721b9a11',
			logo: 'http://placehold.it/32x32',
			company: 'CONJURICA',
			email: 'bergerhardy@conjurica.com',
			phone: '+1 (914) 476-2387',
			city: 'Gilgo',
			specialties: ['excavation'],
		},
	];
	let searchTerm = 'CON';
	let filters = ['excavation'];
	let result = applyFilters(dataSet, searchTerm, filters);
	expect(result).toEqual(expect.arrayContaining(expected));
});

// for end 2 end test
it('should create an element with text and correct class', async () => {
	const browser = await puppeteer.launch({
		headless: true,
		slowMo: 80,
		args: ['--window-size=1920,1080'],
	});
	const page = await browser.newPage();
	await page.goto('http://localhost:3000/main');
	await page.click('input#data-inputid');
	await page.type('input#data-inputid', 'App');
	const finalText = await page.$$eval('div.company-name', (divs) => divs.length);
	expect(finalText).toBe(1);
}, 10000);
