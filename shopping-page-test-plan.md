# Shopping Page Core Functionality Test Plan

## Application Overview

Validate four core areas of the Scripted QA Shopping page: product catalog display, product search/category/price filters, adding products to the cart, and checkout/order placement. The Shopping page requires authentication. Each scenario assumes a fresh browser session with no cart items, opens https://www.scriptedqa.com/, signs in using the sample credentials shown on the page (admin / Pass@9211), then opens https://www.scriptedqa.com/shopping. The current catalog contains 15 products; observed examples include Laptop ($1000), Headphones ($200), and Mango ($1). The filters include product search, category, price range, and Reset Filters. Adding Laptop changes the checkout counter from 0 to 1 and the button label to “Add to Cart (1)”. Checkout shows a bill with item, price, quantity, total, grand total, and Place Order; placing the order displays “Order Placed Successfully!” and “Thank you for your purchase.”

## Test Scenarios

### 1. Shopping page core functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Display product catalog with product details and Add to Cart controls

**File:** `tests/shopping/product-catalog.spec.ts`

**Steps:**
  1. Start a fresh browser session with no existing cart items. Open https://www.scriptedqa.com/.
    - expect: The sign-in page is displayed.
  2. Sign in with the sample credentials displayed on the page: username admin and password Pass@9211.
    - expect: The authenticated home page is displayed.
  3. Open https://www.scriptedqa.com/shopping.
    - expect: The browser is on the Shopping page.
    - expect: A Products heading, product search field, category filter, price filter, and checkout counter showing 0 are visible.
  4. Inspect the initial product list and verify the Laptop, Headphones, and Mango product cards.
    - expect: The Laptop card displays its product name, electronics category, price $1000, and an Add to Cart button.
    - expect: The Headphones card displays its product name, electronics category, price $200, and an Add to Cart button.
    - expect: The Mango card displays its product name, Fruits category, price $1, and an Add to Cart button.

#### 1.2. Filter and search products, then reset filters

**File:** `tests/shopping/product-filters.spec.ts`

**Steps:**
  1. Start a fresh browser session, sign in with the displayed sample credentials admin / Pass@9211, and open https://www.scriptedqa.com/shopping.
    - expect: The Shopping page opens with the full product catalog and default All Categories and All Prices filters.
  2. Select electronics in the category filter.
    - expect: Only electronics products are shown; each visible product is labeled electronics.
  3. Select $100 to $500 in the price filter while the electronics category is selected.
    - expect: The combined filters show Headphones ($200), Microwave Oven ($290), and Smartwatch ($499).
    - expect: Products outside the selected category or price range are not shown.
  4. Click Reset Filters.
    - expect: The category and price filters return to their default All Categories and All Prices selections.
    - expect: The full catalog is restored.
  5. Enter Mango in the Search products field.
    - expect: The results are narrowed to the Mango product card, showing category Fruits and price $1.

#### 1.3. Add a product and verify cart count updates

**File:** `tests/shopping/add-to-cart.spec.ts`

**Steps:**
  1. Start a fresh browser session, sign in with the displayed sample credentials admin / Pass@9211, and open https://www.scriptedqa.com/shopping.
    - expect: The Shopping page is displayed with the checkout counter at 0.
  2. Click Add to Cart on the Laptop product card once.
    - expect: The checkout counter updates from 0 to 1.
    - expect: The Laptop button label updates to Add to Cart (1).
    - expect: The product remains visible in the catalog.

#### 1.4. Review cart contents and place an order

**File:** `tests/shopping/checkout-order.spec.ts`

**Steps:**
  1. Start a fresh browser session, sign in with the displayed sample credentials admin / Pass@9211, and open https://www.scriptedqa.com/shopping.
    - expect: The Shopping page opens and the checkout counter shows 0.
  2. Click Add to Cart on the Laptop product card once.
    - expect: The checkout counter updates to 1.
  3. Click the checkout counter button.
    - expect: The browser navigates to https://www.scriptedqa.com/cart.
    - expect: The bill lists Laptop with price $1000.00, quantity x1, and line total $1000.00.
    - expect: The Grand Total is $1000.00.
    - expect: Clear Cart, Back to Shopping, and Place Order controls are visible.
  4. Click Place Order.
    - expect: The order completion view displays “Order Placed Successfully!”.
    - expect: The confirmation message “Thank you for your purchase.” is displayed.
