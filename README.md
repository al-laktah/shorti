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

- With Docker: put `SHORTI_DOMAIN=example.com` in a `.env` file next to `docker-compose.yml`, run `docker compose up -d` and change the domain in the proxy's site block (see below).
- Running locally: `SHORTI_DOMAIN=localhost:3000 yarn start-api`, without it the default from [`api/config.py`](api/config.py) is used.

## Deployment:

Shorti runs with Docker Compose behind a shared [Caddy](https://caddyserver.com) proxy that takes care of HTTPS, so other services can run on the same server.
Inside, a second Caddy serves the frontend and forwards `/api/` to the Flask app.
The proxy has to be on a Docker network called `web` and send the domain to `shorti:80`:

```
shorti.al-laktah.com {
	reverse_proxy shorti:80
}
```

Then, with the domain's DNS pointing at the server, run:

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
