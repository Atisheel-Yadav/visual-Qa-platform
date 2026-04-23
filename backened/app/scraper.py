# import os
# import asyncio
# from playwright.async_api import async_playwright

# SCREENSHOT_DIR = "screenshots"

# async def capture_website(url: str):
#     # Ensure screenshots folder exists
#     if not os.path.exists(SCREENSHOT_DIR):
#         os.makedirs(SCREENSHOT_DIR)

#     screenshot_path = os.path.join(SCREENSHOT_DIR, "screenshot.png")

#     async with async_playwright() as p:
#         browser = await p.chromium.launch(headless=True)
#         page = await browser.new_page()

#         # Open URL
#         await page.goto(url, timeout=60000)

#         # Wait for page to load
#         await page.wait_for_load_state("networkidle")

#         # Take full-page screenshot
#         await page.screenshot(path=screenshot_path, full_page=True)

#         # Get HTML content
#         html_content = await page.content()

#         await browser.close()

#     return {
#         "screenshot_path": screenshot_path,
#         "html": html_content
#     }

import os
from playwright.sync_api import sync_playwright

SCREENSHOT_DIR = os.path.join(os.getcwd(), "screenshots")

def capture_website_sync(url: str):
    if not os.path.exists(SCREENSHOT_DIR):
        os.makedirs(SCREENSHOT_DIR)

    screenshot_path = os.path.join(SCREENSHOT_DIR, "screenshot.png")

    with sync_playwright() as p:
       # browser = p.chromium.launch(headless=True)
        browser = p.chromium.launch(
            headless=True,
            args=["--no-sandbox", "--disable-dev-shm-usage"]
)
        page = browser.new_page()

        print("Opening URL:", url)

        page.goto(url, timeout=60000)
        page.wait_for_load_state("networkidle")

        page.screenshot(path=screenshot_path, full_page=True)

        html_content = page.content()

        browser.close()

    return {
        "screenshot_path": screenshot_path,
        "html": html_content
    }