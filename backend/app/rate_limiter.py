from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

def configure_rate_limiter(app):
    limiter = Limiter(
        get_remote_address,
        app=app,
        default_limits=["100 per hour"]
    )
    return limiter
