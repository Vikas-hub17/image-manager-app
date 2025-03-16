import boto3
from botocore.client import Config
import os

# Cloudflare R2 Configuration
ACCESS_KEY = os.getenv('CLOUDFLARE_ACCESS_KEY')
SECRET_KEY = os.getenv('CLOUDFLARE_SECRET_KEY')
ACCOUNT_ID = os.getenv('CLOUDFLARE_ACCOUNT_ID')
BUCKET_NAME = os.getenv('CLOUDFLARE_BUCKET_NAME')
REGION = os.getenv('CLOUDFLARE_REGION')

# Initialize S3 Client for Cloudflare R2
s3_client = boto3.client(
    's3',
    endpoint_url=f'https://{ACCOUNT_ID}.r2.cloudflarestorage.com',
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
    config=Config(signature_version='s3v4'),
    region_name=REGION
)

def upload_image(file, file_name):
    """Upload image to Cloudflare R2"""
    s3_client.upload_fileobj(file, BUCKET_NAME, file_name)
    return f"https://{ACCOUNT_ID}.r2.cloudflarestorage.com/{BUCKET_NAME}/{file_name}"

def get_image_url(file_name):
    """Generate public URL for an image in Cloudflare R2"""
    return f"https://{ACCOUNT_ID}.r2.cloudflarestorage.com/{BUCKET_NAME}/{file_name}"
