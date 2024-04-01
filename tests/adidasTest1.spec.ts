import { test, expect } from '@playwright/test';


test('Navigate to a product', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.adidas.com/');
    await page.locator('li').filter({ hasText: 'HOMBREPRODUCTO' }).getByRole('menu').click();
    await page.getByRole('link', { name: 'Calzado • Hombre CALZADO' }).click();
    await page.getByRole('link', { name: 'Zapatillas Samba OG Negro Originals' }).nth(0).click();

    try {
        // Wait for the pop-up to appear with a timeout (e.g., 5 seconds)
        await page.waitForSelector('#gl-modal__close-mf-account-portal', { timeout: 5000 });
        // If the pop-up appears within the timeout, click the close button
        await page.click('#gl-modal__close-mf-account-portal');
        console.log('Pop-up was present and closed.');
    } catch (e) {
        // If the pop-up does not appear within the timeout, catch the timeout error and continue
        console.log('Pop-up did not appear, or could not be closed. Continuing test...');
    }


    await page.getByRole('button', { name: 'US H 10 / M' }).click();
});

test('Add item to cart', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.adidas.com/');
    await page.locator('li').filter({ hasText: 'HOMBREPRODUCTO' }).getByRole('menu').click();
    await page.getByRole('link', { name: 'Calzado • Hombre CALZADO' }).click();
    await page.getByRole('link', { name: 'Zapatillas Samba OG Negro Originals' }).nth(0).click();

    try {
        // Wait for the pop-up to appear with a timeout (e.g., 5 seconds)
        await page.waitForSelector('#gl-modal__close-mf-account-portal', { timeout: 5000 });
        // If the pop-up appears within the timeout, click the close button
        await page.click('#gl-modal__close-mf-account-portal');
        console.log('Pop-up was present and closed.');
    } catch (e) {
        // If the pop-up does not appear within the timeout, catch the timeout error and continue
        console.log('Pop-up did not appear, or could not be closed. Continuing test...');
    }

    await page.getByRole('button', { name: 'US H 10 / M' }).click();
    await page.getByRole('button', { name: 'Añadir al carrito' }).click();
});

test('View cart', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.adidas.com/');
    await page.locator('li').filter({ hasText: 'HOMBREPRODUCTO' }).getByRole('menu').click();
    await page.getByRole('link', { name: 'Calzado • Hombre CALZADO' }).click();
    await page.getByRole('link', { name: 'Zapatillas Samba OG Negro Originals' }).nth(0).click();

    try {
        // Wait for the pop-up to appear with a timeout (e.g., 5 seconds)
        await page.waitForSelector('#gl-modal__close-mf-account-portal', { timeout: 5000 });
        // If the pop-up appears within the timeout, click the close button
        await page.click('#gl-modal__close-mf-account-portal');
        console.log('Pop-up was present and closed.');
    } catch (e) {
        // If the pop-up does not appear within the timeout, catch the timeout error and continue
        console.log('Pop-up did not appear, or could not be closed. Continuing test...');
    }

    await page.getByRole('button', { name: 'US H 8 / M 9' }).click();
    await page.getByRole('button', { name: 'Añadir al carrito' }).click();
    await expect(page.locator('#specific-div-id p:text("PRODUCTO AÑADIDO AL CARRITO")')).toBeVisible();// Continue to cart is blocked, cannot continue test
})