import { Page, Locator } from "@playwright/test";

export class FakeStoreHomePage {
  private readonly page: Page;
  private readonly cartLink: Locator;
  private readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator("a[href='/cart']");
    this.cartBadge = this.cartLink.locator(".absolute.-top-1.-right-1");
  }

  async goto() {
    await this.page.goto("/home");
  }

  async getProductCard(title: string): Promise<Locator> {
    // Select the card containing the specific product title
    return this.page.locator(".grid > div").filter({
      has: this.page.locator("h3", { hasText: title })
    });
  }

  async clickProduct(title: string) {
    const card = await this.getProductCard(title);
    await card.click();
  }

  async getCartCount(): Promise<string> {
    // Return cart badge text, or "0" if it doesn't exist
    if (await this.cartBadge.isVisible()) {
      return (await this.cartBadge.textContent()) || "0";
    }
    return "0";
  }

  async clickCart() {
    await this.cartLink.click();
  }
}
