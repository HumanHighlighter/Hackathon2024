import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, getDocs, collection } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: 'AIzaSyBDHcXBRyKMr4bTzLIERI8l5eBpei9qSKo',
    authDomain: 'bubbler-wildhacks.firebaseapp.com',
    databaseURL: 'https://bubbler-wildhacks-default-rtdb.firebaseio.com',
    projectId: 'bubbler-wildhacks',
    storageBucket: 'bubbler-wildhacks.appspot.com',
    messagingSenderId: '198886793750',
    appId: '1:198886793750:web:3ec5aa56c1f2d13159cb37'
});

const firestore = getFirestore(firebaseApp);
const fountain = doc(firestore, 'fountain/#01');

async function addFountain(location, status, quality, votes) {
    const docData = {
        location: location,
        status: status,
        quality: quality,
        votes: votes,
    };
    try {
        await setDoc(fountain, docData, {merge: true});
        console.log('This value was written to the database');
    } catch (error) {
        console.log(`Error :( ${error}`)
    }
}

async function readDoc () {
    const snapshot = await getDoc(fountain);
    if (snapshot.exists()) {
        const docData = snapshot.data();
        console.log(`Data = ${JSON.stringify(docData)}`);
    }
}

async function query () {
    const querySnapshot = await getDocs(collection(firestore, 'fountain'));
    querySnapshot.forEach((doc) => 
        {console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
    });
}

console.log('Hello, Firestore!');

async function updateStatus(id, newStatus) {
    const fount = doc(firestore, 'fountain/' + toString(id));
    const docSnap = await getDoc(collection(firestore, fount)); //or 'fountain', toString(id);
    const data = docSnap.data();
    const docData = {
        location: data[location],
        status: newStatus,
        quality: data[quality],
        votes: data[votes],
    };
    try {
        await setDoc(fountain, docData, {merge: true});
        console.log('This value was written to the database');
    } catch (error) {
        console.log(`Error :( ${error}`)
    }
}