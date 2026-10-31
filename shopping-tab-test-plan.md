# Home Page Shopping Tab Test Case

## Application Overview

Verify the authenticated Scripted QA home page displays a Shopping navigation tab and that selecting it routes to the Shopping page. Direct navigation to /home while logged out redirects to the sign-in page, so start from a fresh logged-out state, sign in with the sample credentials displayed on the login screen, and then perform the navigation check. The Shopping page is at /shopping and shows a Products heading.

## Test Scenarios

### 1. Home page navigation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify Shopping tab is visible and opens the Shopping page

**File:** `tests/home/shopping-tab-navigation.spec.ts`

**Steps:**
  1. Start from a fresh, logged-out browser state and open https://www.scriptedqa.com/home.
    - expect: Because /home requires authentication, the application redirects to the sign-in page.
  2. On the sign-in page, use the displayed sample credentials (username admin and password Pass@9211) and submit the form.
    - expect: The browser navigates to https://www.scriptedqa.com/home.
    - expect: The home page is displayed with its Categories navigation.
  3. Verify that the Categories navigation contains a visible link named Shopping.
    - expect: A Shopping link is visible on the home page.
  4. Click the Shopping link.
    - expect: The browser navigates to https://www.scriptedqa.com/shopping.
    - expect: The Shopping page is displayed with a Products heading.
