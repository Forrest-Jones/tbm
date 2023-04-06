from app import app, db
from models import User, Organization, Donation, SuccessStory

with app.app_context():
    # Delete existing data
    print("Deleting data...")
    Donation.query.delete()
    SuccessStory.query.delete()
    Organization.query.delete()
    User.query.delete()

    # Create users
    print("Creating users...")
    user1 = User(username='user1', email='user1@example.com', password='password1')
    user2 = User(username='user2', email='user2@example.com', password='password2')
    user3 = User(username='user3', email='user3@example.com', password='password3')
    users = [user1, user2, user3]

    # Create organizations
    print("Creating organizations...")
    org1 = Organization(name='Org1', description='Description for Org1')
    org2 = Organization(name='Org2', description='Description for Org2')
    org3 = Organization(name='Org3', description='Description for Org3')
    organizations = [org1, org2, org3]

    db.session.add_all(users)
    db.session.commit()

    db.session.add_all(organizations)
    db.session.commit()

    print("Creating donations...")
    donation1 = Donation(user_id=user1.id, organization_id=org1.id, amount=50.00, frequency='monthly', payment_info='credit card')
    donation2 = Donation(user_id=user2.id, organization_id=org2.id, amount=25.00, frequency='one-time', payment_info='paypal')
    donation3 = Donation(user_id=user3.id, organization_id=org3.id, amount=100.00, frequency='monthly', payment_info='bank transfer')
    donations = [donation1, donation2, donation3]

    # Create success stories
    print("Creating success stories...")
    story1 = SuccessStory(organization_id=org1.id, title='Story1', description='Description for Story1')
    story2 = SuccessStory(organization_id=org2.id, title='Story2', description='Description for Story2')
    story3 = SuccessStory(organization_id=org3.id, title='Story3', description='Description for Story3')
    stories = [story1, story2, story3]

    db.session.add_all(donations)
    db.session.add_all(stories)
    db.session.commit()

    print("Seeding done!")
