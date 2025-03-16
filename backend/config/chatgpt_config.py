import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_image_description(image_url):
    prompt = f"Describe the content and details of this image: {image_url}"
    
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4-vision-preview",  # Best for image-related tasks
            messages=[
                {"role": "system", "content": "You are a helpful image description assistant."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=150
        )
        return response.choices[0].message['content'].strip()
    
    except Exception as e:
        return f"Error generating description: {str(e)}"
