import { test, expect } from "@playwright/test";

test.describe("LetCode Basics - Practice Sandboxes", () => {
  
  test("1. Input Fields Practice (/edit)", async ({ page }) => {
    await page.goto("/edit");

    // Enter full Name
    const fullNameInput = page.locator("#fullName");
    await fullNameInput.fill("John Doe");
    await expect(fullNameInput).toHaveValue("John Doe");

    // Append a text and press keyboard tab
    const joinInput = page.locator("#join");
    await joinInput.focus();
    // Move cursor to end before typing
    await joinInput.press("End");
    await joinInput.type(" and coding");
    await joinInput.press("Tab");
    await expect(joinInput).toHaveValue("I am good and coding");

    // Read the value inside the text box
    const getMeInput = page.locator("#getMe");
    const val = await getMeInput.inputValue();
    expect(val).toBe("ortonikc");

    // Clear the text
    const clearMeInput = page.locator("#clearMe");
    await clearMeInput.clear();
    await expect(clearMeInput).toHaveValue("");

    // Confirm edit field is disabled
    const noEditInput = page.locator("#noEdit");
    await expect(noEditInput).toBeDisabled();

    // Confirm text is readonly
    const readOnlyInput = page.locator("#dontwrite");
    await expect(readOnlyInput).toHaveAttribute("readonly");
    await expect(readOnlyInput).toHaveValue("This text is readonly");
  });

  test("2. Buttons Practice (/button)", async ({ page }) => {
    await page.goto("/button");

    // Get the X & Y co-ordinates of Find Location button
    const positionBtn = page.locator("#position");
    const box = await positionBtn.boundingBox();
    expect(box).not.toBeNull();
    expect(box?.x).toBeGreaterThan(0);
    expect(box?.y).toBeGreaterThan(0);

    // Find the color of the button
    const colorBtn = page.locator("#color");
    const colorStyle = await colorBtn.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    // Color should be RGB representation of CSS colors (e.g. teal-600 is #0d9488 / rgb(13, 148, 136))
    expect(colorStyle).toContain("rgb");

    // Find the height & width of the button
    const propertyBtn = page.locator("#property");
    const propBox = await propertyBtn.boundingBox();
    expect(propBox?.width).toBeGreaterThan(0);
    expect(propBox?.height).toBeGreaterThan(0);

    // Confirm button is disabled
    const disabledBtn = page.locator("#isDisabled").first(); // Target first one which is disabled
    await expect(disabledBtn).toBeDisabled();

    // Go to home and come back
    const homeLink = page.locator("#home");
    await homeLink.click();
    await expect(page).toHaveURL("/");
    await page.goBack();
    await expect(page).toHaveURL("/button");
  });

  test("3. Dropdowns Practice (/dropdowns)", async ({ page }) => {
    await page.goto("/dropdowns");

    // Select the apple using visible text (label)
    const fruitSelect = page.locator("#fruits");
    await fruitSelect.selectOption({ label: "Apple" });
    const fruitMsg = page.locator("text=You have selected Apple");
    await expect(fruitMsg).toBeVisible();

    // Select multiple superheros
    const heroSelect = page.locator("#superheros");
    await heroSelect.selectOption([
      { value: "aq" }, // Aquaman
      { value: "ca" }, // Captain America
      { value: "im" }  // Iron Man
    ]);
    const heroMsg = page.locator("text=You have selected").filter({ hasText: "Aquaman" });
    await expect(heroMsg).toBeVisible();
    await expect(heroMsg).toContainText("Aquaman");
    await expect(heroMsg).toContainText("Captain America");
    await expect(heroMsg).toContainText("Iron Man");

    // Select programming language (e.g., C# via value or index)
    const langSelect = page.locator("#lang");
    await langSelect.selectOption({ value: "sharp" }); // C#
    const langMsg = page.locator("text=You have selected").filter({ hasText: "C#" });
    await expect(langMsg).toBeVisible();
  });

  test("4. Alerts Practice (/alert)", async ({ page }) => {
    await page.goto("/alert");

    // 1. Accept simple alert
    page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("Hey! Welcome to LetCode");
      await dialog.accept();
    });
    await page.locator("#accept").click();

    // 2. Dismiss confirm alert and print text
    page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("Are you happy with LetCode?");
      await dialog.dismiss();
    });
    await page.locator("#confirm").click();
    // Confirm confirmation state log is shown
    await expect(page.locator("text=User selected: Cancel (False)")).toBeVisible();

    // 3. Prompt alert: enter name & accept
    const testName = "Jane Doe";
    page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("Enter your name");
      await dialog.accept(testName);
    });
    await page.locator("#prompt").click();
    // Confirm name is reflected
    await expect(page.locator("#myName")).toHaveText(`Your name is: ${testName}`);
  });

});
