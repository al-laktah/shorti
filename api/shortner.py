import uuid
import hashlib
import validators
from random import randint, choice
from db import exists, save
from config import SHORTI_DOMAIN


def hash_url(url):
    salt = uuid.uuid4().hex
    return hashlib.sha256(salt.encode() + url.encode()).hexdigest() + ':' + salt


def check_hash(hashed_url, url):
    password, salt = hashed_url.split(':')
    return password == hashlib.sha256(salt.encode() + url.encode()).hexdigest()


def shorten_url(hashed_url):
    i = 5  # randint(5,6)
    j = i
    n = 0
    # randomcap before checking, lookups are case sensitive
    short_url = randomcap(hashed_url[n:i])

    while(exists(short_url)):
        j += i
        n += i
        if j > len(hashed_url):
            return short_url
        short_url = randomcap(hashed_url[n:j])
    return short_url


def randomcap(short_url):
    return (''.join(choice((str.upper, str.lower))(c) for c in short_url))


def shorten(url):
    if '://' not in url:
        url = 'http://' + url
    hashed_url = hash_url(url)
    short_url = shorten_url(hashed_url)
    save(short_url, url, hashed_url)
    return (SHORTI_DOMAIN + "/" + short_url)


def valid(url):
    if '://' not in url:
        url = 'http://' + url
    if validators.domain(url) or validators.url(url):
        return True
    else:
        return False
