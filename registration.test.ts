import { test, expect, chromium } from '@playwright/test';

test.describe('Password Input Field Validation', () => {
   
    const allAvailableCharacters = /^[A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/|\\~`-]*$/;
    const withoutUppercaseLetter = /^[a-z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/|\\~`-]*$/;
    const withoutLowercaseLetter = /^[A-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/|\\~`-]*$/;
    const withoutNumber = /^[A-Za-z!@#$%^&*()_+={}\[\]:;"'<>,.?/|\\~`-]*$/;

  test('verify password input field validation error messages', async () => {

    const browser = await chromium.launch({
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',  // Specify path to your Chrome executable
        headless: false, // Set to false to run Chrome with UI visible
        slowMo: 2000, // Optional: adds a slight delay to make interactions visible
    });
    const page = await browser.newPage();

    // Navigate to the page
    await page.goto('https://auth-home-task.vercel.app/');
    
    // Click on the "Go to Registration" button
    await page.click('text=Go to Registration');

    // Wait for the URL to change to /register (or your desired URL)
    await page.waitForURL('**/register'); // Adjust the URL pattern as needed

    await page.waitForLoadState('domcontentloaded');

    // Verify password input field, when have less than 8 characters
    submitPasswordAndCheckErrorMessage(page, generatePassword(7, allAvailableCharacters), true);

    // Verify password input field, when password is without an uppercase letter
    submitPasswordAndCheckErrorMessage(page, generatePassword(8, withoutUppercaseLetter), false);

    // Verify password input field, when password is without an lowercase letter
    submitPasswordAndCheckErrorMessage(page, generatePassword(8, withoutLowercaseLetter), false);

    // Verify password input field, when password is without number
    submitPasswordAndCheckErrorMessage(page, generatePassword(8, withoutNumber), false);

    // Verify password input field, when password has least 8 characters with 1 uppercase, 1 lowercase, and 1 number
    submitPasswordAndCheckErrorMessage(page, generatePassword(8, allAvailableCharacters), true);

    await browser.close();
  }); 
});

export const submitPasswordAndCheckErrorMessage = async (page: any, password: string, isAllAvailableCharters: boolean) => {
    const passwordField = page.locator('(//input[@type="password"])[1]');
    console.log(`Filling password field with: ${password}`);  // Log the password before filling
   
    // Fill the password field with the provided password
    await passwordField.waitFor({ state: 'visible' });
    await passwordField.fill(password);
  
    // Click the "Register" button
    await page.click('text=Register');
  
    // Verify the error message is visible
    const errorMessage = await page.locator('text=Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number.');
    if (password.length <= 8 && isAllAvailableCharters == true) {
        await expect(errorMessage).not.toBeVisible();
    } else {
        await expect(errorMessage).toBeVisible();
    }
  };

// Function to generate a random password
export const generatePassword = (length: number, regex: RegExp): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+={}[\\]:;"\'<>,.?/|\\~`-';
    let password = '';
    for (let i = 0; i < length; i++) {
        let char = '';
        do {
          const randomIndex = Math.floor(Math.random() * chars.length);
          char = chars[randomIndex];
        } while (!regex.test(char));
    
        password += char;
    }
    
    return password;
  };
