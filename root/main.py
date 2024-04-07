# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

from firebase_functions import https_fn, firestore_fn
from firebase_admin import initialize_app, firestore
from google.cloud import firestore
import firebase_admin
import google.cloud.firestore

app = initialize_app()


@https_fn.on_request()
def get_fountain(req: https_fn.Request) -> https_fn.Response: 
    fountain_id = req.args.get('fountain_id')
    if not fountain_id:
        return https_fn.Response("No fountain id provided", status = 400)
    
    # Initialize Firestore client with a specific project
    db = firestore.Client(project="bubbler")
    
    # Reference to the fountains collection
    collection_reference = db.collection("fountains")
    
    # Retrieve the document corresponding to the fountain ID
    fountain_document = collection_reference.document(fountain_id).get()

    # Check if the document exists
    if fountain_document.exists:
        # Extract specific fields from the document
        fountain_info = {
            'Location': fountain_document.get('location'),
            'Rating': fountain_document.get('rating'),
            'Status': fountain_document.get('status'),
            'Votes': fountain_document.get('votes')
        }
        return https_fn.Response(fountain_info)
    else:
        return https_fn.Response(f"Fountain with ID {fountain_id} not found", status = 404)
    

@https_fn.on_request()
def set_rating_count(req: https_fn.Request):
    val = req.args.get('rating')
    fountain_id = req.args.get('fountain_id')
    if not val or not fountain_id:
        return https_fn.Response("No rating was sent in.", status = 400)
    
    db = firestore.Client(project="bubbler")
    collection_reference = db.collection('fountains')
    
    fountain_document = collection_reference.document(fountain_id).get()

    if not fountain_document.exists:
        return https_fn.Response(f"fountain with ID {fountain_id} was not found", status = 404)
    
    count = fountain_document.get('votes')
    rating = fountain_document.get('rating')
    
    new_count = count + 1
    new_rating = (val + rating) / new_count

    collection_reference.document(fountain_id).update({"votes": new_count})
    collection_reference.document(fountain_id).update({"rating": new_rating})


@https_fn.on_request()
def set_quality(req: https_fn.Request):
    fountain_id = req.args.get('fountain_id')
    new_status = req.args.get('status')
    if not fountain_id:
        return https_fn.Response("No fountain ID was sent in.", status = 400)
    
    db = firestore.Client(project="bubbler")
    collection_reference = db.collection('fountains')
    
    fountain_document = collection_reference.document(fountain_id).get()

    if not fountain_document.exists:
        return https_fn.Response(f"fountain with ID {fountain_id} was not found", status = 404)

    collection_reference.document(fountain_id).update({"status": new_status})


@https_fn.on_request()
def addFountain(request):
    db = firestore.Client(project="bubbler")
    collection_reference = db.collection('fountains')
   
    data = request.get_json()
    
    id = data.get('id')
    location = data.get('location')
    status = data.get('status')
    rating = data.get('rating')

    doc_data = {
        'id': id,
        'location': location,
        'status': status,
        'rating': rating,
        'votes': 1
    }

    collection_reference.add(doc_data)
    