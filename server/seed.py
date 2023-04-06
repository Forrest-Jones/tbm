from app import app, db
from faker import Faker
from models import User, Organization, Donation, SuccessStory

fake = Faker()

with app.app_context():
    # Delete existing data
    print("Deleting data...")
    Donation.query.delete()
    SuccessStory.query.delete()
    Organization.query.delete()
    User.query.delete()

    # Create users
    print("Creating users...")
    users = []
    for i in range(10): # create 10 fake users
        user = User(username=fake.user_name(), email=fake.email(), password='password')
        users.append(user)
    db.session.add_all(users)
    db.session.commit()

    # Create organizations
    print("Creating organizations...")
    organizations = []
    for i in range(5): # create 5 fake organizations
        org = Organization(name=fake.company(), logo=fake.image_url(), tagline=fake.catch_phrase(), goals=fake.text(max_nb_chars=200), achievements=fake.text(max_nb_chars=200), financial_needs=fake.text(max_nb_chars=200), description=fake.text(max_nb_chars=200))
        organizations.append(org)
    db.session.add_all(organizations)
    db.session.commit()

    # Create donations
    print("Creating donations...")
    donations = []
    for i in range(20): # create 20 fake donations
        donation = Donation(user_id=fake.random_element(users).id, organization_id=fake.random_element(organizations).id, amount=fake.random_number(digits=3), frequency=fake.random_element(elements=('monthly', 'one-time', 'weekly')), payment_info=fake.credit_card_number())
        donations.append(donation)
    db.session.add_all(donations)
    db.session.commit()

    # Create success stories
    print("Creating success stories...")
    stories = []
    for i in range(5): # create 5 fake success stories
        story = SuccessStory(organization_id=fake.random_element(organizations).id, title=fake.sentence(), description=fake.paragraph())
        stories.append(story)
    db.session.add_all(stories)
    db.session.commit()

    print("Seeding done!")
