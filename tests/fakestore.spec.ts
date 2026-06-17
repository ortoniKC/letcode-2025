import { test, expect } from "./fixtures/fakeStoreFixtures";

test.describe("Fake Store POM E2E Tests", () => {
  // Use Playwright parallel mode for these tests
  test.describe.configure({ mode: "parallel" });

  test("1. User Login Workflow", async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login("mor_2314", "83r5^_");

    const toastMsg = await loginPage.getToastMessage();
    expect(toastMsg).toBe("Login Successful");

    await expect(page).toHaveURL("/home");
  });

  test("2. Add Product to Cart", async ({ homePage, productDetailPage }) => {
    await homePage.goto();

    const productTitle = "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops";
    await homePage.clickProduct(productTitle);

    await productDetailPage.addToCart();
    const toast = await productDetailPage.getToastMessage();
    expect(toast).toContain("added to cart!");

    await productDetailPage.clickBackToProducts();
    const count = await homePage.getCartCount();
    expect(count).toBe("1");
  });

  test("3. Checkout Cart Workflow", async ({ loginPage, homePage, productDetailPage, cartPage, page }) => {
    // Start by logging in
    await loginPage.goto();
    await loginPage.login("mor_2314", "83r5^_");
    await expect(page).toHaveURL("/home");

    // Add a product to the cart
    const productTitle = "Mens Casual Premium Slim Fit T-Shirts";
    await homePage.clickProduct(productTitle);
    await productDetailPage.addToCart();
    
    // Verify toast notification
    const toast = await productDetailPage.getToastMessage();
    expect(toast).toContain("added to cart!");

    // Navigate to the cart
    await homePage.clickCart();
    await expect(page).toHaveURL("/cart");

    // Verify item is inside the cart table
    const cartRow = await cartPage.getCartRow(productTitle);
    await expect(cartRow).toBeVisible();

    // Listen for the Checkout window alert
    page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("Checkout Successful!");
      await dialog.accept();
    });

    // Execute checkout
    await cartPage.checkout();

    // Verify cart is now empty
    const emptyMsg = await cartPage.getEmptyCartMessage();
    await expect(emptyMsg).toBeVisible();
  });
});
