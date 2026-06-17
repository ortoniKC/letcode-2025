import { Page, Locator } from "@playwright/test";

export class FakeStoreCartPage {
  private readonly page: Page;
  private readonly checkoutButton: Locator;
  private readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator("button:has-text('Checkout')");
    this.emptyCartMessage = page.locator("text=Your cart is empty");
  }

  async getCartRow(title: string): Promise<Locator> {
    return this.page.locator("table tbody tr").filter({
      hasText: title
    });
  }

  async increaseQuantity(title: string) {
    const row = await this.getCartRow(title);
    await row.locator("button:has-text('+')").click();
  }

  async decreaseQuantity(title: string) {
    const row = await this.getCartRow(title);
    await row.locator("button:has-text('-')").click();
  }

  async removeItem(title: string) {
    const row = await this.getCartRow(title);
    await row.locator("button:has(i.fa-trash)").click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async getEmptyCartMessage(): Promise<Locator> {
    return this.emptyCartMessage;
  }
}
