# Shorti

<p align="center">
    <a>
        <img src="https://img.shields.io/:license-mit-green.svg?style=flat" />
    </a>
    <a>
        <img src="https://img.shields.io/badge/Made%20with-Python-1f425f.svg" />
    </a>
</p>


## Description:

A web app to shorten URLs, a deployed version can be seen [here](https://shorti.al-laktah.com).
The Frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The Backend was created using Flask.

## Running locally:

The frontend and the API are started separately. The React dev server forwards `/api/` requests to Flask on port 4444.

```sh
# API
cd api
python3 -m venv venv
venv/bin/pip install -r requirements.txt
cd ..
yarn start-api

# Frontend (in a second terminal)
yarn install
yarn start
```

## Changing the domain:

The domain short URLs are generated under is set in one place, [`api/config.py`](api/config.py).
It can also be overridden with the `SHORTI_DOMAIN` environment variable without touching the code:

```sh
SHORTI_DOMAIN=localhost:3000 yarn start-api
```

The frontend has no domain baked in, it talks to the API on whatever domain it is served from.

## Deployment:

Both parts are served from the same domain:

- `/api/` goes to the Flask app (`cd api && venv/bin/python shorti.py`, listens on port 4444)
- everything else goes to the frontend build (`docker build -t shorti . && docker run -p 5000:5000 shorti`, or `yarn build && yarn deploy`), which also handles the short URLs themselves

## Todo:
  ### `-Migrate DB from Sqlite`
  ### `-Add Dark mode`
  ### `-Add Privacy and Terms`
  ### `-Improve shortning alogrithm`
