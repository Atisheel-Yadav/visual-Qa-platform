# import os
# import base64
# import google.generativeai as genai
# from dotenv import load_dotenv

# load_dotenv()

# genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# def encode_image(image_path):
#     with open(image_path, "rb") as f:
#         return base64.b64encode(f.read()).decode("utf-8")


# def analyze_with_gemini(html, screenshot_path):
#     # model = genai.GenerativeModel("gemini-1.5-flash")
#     # model = genai.GenerativeModel("gemini-1.5-flash-latest")
#     model = genai.GenerativeModel("gemini-pro")

#     image_base64 = encode_image(screenshot_path)

#     prompt = f"""
# You are an expert UI/UX auditor.

# Analyze the given website HTML and screenshot.

# STRICTLY return ONLY valid JSON in this format:

# {{
#   "ui_score": number (0-100),
#   "accessibility_score": number (0-100),
#   "issues": [
#     {{
#       "issue_title": "...",
#       "description": "...",
#       "category": "Layout | Accessibility | Responsiveness",
#       "suggested_css_fix": "...",
#       "bounding_box": {{
#         "top": percentage (0-100),
#         "left": percentage (0-100),
#         "width": percentage (0-100),
#         "height": percentage (0-100)
#       }}
#     }}
#   ]
# }}

# Do NOT return explanation.
# Do NOT return markdown.
# ONLY JSON.

# HTML:
# {html[:8000]}
# """

#     response = model.generate_content([
#         {"text": prompt},
#         {
#             "inline_data": {
#                 "mime_type": "image/png",
#                 "data": image_base64
#             }
#         }
#     ])

#     return response.text
# def analyze_with_gemini(html, screenshot_path):
#     # model = genai.GenerativeModel("gemini-pro")
#     # model = genai.GenerativeModel("gemini-1.5-flash")
#     model = genai.GenerativeModel("gemini-2.5-flash")

#     prompt = f"""
# You are an expert UI/UX auditor.

# STRICTLY return ONLY valid JSON:

# {{
#   "ui_score": number,
#   "accessibility_score": number,
#   "issues": [
#     {{
#       "issue_title": "...",
#       "description": "...",
#       "category": "Layout | Accessibility | Responsiveness",
#       "suggested_css_fix": "...",
#       "bounding_box": {{
#         "top": number,
#         "left": number,
#         "width": number,
#         "height": number
#       }}
#     }}
#   ]
# }}

# HTML:
# {html[:8000]}
# """

#     response = model.generate_content(prompt)

#     return response.text
# import json
# import os
# import base64
# import google.generativeai as genai
# from dotenv import load_dotenv

# load_dotenv()

# genai.configure(api_key=os.getenv("GEMINI_API_KEY"))


# def encode_image(image_path):
#     with open(image_path, "rb") as f:
#         return base64.b64encode(f.read()).decode("utf-8")


# def analyze_with_gemini(html, screenshot_path):
#     model = genai.GenerativeModel("gemini-2.5-flash")

#     image_base64 = encode_image(screenshot_path)

#     prompt = f"""
# You are an expert UI/UX auditor.

# Analyze the given website HTML and screenshot.

# STRICTLY return ONLY valid JSON in this format:

# {{
#   "ui_score": number (0-100),
#   "accessibility_score": number (0-100),
#   "issues": [
#     {{
#       "issue_title": "...",
#       "description": "...",
#       "category": "Layout | Accessibility | Responsiveness",
#       "suggested_css_fix": "...",
#       "bounding_box": {{
#         "top": percentage (0-100),
#         "left": percentage (0-100),
#         "width": percentage (0-100),
#         "height": percentage (0-100)
#       }}
#     }}
#   ]
# }}

# DO NOT return explanation.
# DO NOT return markdown.
# ONLY JSON.

# HTML:
# {html[:8000]}
# """

#     response = model.generate_content([
#         prompt,
#         {
#             "mime_type": "image/png",
#             "data": image_base64
#         }
#     ])

#     return response.text
import os
import base64
import json
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))


def encode_image(image_path):
    with open(image_path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")


def analyze_with_gemini(html, screenshot_path):
    # Use latest working multimodal model
    model = genai.GenerativeModel("gemini-2.5-flash")

    image_base64 = encode_image(screenshot_path)

    prompt = f"""
You are an expert UI/UX auditor.

Analyze the given website HTML and screenshot.

STRICTLY return ONLY valid JSON in this format:

{{
  "ui_score": number (0-100),
  "accessibility_score": number (0-100),
  "issues": [
    {{
      "issue_title": "...",
      "description": "...",
      "category": "Layout | Accessibility | Responsiveness",
      "suggested_css_fix": "...",
      "bounding_box": {{
        "top": percentage (0-100),
        "left": percentage (0-100),
        "width": percentage (0-100),
        "height": percentage (0-100)
      }}
    }}
  ]
}}

DO NOT return explanation.
DO NOT return markdown.
ONLY JSON.

HTML:
{html[:8000]}
"""

    try:
        response = model.generate_content([
            prompt,
            {
                "mime_type": "image/png",
                "data": image_base64
            }
        ])

        raw_text = response.text.strip()

        # 🔥 CLEAN MARKDOWN (```json ... ```)
        if raw_text.startswith("```"):
            raw_text = raw_text.replace("```json", "").replace("```", "").strip()

        # 🔥 PARSE JSON
        parsed_json = json.loads(raw_text)

        return parsed_json

    except Exception as e:
        print("Gemini Error:", str(e))

        return {
            "error": "AI processing failed",
            "details": str(e)
        }