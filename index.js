import { chromium } from "playwright";

async function main() {
  // Launch a new instance of a Chromium browser with headless mode
  // disabled for visibility
  const browser = await chromium.launch({
    headless: false,
  });

  // Create a new Playwright context to isolate browsing session
  const context = await browser.newContext();
  // Open a new page/tab within the context
  const page = await context.newPage();

  // Navigate to the GitHub topics homepage
  await page.goto(
    "<https://ignacio-velasquez.notion.site/2-500-ChatGPT-Prompt-Templates-d9541e901b2b4e8f800e819bdc0256da>"
  );

  // Wait for 1 second to ensure page content loads properly
  await page.waitForTimeout(1000);

  // Close the browser instance after task completion
  await browser.close();
}

// Execute the main function
main();
