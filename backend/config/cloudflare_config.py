import boto3
import os

cloudflare = boto3.client(
    's3',
    endpoint_url=f"https://{os.getenv('CLOUDFLARE_ACCOUNT_ID')}.r2.cloudflarestorage.com",
    aws_access_key_id=os.getenv('CLOUDFLARE_API_TOKEN'),
    aws_secret_access_key=os.getenv('CLOUDFLARE_API_TOKEN')
)

BUCKET_NAME = os.getenv("CLOUDFLARE_BUCKET_NAME")
