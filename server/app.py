from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from flask_restful import Api, Resource

from models import db, User, Donation, Organization, SuccessStory

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route('/users')
def get_users():
    users = User.query.all()
    results = []

    for user in users:
        user_data = {
            'id': user.id,
            'username': user.username,
            'email': user.email
        }
        results.append(user_data)

    return jsonify(results)

@app.route('/users/<int:id>', methods=['GET', 'DELETE'])
def user_by_id(id):
    user = User.query.get(id)

    if user:
        if request.method == 'GET':
            user_dict = user.to_dict()

            response = make_response(
                jsonify(user_dict),
                200
            )
        elif request.method == 'DELETE':
            db.session.delete(user)
            db.session.commit()

            response = make_response(
                {},
                200
            )
    else:
        response = make_response(
            {"error": "User not found"},
            404
        )

    return response

if __name__ == '__main__':
    app.run(debug=True)
