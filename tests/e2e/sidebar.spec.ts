import { test, expect } from '@playwright/test';

test('hidden sidebar by default', async ({page}) => {
    await page.goto('./');

    await expect(page.locator('#sidebar')).toBeHidden();
});

test('open sidebar', async ({page}) => {
    await page.goto('./');

    await expect(page.locator('.open-sidebar')).toBeVisible();

    await page.locator('.open-sidebar').click();

    await expect(page.locator('#sidebar')).toBeVisible();
});

test('close sidebar', async ({page}) => {
    await page.goto('./');

    await page.locator('.open-sidebar').click();

    await page.screenshot();

    await expect(page.locator('.close-sidebar')).toBeVisible();

    await page.locator('.close-sidebar').click();

    await page.screenshot();

    await expect(page.locator('#sidebar')).toBeHidden();
});
