use newDB
db.tempCollection.insertOne({name: "Karsten Kessler", age: 76}) --> DB wird automatsisch erstellt
show dbs

use my_database

show collections

db.tweets.count()

db.tweets.find()

db.createCollection("dhbw")

db.dhbw.insert({typ:"dvd",titel:"Lost me",regie:"Davin Bowie"})
db.dhbw.insert({typ:"dvd",titel:"Lost me",band:"ACDC"})

db.dhbw.find({titel: "Lost me"})

db.dhbw.count()

db.dhbw.find({
    $or: [
        {typ: "dvd"},
        {titel: "Highway"}
    ]
});

use admin

db.createUser({
    user: "adminUser",
    pwd: passwordPrompt(),  
    roles: [{ role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase"]
})


var result = db.dhbw.updateOne(
    { titel: "Lost me", regie: "Davin Bowie" },
    { $set: { regie: "David Bowie" } }
);
printjson(result);

db.dhbw.insert({typ:"dvd",titel:"Tiger",regie:"Carl Lewis"});

db.dhbw.deleteOne({typ: "dvd", titel: "Tiger", regie: "Carl Lewis"});

db.dhbw.find({}, { typ: 1, titel: 1, _id: 0 });

db.dhbw.insert(
   { item: "cards", qty: 123 },
   { writeConcern: { w: "majority", wtimeout: 5000 } }
);

db.dhbw.createIndex({titel: 1})

db.dhbw.getIndexes()

db.dhbw.createIndex({ titel: 1 }, { unique: true });

db.dhbw.updateMany(
    { _id: ObjectId("661d2dc489e0f7b131272b51") },
    { $set: { titel: "Das wünsch ich dir" } }
);

db.dhbw.find().readConcern("majority")

db.tweets.countDocuments({ "user.friends_count": 73 })
db.tweets.find({ "user.friends_count": 73 })

var count = db.tweets.countDocuments({ "user.friends_count": 73 });
print("Number of documents found: " + count);

db.tweets.aggregate([
    { $group: { _id: "$user.friends_count", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
])

db.tweets.countDocuments({ "user.friends_count": { $gt: 10000 } })

db.tweets.find({ "user.friends_count": 73 }).explain()

db.myCollection.updateOne(
    { name: "Karsten Kessler" },
    { $set: { age: 76 } },     
    { upsert: true }           
);

db.myCollection.updateOne(
    { name: "Karsten Kessler" },
    { $set: { age: 76, education: "Dipl. Math." } },
    { upsert: true }
);

db.Student.find({}, { name: 1, age: 1, _id: 0 })

db.createCollection("Student");
db.createCollection("Hochschule");
db.createCollection("Dozent");
db.createCollection("Vorlesung");

db.Hochschule.insertMany([
{"_id": ObjectId("6622248698a768ab60158f6e"),
  "name": "DHBW Stuttgart",
  "ort": "Stuttgart"
},
{"_id": ObjectId("6622249a83f881e23f5d626f"),
  "name": "DHBW Heilbronn",
  "ort": "Heilbronn"
},
{"_id": ObjectId("662224a10fcc911c070e99ab"),
  "name": "DHBW Ulm",
  "ort": "Ulm"
}
]);

db.Vorlesung.insertMany([
{"_id": ObjectId("662224aaaed2ee724fa4724d"),
  "name": "Analysis I",
  "raum": 101
},
{"_id": ObjectId("662224b2a910917554adff6b"),
  "name": "Analysis II",
  "raum": 105
},
{"_id": ObjectId("662224b8b455bb6d764fba39"),
  "name": "Analysis III",
  "raum": 209
},
{"_id": ObjectId("662224c0b2a58b9e3e158e60"),
  "name": "Stochastik",
  "raum": 105
},
{"_id": ObjectId("662224c6ac2627b589b4a118"),
  "name": "DGL I",
  "raum": 101
},
{"_id": ObjectId("662224cd79f5713901ef6ab8"),
  "name": "DGL II",
  "raum": 101
},
{"_id": ObjectId("662224d3d827c4210238cf52"),
  "name": "Lineare Algebra I",
  "raum": 101
},
{"_id": ObjectId("662224d86af44be5010796de"),
  "name": "Lineare Algebra II",
  "raum": 101
},
{"_id": ObjectId("662224de064c6af5f605559f"),
  "name": "Numerik I",
  "raum": 400
},
{"_id": ObjectId("662224e6b376b23916103446"),
  "name": "Numerik II",
  "raum": 400
}
]);

db.Dozent.insertMany([
{"_id": ObjectId("662224ecaa0350e55e81a84c"),
  "name": "Newton",
  "email": "newton@dozent.de",
  "department": 4,
  "vorlesung_ids": [ObjectId("662224b8b455bb6d764fba39"), ObjectId("662224b2a910917554adff6b")]},

{"_id": ObjectId("662224f871d057bb9e650371"),
   "name": "Einstein",
  "email": "einstein@dozent.de",
  "department": 4,
  "vorlesung_ids": [ObjectId("662224b2a910917554adff6b"), ObjectId("662224de064c6af5f605559f")]},
{
  "_id": ObjectId("662224fe45fa33356381c008"),
  "name": "Schroedinger",
  "email": "schroedinger@dozent.de",
  "department": 5,
  "vorlesung_ids": [ObjectId("662224b8b455bb6d764fba39"), ObjectId("662224e6b376b23916103446")]},
{
  "_id": ObjectId("66222504976ea1bc50f4c144"),
  "name": "Hilbert",
  "email": "hilbert@dozent.de",
  "department": 4,
  "vorlesung_ids": [ ObjectId("662224b2a910917554adff6b"), ObjectId("662224e6b376b23916103446")]},
{
  "_id": ObjectId("6622250b4bc3a59571f65483"),
  "name": "Laplace",
  "email": "laplace@dozent.de",
  "department": 12,
  "vorlesung_ids": [ObjectId("662224b2a910917554adff6b"), ObjectId("662224e6b376b23916103446")]},
{
  "_id": ObjectId("6622251556c87c589ace6f4f"),
  "name": "Lagrange",
  "email": "lagrange@dozent.de",
  "department": 2,
  "vorlesung_ids": [ObjectId("662224b2a910917554adff6b"), ObjectId("662224d3d827c4210238cf52")]},
{
  "_id": ObjectId("6622251b802174bdb987019f"),
  "name": "Cauchy",
  "email": "cauchy@dozent.de",
  "department": 1,
  "vorlesung_ids": [ObjectId("662224cd79f5713901ef6ab8"), ObjectId("662224c0b2a58b9e3e158e60")]}
])

db.Student.insertMany([
{
  "_id": ObjectId("662225207b3983a29b54194d"),
  "name": "Bruna",
  "email": "bruna@student.de",
  "semester": 2,
  "hochschule_id": ObjectId("6622249a83f881e23f5d626f"),
  "vorlesung_ids": [ObjectId("662224b2a910917554adff6b"), ObjectId("662224c0b2a58b9e3e158e60")]},
{
  "_id": ObjectId("662225271e90288553a0ebb4"),
  "name": "Ruck",
  "email": "ruck@student.de",
  "semester": 1,
  "hochschule_id": ObjectId("6622249a83f881e23f5d626f"),
  "vorlesung_ids": [ObjectId("662224cd79f5713901ef6ab8"), ObjectId("662224c0b2a58b9e3e158e60")]},
{
  "_id": ObjectId("6622252d46b137a53d5e52c9"),
  "name": "Albertson",
  "email": "albertson@student.de",
  "semester": 2,
  "hochschule_id": ObjectId("661f6ff853df0ff5c73825f8"),
  "vorlesung_ids": [ObjectId("662224cd79f5713901ef6ab8"), ObjectId("662224c0b2a58b9e3e158e60")]},
{
  "_id": ObjectId("66222534802c32b4c88489ed"),
  "name": "Worland",
  "email": "worland@student.de",
  "semester": 3,
  "hochschule_id": ObjectId("6622249a83f881e23f5d626f"),
  "vorlesung_ids": [ObjectId("662224cd79f5713901ef6ab8"), ObjectId("662224c0b2a58b9e3e158e60")]},
{
  "_id": ObjectId("6622253a9b0089464d1095c7"),
  "name": "Worland",
  "email": "worland@student.de",
  "semester": 7,
  "hochschule_id": ObjectId("6622249a83f881e23f5d626f"),
  "vorlesung_ids": [ObjectId("662224cd79f5713901ef6ab8"), ObjectId("662224aaaed2ee724fa4724d")]},
{
  "_id": ObjectId("6622253e85b144fe38230525"),
  "name": "Heinicke",
  "email": "heinicke@student.de",
  "semester": 4,
  "hochschule_id": ObjectId("662224a10fcc911c070e99ab"),
  "vorlesung_ids": [ObjectId("662224cd79f5713901ef6ab8"), ObjectId("662224aaaed2ee724fa4724d")]},

{
  "_id": ObjectId("66222544783afc48c84de1e5"),
  "name": "Stihl",
  "email": "stihl@student.de",
  "semester": 3,
  "hochschule_id": ObjectId("662224a10fcc911c070e99ab"),
  "vorlesung_ids": [ObjectId("6622249a83f881e23f5d626f"), ObjectId("662224d86af44be5010796de")]},
{
  "_id": ObjectId("66222548f3421717b28a5209"),
  "name": "Tennet",
  "email": "tennet@student.de",
  "semester": 2,
  "hochschule_id": ObjectId("6622248698a768ab60158f6e"),
  "vorlesung_ids": [ObjectId("6622249a83f881e23f5d626f"), ObjectId("662224d86af44be5010796de")]},

{
  "_id": ObjectId("6622254e5c5309cc43f2636f"),
  "name": "Dedrick",
  "email": "dedrick@student.de",
  "semester": 1,
  "hochschule_id": ObjectId("662224a10fcc911c070e99ab"),
  "vorlesung_ids": [ObjectId("6622249a83f881e23f5d626f"), ObjectId("662224d86af44be5010796de")]}
])

db.Student.find()

db.Student.find({ "hochschule_id": ObjectId("661f6ff853df0ff5c73825f8")});

db.Student.find(
    { "hochschule_id": ObjectId("661f6ff853df0ff5c73825f8") },
    { name: 1, email: 1, _id: 0 }
);

db.Student.aggregate([
    {
        $match: { "name": "Bruna" }
    },
    {
        $lookup: {
            from: "Vorlesung",
            localField: "vorlesung_ids",
            foreignField: "_id",
            as: "vorlesungen"
        }
    },
    {
        $unwind: "$vorlesungen"
    },
    {
        $lookup: {
            from: "Dozent",
            localField: "vorlesungen._id",
            foreignField: "vorlesung_ids",
            as: "dozenten"
        }
    },
    {
        $unwind: "$dozenten"
    },
    {
        $project: {
            _id: 0,
            "Studentenname": "$name",
            "Vorlesung": "$vorlesungen.name",
            "Dozent": "$dozenten.name"
        }
    }
]).pretty()

--> alternativ als embeded:

{
  "_id": {
    "$oid": "661f702153df0ff5c73825fa"
  },
  "name": "Einstein",
  "email": "einstein@dhbw.de",
  "semester": 10,
  "hochschule": {
    "name": "DHBW Stuttgart",
    "location": "Stuttgart"
  }
}



==========================================

db.Student.find({})
db.Vorlesung.find({ "name": "Analysis I" })
db.Dozent.find({ "name": "Einstein" })
db.Hochschule.find({ "name": "DHBW Stuttgart" })
db.Student.find({ "hochschule_id": ObjectId("6622248698a768ab60158f6e") })
db.Vorlesung.find({ "_id": { $in: [ObjectId("662224b2a910917554adff6b"), ObjectId("662224de064c6af5f605559f")] } })

db.Student.drop();
db.Vorlesung.drop();
db.Dozent.drop();
db.Hochschule.drop();

---> embedded:

db.Hochschule.insertMany([
    {
        "_id": ObjectId("6622248698a768ab60158f6e"),
        "name": "DHBW Stuttgart",
        "ort": "Stuttgart",
        "courses": [
            {
                "name": "Analysis I",
                "raum": 101,
                "dozent": {
                    "name": "Newton",
                    "email": "newton@dozent.de"
                }
            },
            {
                "name": "Lineare Algebra I",
                "raum": 101,
                "dozent": {
                    "name": "Hilbert",
                    "email": "hilbert@dozent.de"
                }
            }
        ]
    },
    {
        "_id": ObjectId("6622249a83f881e23f5d626f"),
        "name": "DHBW Heilbronn",
        "ort": "Heilbronn",
        "courses": [
            {
                "name": "Stochastik",
                "raum": 105,
                "dozent": {
                    "name": "Laplace",
                    "email": "laplace@dozent.de"
                }
            },
            {
                "name": "Numerik I",
                "raum": 400,
                "dozent": {
                    "name": "Einstein",
                    "email": "einstein@dozent.de"
                }
            }
        ]
    },
    {
        "_id": ObjectId("662224a10fcc911c070e99ab"),
        "name": "DHBW Ulm",
        "ort": "Ulm",
        "courses": [
            {
                "name": "DGL I",
                "raum": 101,
                "dozent": {
                    "name": "Cauchy",
                    "email": "cauchy@dozent.de"
                }
            }
        ]
    }
]);

--> alles embedded:

db.Hochschule.insertOne({
    "_id": ObjectId("6622248698a768ab60158f6e"),
    "name": "DHBW Stuttgart",
    "ort": "Stuttgart",
    "courses": [
        {
            "name": "Analysis I",
            "raum": 101,
            "dozent": {
                "name": "Newton",
                "email": "newton@dozent.de",
                "department": 4
            },
            "students": [
                {
                    "name": "Bruna",
                    "email": "bruna@student.de",
                    "semester": 2
                },
                {
                    "name": "Ruck",
                    "email": "ruck@student.de",
                    "semester": 1
                }
            ]
        },
        {
            "name": "Stochastik",
            "raum": 105,
            "dozent": {
                "name": "Laplace",
                "email": "laplace@dozent.de",
                "department": 12
            },
            "students": [
                {
                    "name": "Albertson",
                    "email": "albertson@student.de",
                    "semester": 2
                },
                {
                    "name": "Heinicke",
                    "email": "heinicke@student.de",
                    "semester": 4
                }
            ]
        }
    ]
});

db.Hochschule.aggregate([
    {
        // Match to reduce the initial set of documents (optional but can improve performance)
        $match: { "courses.students.name": "Bruna" }
    },
    {
        // Unwind the courses array to treat each course as a document
        $unwind: "$courses"
    },
    {
        // Match again to filter only the courses that Bruna is attending
        $match: { "courses.students.name": "Bruna" }
    },
    {
        // Unwind the students array within the courses to access individual student details
        $unwind: "$courses.students"
    },
    {
        // Match to ensure we're only dealing with Bruna's data
        $match: { "courses.students.name": "Bruna" }
    },
    {
        // Project the necessary fields: student name, course name, dozent name, hochschule name
        $project: {
            _id: 0,
            "Studentenname": "$courses.students.name",
            "Hochschule": "$name",
            "Kurs": "$courses.name",
            "DozentName": "$courses.dozent.name"
        }
    }
]).pretty();










