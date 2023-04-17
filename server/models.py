from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
import re 

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    donations = db.relationship('Donation', backref='donor', lazy=True)

    serialize_only = ('id', 'username', 'email')

    @validates('username')
    def validate_username(self, key, username):
        if len(username) < 3:
            raise ValueError("Username must be at least 3 characters long.")
        return username

    @validates('email')
    def validate_email(self, key, email):
        email_pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        if not re.match(email_pattern, email):
            raise ValueError("Invalid email address.")
        return email

user_org_association = db.Table('user_org_association',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('org_id', db.Integer, db.ForeignKey('organization.id'), primary_key=True)
)

class Organization(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    # In the Organization model
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    name = db.Column(db.String(50), nullable=False)
    logo = db.Column(db.String(120), nullable=True)
    tagline = db.Column(db.String(80), nullable=True)
    goals = db.Column(db.String(255), nullable=True)
    achievements = db.Column(db.String(255), nullable=True)
    financial_needs = db.Column(db.String(255), nullable=True)
    description = db.Column(db.String(255), nullable=True)
    success_stories = db.relationship('SuccessStory', backref='organization', lazy=True)

    serialize_only = ('id', 'name', 'logo', 'tagline', 'goals', 'achievements', 'financial_needs', 'description')

class Donation(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    organization_id = db.Column(db.Integer, db.ForeignKey('organization.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    frequency = db.Column(db.String(20), nullable=False)
    payment_info = db.Column(db.String(80), nullable=False)

    serialize_only = ('id', 'user_id', 'organization_id', 'amount', 'frequency', 'payment_info')

class SuccessStory(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    organization_id = db.Column(db.Integer, db.ForeignKey('organization.id'), nullable=False)
    title = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(255), nullable=False)

    serialize_only = ('id', 'organization_id', 'title', 'description')
