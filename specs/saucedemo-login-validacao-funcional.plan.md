# SauceDemo Login Validation Plan

## Application Overview

Validate that SauceDemo login works correctly with valid credentials from a fresh state.

## Test Scenarios

### 1. Authentication - Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with valid credentials

**File:** `tests/auth/login-valido.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ from a blank/fresh browser state.
    - expect: Login page is displayed with Username, Password, and Login button visible.
  2. Type username standard_user and password secret_sauce.
    - expect: Both fields accept input and retain typed values.
  3. Click Login.
    - expect: User is redirected to /inventory.html.
    - expect: Products heading is visible.
    - expect: No login error message is displayed.
