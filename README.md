# Task 1: Based on requirements create 3 manual test cases

## Test #1 - Form submission with invalid data and error message validation

1. Open https://auth-home-task.vercel.app/
2. Click "Go to Registration" button

Expected Result: Registration Form contains "Username", "Email", "Password", "Confirm Password" input fields and "Submit"

3. Click "Register" button

Expected Result: Validation error messages appears for fields "Username", "Email" and "Password", fields with errors are highlighted, user isn't redirected to Home Page and registration isn't successful


## Test #2 - Form submission

1. Open https://auth-home-task.vercel.app/
2. Click "Go to Registration" button
3. Enter valid value (alphanumeric, 3-20 characters) to "Username" input field
4. Enter valid value (email format, e.g., example@domain.com) to "Email" input field
5. Enter idetical valid value (minimum 8 characters, at least 1 uppercase, 1 lowercase, and 1 number) to "Password" and "Confirm Password" input fields
6. Click "Register" button

Expected result: User is redirected to Home Page, with text "You have registered successfully!"


## Test #3 - Password field validation
1. Open https://auth-home-task.vercel.app/
2. Click "Go to Registration" button
3. Enter a password with less than 8 characters (e.g., Pass1)
4. Click "Register" button
5. Enter a password without an uppercase letter (e.g., password123)
6. Click "Register" button
7. Enter a password without a lowercase letter (e.g., PASSWORD123)
8. Click "Register" button
9. Enter a password without a number (e.g., Password)
10. Click "Register" button
11. Enter a password with at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number (e.g., Password123)
12. Click "Register" button

Expected Result: Validation error message is displayed after steps 4, 6, 8, 10. After step 12 validation error message is hidden

# Task 2: Report at least 1 Bug You have found during the testing

OS: Windows 11 Pro (64-bit)
Resolution: 1920 x 1080
Scaling: 150%
Browser: Chrome 134.0.6998.166 (64-bit)

## BUG #1
1. Open https://auth-home-task.vercel.app/
2. Click "Go to Registration" button
3. Click "Register" button

Expected Result: Validation error messages appears for fields "Username", "Email" and "Password", fields with errors are highlighted, user isn't redirected to Home Page and registration isn't successful
Actual Result: Fields with errors aren't highlighted (screenshot added to "bug screenshot" folder)

## BUG #2
1. Open https://auth-home-task.vercel.app/
2. Click "Go to Registration" button
3. Add test@test.l value to "Email" input field (without "v")
4. Click "Register" button 

Expected Result: Validation error message is displayed for "Email" input field
Actual Result: Validation error message isn't displayed for "Email" input field (screenshot added to "bug screenshot" folder)

# Task 4: Add points to improve form's UI/UX
1. When add wrong password, then in error message display what is really missing to get correct password, instead of full error message
2. Fields could contain placeholder text, which need to be visible and help guide the user to correctly fill in the fields
3. If fields are required, then could add red asterisk next to label text, to inform user before "Register" button is clicked without value in field which is required
4. Could add infomation icon next to fields or labels, so user can hover them and see what exacly are requirments for each input field
5. Real-time match check for input fields, when user types in input field, that it immediately shows if value is valid instead of filling all fields and then click "Register" button to see if have mistakes or not
6. Could disable "Register" button if all fields are not filled

# Task 5: Anything You would improve/specify more in the existing requirements
1. Should check if entered username and email already exists or not in system to prevent duplicating
2. After successful registration could ask user to verify email address to activate registered account and prove it belongs to the user
3. Add possibility for user to make password visible in case wants to see what was typed in "Password" input field
4. Add requirement of CAPTCHA to prevent bots from registration
5. Add requirment, when field is focused, so border of input field is highlighted
6. Specify what happens, when user start to add values to input fields and click "Back" or wants to close tab/browser

# Task 6: What else can be tested?
1. Labels can be tested to check if label text corresponds to input field, like if label is password, then input field requires password
2. Cance test performance, e.g., how fast registration form is opened, when click "Go to Registration" button or how fast registration is performed, when input fields contains valid data
3. Can test security, when system warns user, if entered password is too weak. The system could provide guidance on creating a stronger password even passwords meet minimal requirements
4. Test password encryption after successful registration. In database can check if password is stored in encrypted format, instead of plain text
5. Cross-Site Scripting Prevention - attempt to inject JavaScript code into the form fields (e.g., <script>alert('XSS');</script>)
6. Responsive design testing on different resolution sizes, mobile devices and tablets
7. Cross-Browser Compatibility - test registration form in different browsers (e.g., Chrome, Firefox, Safari, Edge)
8. Accessibility testing - using screen reader or keyboard to navigate throught registration and check color contrast to verify that the text, error messages, and background have sufficient contrast for readability