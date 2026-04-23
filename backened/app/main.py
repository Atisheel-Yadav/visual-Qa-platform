# from app.scraper import capture_website
from app.ai_analyzer import analyze_with_gemini
import asyncio
from app.scraper import capture_website_sync
from app.models import URLRequest
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import base64

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Visual QA Backend is running 🚀"}

# @app.post("/analyze")
# async def analyze_website(request: URLRequest):
#     # result = await capture_website(request.url)
#     # result = capture_website_sync(request.url)
#     result = await asyncio.to_thread(capture_website_sync, request.url)

#     return {
#         "message": "Website analyzed successfully",
#         "screenshot_path": result["screenshot_path"],
#         "html_length": len(result["html"])
#     }
# @app.post("/analyze")
# async def analyze_website(request: URLRequest):
#     result = await asyncio.to_thread(capture_website_sync, request.url)

#     ai_response = analyze_with_gemini(
#         result["html"],
#         result["screenshot_path"]
#     )

#     # return {
#     #     "message": "Analysis complete",
#     #     "ai_response": ai_response,
#     #     "screenshot_path": result["screenshot_path"]
#     # }
#     return {
#         "message": "Analysis complete",
#         "report": ai_response,
#         "screenshot_path": result["screenshot_path"]
#     }
@app.post("/analyze")
async def analyze_website(request: URLRequest):
    # Step 1: Capture website (Playwright)
    result = await asyncio.to_thread(capture_website_sync, request.url)

    # Step 2: AI Analysis
    ai_response = analyze_with_gemini(
        result["html"],
        result["screenshot_path"]
    )

    # Step 3: Convert image to base64
    with open(result["screenshot_path"], "rb") as img:
        encoded = base64.b64encode(img.read()).decode("utf-8")

    # Step 4: Return everything
    return {
        "message": "Analysis complete",
        "report": ai_response,
        "screenshot": encoded
    }