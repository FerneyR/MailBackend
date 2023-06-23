const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const { getFirestore, setDoc, doc } = require("firebase/firestore");
const { app,auth } = require('../firebase/firebaseConfig');
//Variables
const db = getFirestore(app);
const router = require('express').Router();

//Functions

async function insertUserDB(uuid, data) {
    await setDoc(doc(db, "Users", uuid), data);
}

//Endpoints
router.route('/').get((req, res) => {
    msg = "auth";
    res.json({ msg });
});

router.route('/registerUser').post((req, res) => {
    const data = req.body;
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            insertUserDB(user.uid, data).then(() => {
                res.json({
                    status: 'OK',
                    message: 'Insertado'
                })
                res.end();
            }).catch((error) => {
                console.log(error);
                res.status(500).json({
                    status: 'ERROR',
                    code: '001',
                    message: 'No se ha podido crear el usuario en la base de datos'
                })
                res.end();
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                status: 'ERROR',
                code: '002',
                message: 'No se ha podido crear el usuario'
            })
            res.end();
        });
})

router.route('/loginUser').get((req, res) => {
    msg = "loginUser";
    res.json({ msg });
});


module.exports = router;