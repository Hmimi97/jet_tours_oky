import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.jettours.com/');
  await page.getByText('Accepter et fermer').click();
  await page.locator('#main-menu > ul > li:nth-child(1) > span').click();
  await page.getByRole('link', { name: 'Tunisie', exact: true }).click();
  await page.getByRole('button', { name: 'Clubs ' }).click();
  await page.getByRole('link', { name: 'Andalousie' }).click();
  await page.getByRole('button', { name: 'Circuits ' }).click();
  await page.getByRole('button', { name: 'Les bons plans ' }).click();
  await page.getByRole('button', { name: 'Destinations ' }).click();
  await expect(page.getByRole('button', { name: 'Circuits ' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Kappa Club, l’expérience du club ouvert sur la découverte');
  await expect(page.getByPlaceholder('JJ/MM/AAAA')).toHaveValue('Date de départ');
  page.close();
});