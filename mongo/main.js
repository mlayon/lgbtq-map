
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function createListing(client, newListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function createCountry(client, newCountry){
    const result = await client.db("JSON_Objects").collection("nwHack").insertOne(newCountry);
}

async function createMultipleListings(client, newListings){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);
    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log();
    console.log(result.insertedIds);
}

async function findOneListingByName(client, nameOfListing) {
    result = await client.db("sample_airbnb").collection("listingsAndReviews")
                        .findOne({ name: nameOfListing });

 

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(`${result.bedrooms} is number of bedrooms in the function`);
        return result.bedrooms;
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
        return nameOfListing;
    }
}

async function findMinListings(client, {
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}) {
    const cursor = client.db("sample_airbnb").collection("listingsAndReviews")
        .find({
            bedrooms: { $gte: minimumNumberOfBedrooms },
            bathrooms: { $gte: minimumNumberOfBathrooms }
        }
        )
        .sort({ last_review: -1 })
        .limit(maximumNumberOfResults);

    const results = await cursor.toArray();

    if (results.length > 0) {
        console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
        results.forEach((result, i) => {
            date = new Date(result.last_review).toDateString();

            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   bedrooms: ${result.bedrooms}`);
            console.log(`   bathrooms: ${result.bathrooms}`);
            console.log(`   most recent review date: ${new Date(result.last_review).toDateString()}`);
        });
    } else {
        console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
    }
}

async function updateListingByName(client, nameOfListing, updatedListing) {
    result = await client.db("sample_airbnb").collection("listingsAndReviews")
                        .updateOne({ name: nameOfListing }, { $set: updatedListing });

    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}


// Actual data monkey time

async function updateCountryScorebyName(client, currentCountry, updatedData) {
    result = await client.db("JSON_Objects").collection("nwHack").updateOne({ name: currentCountry }, { $set: updatedData });
}

async function createCountry(client, newCountry){
    const result = await client.db("JSON_Objects").collection("nwHack").insertOne(newCountry);
}

async function findScorebyName(client, nameOfCountry) {
    result = await client.db("JSON_Object").collection("nwHack")
                        .findOne({ name: nameOfCountry });

    if (result) {
     //   console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(`${result.score} is the score.`);
     //   return result.score;
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

async function deleteCountryByName(client, nameOfCountry) {
    result = await client.db("JSON_Objects").collection("nwHacks")
            .deleteOne({ name: nameOfCountry });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

module.exports = {createCountry,updateCountryScorebyName,findScorebyName,deleteCountryByName};