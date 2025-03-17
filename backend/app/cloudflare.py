import requests
import os

CLOUDFLARE_API_TOKEN = os.getenv("CLOUDFLARE_API_TOKEN")
CLOUDFLARE_IMAGE_ENDPOINT = os.getenv("CLOUDFLARE_IMAGE_ENDPOINT")

def upload_image(image_file):
    headers = {
        "Authorization": f"Bearer {CLOUDFLARE_API_TOKEN}"
    }

    files = {"file": image_file}

    response = requests.post(
        CLOUDFLARE_IMAGE_ENDPOINT,
        headers=headers,
        files=files
    )

    if response.status_code == 200:
        return response.json().get("result", {}).get("url")
    else:
        raise Exception("Failed to upload image to Cloudflare.")
