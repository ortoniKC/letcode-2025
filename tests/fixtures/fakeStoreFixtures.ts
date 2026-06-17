import { test as base } from "@playwright/test";
import { FakeStoreLoginPage } from "../pages/FakeStoreLoginPage";
import { FakeStoreHomePage } from "../pages/FakeStoreHomePage";
import { FakeStoreProductDetailPage } from "../pages/FakeStoreProductDetailPage";
import { FakeStoreCartPage } from "../pages/FakeStoreCartPage";

// Declare types of custom fixtures
type FakeStoreFixtures = {
  loginPage: FakeStoreLoginPage;
  homePage: FakeStoreHomePage;
  productDetailPage: FakeStoreProductDetailPage;
  cartPage: FakeStoreCartPage;
};

// Extend base test to include custom page fixtures
export const test = base.extend<FakeStoreFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new FakeStoreLoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new FakeStoreHomePage(page));
  },
  productDetailPage: async ({ page }, use) => {
    await use(new FakeStoreProductDetailPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new FakeStoreCartPage(page));
  },
});

export { expect } from "@playwright/test";
