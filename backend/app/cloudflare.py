import requests
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)

# Environment Variables
CLOUDFLARE_API_TOKEN = os.getenv("CLOUDFLARE_API_TOKEN")
CLOUDFLARE_IMAGE_ENDPOINT = os.getenv("CLOUDFLARE_IMAGE_ENDPOINT")

# Ensure required environment variables are set
if not CLOUDFLARE_API_TOKEN or not CLOUDFLARE_IMAGE_ENDPOINT:
    raise ValueError("Cloudflare API token or image endpoint is missing. Check your .env file.")

def upload_image(image_file):
    """Uploads an image to Cloudflare and returns the URL."""
    headers = {
        "Authorization": f"Bearer {CLOUDFLARE_API_TOKEN}"
    }

    try:
        files = {"file": image_file}
        response = requests.post(
            CLOUDFLARE_IMAGE_ENDPOINT,
            headers=headers,
            files=files
        )

        if response.status_code == 200:
            image_url = response.json().get("result", {}).get("url")
            if image_url:
                logging.info(f"✅ Image uploaded successfully: {image_url}")
                return image_url
            else:
                raise Exception("Image URL not found in response.")
        else:
            logging.error(f"❌ Image upload failed. Status code: {response.status_code}")
            logging.error(f"Response: {response.text}")
            raise Exception("Failed to upload image to Cloudflare.")

    except requests.exceptions.RequestException as e:
        logging.error(f"❗ Network error occurred: {e}")
        raise Exception("Network error occurred while uploading the image.")
