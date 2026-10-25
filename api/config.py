import os

# The domain short URLs are generated under, e.g. shorti.al-laktah.com/AbC12
# Change it here, or override it with the SHORTI_DOMAIN environment variable.
SHORTI_DOMAIN = os.environ.get('SHORTI_DOMAIN') or 'shorti.al-laktah.com'
