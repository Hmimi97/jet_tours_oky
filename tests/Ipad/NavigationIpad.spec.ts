import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe("Tests moblies",()=>{
  test('test', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('/');
    await page.getByText('Accepter et fermer').click();
    await page.locator('#header > a.btn-menu.pull-left.visible-sm > button').click();                  
    await page.locator('#mm-1 > ul > li:nth-child(1) > a').click(); 
    await page.locator('#mm-2 > ul > li:nth-child(1) > a').click();
    await page.getByRole('link', { name: 'Tunisie', exact: true }).click();
    await page.locator('#header > a.btn-menu.pull-left.visible-sm > button').click();
    await page.locator('#mm-1 > ul > li:nth-child(2) > a').click();
    await page.locator('#mm-6 > ul > li:nth-child(2) > a').click();
    await page.getByRole('link', { name: 'Andalousie' }).click();
    await page.locator('#header > a.btn-menu.pull-left.visible-sm > button').click();
    await page.waitForSelector("#mm-1 > ul > li:nth-child(3) > a");
    await page.locator('#mm-1 > ul > li:nth-child(3) > a').click();
    await page.waitForSelector("#mm-11 > div > a.mm-btn.mm-prev"); 
    await page.locator('#mm-11 > div > a.mm-btn.mm-prev').click();  
    await page.locator('#mm-1 > ul > li:nth-child(4) > a').click();
    await page.waitForSelector("#mm-15 > div > a.mm-btn.mm-prev");
    await page.locator('#mm-15 > div > a.mm-btn.mm-prev').click();
    await page.waitForSelector("#mm-1 > ul > li.icon.dropdown.expand > a");
    await page.locator('#mm-1 > ul > li.icon.dropdown.expand > a').click();
    await page.waitForSelector("#mm-19 > div > a.mm-btn.mm-prev");
    await page.locator('#mm-19 > div > a.mm-btn.mm-prev').click();
    await expect(page.getByRole('button', { name: 'Circuits ' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Kappa Club, l’expérience du club ouvert sur la découverte');
    await expect(page.getByPlaceholder('JJ/MM/AAAA')).toHaveValue('Date de départ');
    page.close();
  });
})

