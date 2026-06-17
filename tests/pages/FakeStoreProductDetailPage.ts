import { Page, Locator } from "@playwright/test";

export class FakeStoreProductDetailPage {
  private readonly page: Page;
  private readonly addToCartButton: Locator;
  private readonly toastElement: Locator;
  private readonly backToProductsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator("button:has-text('Add to Cart')");
    this.toastElement = page.locator(".fixed.bottom-4.right-4 span.text-sm");
    this.backToProductsLink = page.locator("a[href='/home']");
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async getToastMessage(): Promise<string> {
    await this.toastElement.waitFor({ state: "visible", timeout: 5000 });
    return (await this.toastElement.textContent()) || "";
  }

  async clickBackToProducts() {
    await this.backToProductsLink.click();
  }
}
