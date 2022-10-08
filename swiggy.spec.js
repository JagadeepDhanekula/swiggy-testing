const {test,expect} = require('@playwright/test'); 
const { text } = require('wd/lib/commands');

test("items adding to cart and checking out",async ({page})=>{
  await page.goto("https://www.swiggy.com/");
  await page.type('input[id="location"]', "manatropical");
  await page.locator('text="Mana Tropicale, Sarjapur Main Rd, Carmelaram, PO, Bengaluru, Karnataka, India"').click();
  await page.getByRole('link', { name: 'Search' }).click();
  await page.getByPlaceholder('Search for restaurants and food').fill('kfc');
  await page.getByTestId('autosuggest-item').click();
  await page.getByRole('button', { name: 'Restaurant name: KFC, Cuisines: American, Snacks, Biryani, Area: Bellandur Sarjapur, 5.0 km away, Rating: 3.8, Delivers in: 49 MINS, Cost is: RUPEES 400 FOR TWO, Offer Available: Get 20% OFF, Double tap to open restaurant menu.' }).click();
  await page.locator('.styles_itemAddButton__zJ7-R > ._3L1X9 > ._1RPOp').first().click();
  await page.getByRole('button', { name: 'Checkout →' }).click();
  await page.pause();
})
