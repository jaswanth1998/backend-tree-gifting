var admin = require("firebase-admin");

var serviceAccount = require("./adminservice.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const getUserDetailsByUid = (uid) => {
    return new Promise((resolve, reject) => {
        admin
            .auth()
            .getUser(uid)
            .then((userRecord) => {
                // See the UserRecord reference doc for the contents of userRecord.
                resolve(userRecord.toJSON());
            })
            .catch((error) => {
                reject('Error fetching user data:', error);
            });
    });


}

const getUserDetailsByEmail = (email) => {
    return new Promise((resolve, reject) => {
        admin
            .auth()
            .getUserByEmail(email)
            .then((userRecord) => {
                resolve(userRecord.toJSON());
            })
            .catch((error) => {
                reject('Error fetching user data:', error);
            });
    });
}

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        admin
            .auth()
            .listUsers()
            .then((getUsersResult) => {
                resolve(getUsersResult);

            })
            .catch((error) => {
                reject('Error fetching user data:', error);
            });
    });
}

const createUser = (email, name) => {
    return new Promise((resolve, reject) => {
        admin
            .auth()
            .createUser({
                email: email,
                emailVerified: true,
                password: process.env.DEFAULE_PASSWORD,
                displayName: name,
                disabled: false,
            })
            .then((getUsersResult) => {
                resolve(getUsersResult);
            })
            .catch((error) => {
                reject(error);
            });
    });
}


const createUserWithPassword = (email, name,password) => {
    return new Promise( (resolve, reject) => {
        admin
            .auth()
            .createUser({
                email: email,
                emailVerified: true,
                password: password,
                displayName: name,
                disabled: false,
            })
            .then((getUsersResult) => {
                resolve(getUsersResult);
            })
            .catch( async(error) => {
                const userDetails  =  await getUserDetailsByEmail(email)
                resolve(userDetails);

                reject(error);
            });
    });
}
const resetPassword = (uid, password) => {
    return new Promise((resolve, reject) => {
        admin
            .auth()
            .updateUser(uid, {
                password: password,

            })
            .then((userRecord) => {
                resolve(userRecord);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addCustomClaim = (uid, claim) => {
    return new Promise((resolve, reject) => {
        admin
            .auth()
            .setCustomUserClaims(uid, claim)
            .then((userRecord) => {
                resolve(userRecord);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const checkUserToken = (token) => {
    return new Promise((resolve, reject) => {
        admin
            .auth()
            .verifyIdToken(token)
            .then((decodedToken) => {

                resolve({ exists: true, ...decodedToken });
            })
            .catch((error) => {
                reject({ exists: true, ...error });

            });
    });
}

const deleteUser = async (uid) => {
    return new Promise((resolve, reject) => {
        admin
            .auth()
            .deleteUser(uid)
            .then((decodedToken) => {

                resolve({ exists: true, "msg": "User is sucessfully deleted" });
            })
            .catch((error) => {
                reject({ exists: true, ...error });

            });
    });

}

const addUserWithCustomClaim = (email, name, claims) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await createUser(email, name);
            const uid = data.uid;
            await addCustomClaim(uid, claims);
            resolve(data)
        } catch (err) {
            if (err.code === "auth/email-already-exists") {
                const data = await getUserDetailsByEmail(email);
                const uid = data.uid;
                await addCustomClaim(uid, claims);
                resolve(data)
            }

            reject(err.message);
        }
    })
}

const testFuntion = async () => {
    try {
        const data = await addUserWithCustomClaim("userDirectoer@gmail.com", "SHAMBAIAH CHEPURI", {
            user: "admin",
            role: "Director",
            client:6,
            employeeId:"AL001"
        });
        console.log(data);
    } catch (err) {
        console.log(err);
    }

}



module.exports = {
    checkUserToken,
    getUserDetailsByUid,
    getUserDetailsByEmail,
    getAllUsers,
    createUser,
    resetPassword,
    addCustomClaim,
    deleteUser,
    addUserWithCustomClaim,
    createUserWithPassword
}
// rf