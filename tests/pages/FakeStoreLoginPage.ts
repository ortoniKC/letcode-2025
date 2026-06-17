import { Page, Locator } from "@playwright/test";

export class FakeStoreLoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly submitButton: Locator;
  private readonly toastElement: Locator;
  private readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("input[placeholder='Enter Username']");
    this.passwordInput = page.locator("input[placeholder='Enter Password']");
    this.submitButton = page.locator("button[type='submit']");
    this.toastElement = page.locator(".fixed.bottom-4.right-4 span.text-sm");
    this.logoutButton = page.locator("button:has(i.fa-sign-out-alt)");
  }

  async goto() {
    await this.page.goto("/login");
  }

  async login(username: string, pass: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(pass);
    await this.submitButton.click();
  }

  async getToastMessage(): Promise<string> {
    await this.toastElement.waitFor({ state: "visible", timeout: 5000 });
    return (await this.toastElement.textContent()) || "";
  }

  async logout() {
    await this.logoutButton.click();
  }
}
