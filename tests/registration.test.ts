import { test, expect } from '@playwright/test';

test.describe('Password Input Field Validation', () => {
   
  test('verify password input field validation error messages', async ({ page }) => {

    // Navigate to the page
    await page.goto('https://auth-home-task.vercel.app/');
    
    // Click on the "Go to Registration" button
    await page.click('text=Go to Registration');

    // Verify password input field, when have less than 8 characters
    await submitPasswordAndCheckErrorMessage(page, "Pass1", true);

    // Verify password input field, when password is without an uppercase letter
    await submitPasswordAndCheckErrorMessage(page, "password1", false);

    // Verify password input field, when password is without an lowercase letter
    await submitPasswordAndCheckErrorMessage(page, "PASSWORD1", false);

    // Verify password input field, when password is without number
    await submitPasswordAndCheckErrorMessage(page, "Password", false);

    // Verify password input field, when password has least 8 characters with 1 uppercase, 1 lowercase, and 1 number
    await submitPasswordAndCheckErrorMessage(page, "Password1", true);
  }); 
});

export const submitPasswordAndCheckErrorMessage = async (page: any, password: string, isAllAvailableCharters: boolean) => {
    const passwordField = page.locator('(//input[@type="password"])[1]');
    console.log(`Filling password field with: ${password}`);  // Log the password before filling
   
    // Fill the password field with the provided password
    await passwordField.fill(password);
  
    // Click the "Register" button
    await page.click('text=Register');
  
    // Verify the error message is visible
    const errorMessage = await page.locator('text=Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number.');
    if (password.length >= 8 && isAllAvailableCharters == true) {
        await expect(errorMessage).not.toBeVisible();
    } else {
        await expect(errorMessage).toBeVisible();
    }
  };
