const { test, expect } = require('@playwright/test');

test('Buscar Pacto Soluções no Yahoo', async ({ page }) => {
  await page.goto('https://www.yahoo.com/');
  await page.fill('input[name="p"]', 'Pacto Soluções');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/search/);
  await expect(page.locator('body')).toContainText('Pacto Soluções');
});