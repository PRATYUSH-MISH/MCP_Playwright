# Scripted QA Login Page Test Plan

## Application Overview

Test the public Scripted QA sign-in page at https://www.scriptedqa.com/. The page presents Username and Password fields, a Sign In button, and the sample credentials admin / Pass@9211. A successful sign-in navigates to /home, where a welcome heading and Sign Out button are visible. Incorrect and empty submissions remain on the sign-in page and display “Oops! The credentials are incorrect.” The Password field is an HTML password input. Each test starts independently in a fresh, logged-out browser state; do not rely on state left by another scenario. Use only the publicly displayed sample credentials for the positive case.

## Test Scenarios

### 1. Login page core functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with displayed credentials

**File:** `tests/login/valid-credentials.spec.ts`

**Steps:**
  1. Start from a fresh, logged-out browser state and open https://www.scriptedqa.com/.
    - expect: The Scripted QA sign-in page is displayed with Username and Password fields and a Sign In button.
  2. Enter the displayed username admin and password Pass@9211.
    - expect: The entered username is visible in the Username field.
  3. Click Sign In.
    - expect: The browser navigates to https://www.scriptedqa.com/home.
    - expect: The home page displays “Welcome back, Automation Engineer!” and a Sign Out button.

#### 1.2. Reject an unknown username

**File:** `tests/login/invalid-username.spec.ts`

**Steps:**
  1. Start from a fresh, logged-out browser state and open https://www.scriptedqa.com/.
    - expect: The sign-in form is displayed.
  2. Enter an unknown username such as wronguser and the displayed valid password Pass@9211.
    - expect: The form contains the entered values.
  3. Click Sign In.
    - expect: The browser remains on the sign-in page.
    - expect: The message “Oops! The credentials are incorrect.” is displayed.
    - expect: The user is not authenticated or redirected to /home.

#### 1.3. Reject an incorrect password

**File:** `tests/login/invalid-password.spec.ts`

**Steps:**
  1. Start from a fresh, logged-out browser state and open https://www.scriptedqa.com/.
    - expect: The sign-in form is displayed.
  2. Enter the displayed username admin and an incorrect password such as wrongpass.
    - expect: The form contains the entered values.
  3. Click Sign In.
    - expect: The browser remains on the sign-in page.
    - expect: The message “Oops! The credentials are incorrect.” is displayed.
    - expect: The user is not authenticated or redirected to /home.

#### 1.4. Handle submission with both fields empty

**File:** `tests/login/empty-submission.spec.ts`

**Steps:**
  1. Start from a fresh, logged-out browser state and open https://www.scriptedqa.com/ without entering either value.
    - expect: Both Username and Password fields are empty.
  2. Click Sign In.
    - expect: The browser remains on the sign-in page.
    - expect: The message “Oops! The credentials are incorrect.” is displayed.
    - expect: No authenticated home page is shown.

#### 1.5. Mask password entry and submit with Enter

**File:** `tests/login/password-masking-and-enter.spec.ts`

**Steps:**
  1. Start from a fresh, logged-out browser state and open https://www.scriptedqa.com/.
    - expect: The sign-in form is displayed.
  2. Verify that the Password field is a password-type input, then enter username admin and password Pass@9211.
    - expect: The Password field conceals the entered characters rather than displaying them as plain text.
    - expect: The entered username remains visible in the Username field.
  3. With focus in the Password field, press Enter to submit the form.
    - expect: The browser navigates to https://www.scriptedqa.com/home.
    - expect: The home page displays “Welcome back, Automation Engineer!” and a Sign Out button.
