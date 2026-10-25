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

The frontend has no domain baked in, it talks to the API on whatever domain it is served from.
The domain short URLs are generated under comes from the `SHORTI_DOMAIN` environment variable:

- With Docker: put `SHORTI_DOMAIN=example.com` in a `.env` file next to `docker-compose.yml` and run `docker compose up -d`. Caddy gets a certificate for the new domain by itself.
- Running locally: `SHORTI_DOMAIN=localhost:3000 yarn start-api`, without it the default from [`api/config.py`](api/config.py) is used.

## Deployment:

Everything runs with Docker Compose. [Caddy](https://caddyserver.com) serves the frontend, forwards `/api/` to the Flask app and takes care of HTTPS.
Point the domain's DNS at the server, make sure ports 80 and 443 are open, then run:

```sh
docker compose up -d --build
```

Run the same command again after pulling new changes. The links are kept in the `shorti-data` volume, a copy of the database can be taken with:

```sh
docker compose cp api:/data/andy.db ./andy.db
```

## Todo:
  ### `-Migrate DB from Sqlite`
  ### `-Add Dark mode`
  ### `-Add Privacy and Terms`
  ### `-Improve shortning alogrithm`
