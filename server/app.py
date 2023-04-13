from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from models import db, User, Donation, Organization, SuccessStory

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route("/")
def index():
    return "Hello, world!"

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

@app.route('/users/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def user_by_id(id):
    user = User.query.get(id)

    if not user:
        return make_response(
            jsonify({'error': 'User not found'}),
            404
        )

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

    elif request.method == 'PATCH':
        data = request.get_json()
        if not data:
            return make_response(
                jsonify({'error': 'No user data provided'}),
                400
            )

        username = data.get('username')
        email = data.get('email')

        if username:
            user.username = username

        if email:
            user.email = email

        db.session.commit()

        response = make_response(
            jsonify({'message': 'User updated successfully'}),
            200
        )

    return response

@app.route('/organizations', methods=['GET', 'POST'])
def organizations():
    if request.method == 'GET':
        organizations = Organization.query.all()
        results = []

        for organization in organizations:
            organization_data = {
                'id': organization.id,
                'name': organization.name,
                'tagline': organization.tagline,
                'logo': organization.logo,
                'description': organization.description
            }
            results.append(organization_data)

        return jsonify(results)

    elif request.method == 'POST':
        organization_data = request.get_json()
        if not organization_data:
            return make_response(
                jsonify({'error': 'No organization data provided'}),
                400
            )

        name = organization_data.get('name')
        tagline = organization_data.get('tagline')
        logo = organization_data.get('logo')
        description = organization_data.get('description')

        if not name:
            return make_response(
                jsonify({'error': 'Organization name is required'}),
                400
            )

        organization = Organization(name=name, tagline=tagline, logo=logo, description=description)

        try:
            db.session.add(organization)
            db.session.commit()
            print("New organization added to the database!")
        except Exception as e:
            print(e)
            db.session.rollback()
            return make_response(
                jsonify({'error': 'Failed to add new organization to the database'}),
                500
            )
        finally:
            
            pass

        return make_response(
            jsonify({
                'id': organization.id,
                'name': organization.name,
                'tagline': organization.tagline,
                'logo': organization.logo,
                'description': organization.description
            }),
            201
        )
    else:
        return make_response(
            jsonify({'error': 'Invalid request method'}),
            405
        )

@app.route('/organizations/<int:id>', methods=['GET', 'DELETE', 'PATCH'])
def organization_by_id(id):
    organization = Organization.query.get(id)

    if organization:
        if request.method == 'GET':
            organization_dict = {
                'id': organization.id,
                'name': organization.name,
                'tagline': organization.tagline,
                'logo': organization.logo,
                'description': organization.description
            }

            response = make_response(
                jsonify(organization_dict),
                200
            )
        elif request.method == 'DELETE':
            db.session.delete(organization)
            db.session.commit()

            response = make_response(
                {},
                200
            )
        elif request.method == 'PATCH':
            organization_data = request.get_json()
            if not organization_data:
                return make_response(
                    jsonify({'error': 'No organization data provided'}),
                    400
                )

            name = organization_data.get('name', organization.name)
            tagline = organization_data.get('tagline', organization.tagline)
            logo = organization_data.get('logo', organization.logo)
            description = organization_data.get('description', organization.description)

            organization.name = name
            organization.tagline = tagline
            organization.logo = logo
            organization.description = description

            db.session.commit()

            organization_dict = {
                'id': organization.id,
                'name': organization.name,
                'tagline': organization.tagline,
                'logo': organization.logo,
                'description': organization.description
            }

            response = make_response(
                jsonify(organization_dict),
                200
            )
    else:
        response = make_response(
            jsonify({"error": "Organization not found"}),
            404
        )

    return response

if __name__ == '__main__':
    app.run(debug=True)
