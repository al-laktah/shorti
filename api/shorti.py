from cors import _build_cors_preflight_response as bcpr
from cors import _corsify_actual_response as car
from flask import Flask, jsonify, redirect, request
from shortner import shorten, valid
from flask_cors import CORS
from db import get_url, get_clicks, exists, init
from config import SHORTI_DOMAIN

app = Flask(__name__)
cors = CORS(app)
init()


@app.route('/')
def landing():
    return redirect('http://' + SHORTI_DOMAIN)


@app.route('/api/shortener/', methods=['POST', 'OPTIONS'])
def shortner():
    if request.method == 'OPTIONS':
        return bcpr()
    elif request.method == 'POST':
        urldata = request.get_json(force=True)
        if not urldata:
            return car(jsonify('invalid-data-format')), 400
        else:
            url = urldata['url']
        if valid(url):
            shorti = shorten(url)
            return car(jsonify(shorti)), 201
        else:
            return car(jsonify('invalid-url')), 400
    else:
        return car(jsonify('unkown-error')), 400


@app.route('/api/url/<shorti>', methods=['GET', 'OPTIONS'])
def redir(shorti):
    if request.method == 'OPTIONS':
        return bcpr()
    elif request.method == 'GET':
        url = get_url(shorti)
        if not url:
            return car(jsonify('invalid-url')), 400
        else:
            if url.startswith("http"):
                return car(jsonify(url)), 200
            else:
                return car(jsonify('http://' + url)), 200
    else:
        return car(jsonify('unkown-error')), 400


@app.route('/api/clicks/', methods=['POST', 'OPTIONS'])
def clicks():
    if request.method == 'OPTIONS':
        return bcpr()
    elif request.method == 'POST':
        shortidata = request.get_json(force=True)
        if not shortidata:
            return car(jsonify('invalid-data-format')), 400
        elif valid(shortidata['shorti']):
            # last part of the path, works for any domain and trailing slashes
            shorti = shortidata['shorti'].rstrip('/').split('/')[-1]
        else:
            return car(jsonify('invalid-url')), 400

        if exists(shorti):
            return car(jsonify(get_clicks(shorti))), 201
        else:
            return car(jsonify('invalid-shorti')), 400
    else:
        return car(jsonify('unkown-error')), 400


if __name__ == '__main__':
    app.run(debug=False, port=4444)
