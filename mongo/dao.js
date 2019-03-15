// Get all documents from a collection :
const getAllDocument = collection => {
  return new Promise((resolve, reject) => {
    collection
      .find()
      .then(item => resolve(item))
      .catch(err => reject(err));
  });
};

// Get a document by id :
const getOneDocument = (collection, id) => {
  return new Promise((resolve, reject) => {
    collection.findOne({ _id: id });
    console.log("out if", collection.findOne({ _id: id }));
    if (null) {
      console.log("in if", collection.findOne({ _id: id }));
      collection.then(item => resolve(item));
    } else {
      collection.catch(err => reject(err));
    }
  });
};

// Add a document to the collection :
const addOneDocument = (collection, body) => {
  return new Promise((resolve, reject) => {
    const item = new collection(body)
      .save()
      .then(item => resolve(item))
      .catch(err => reject(err));
  });
};

// Update a document :
const updateOneDocument = (collection, id, body) => {
  return new Promise((resolve, reject) =>
    collection
      .updateOne(
        {
          _id: id
        },
        body
      )
      .then(item => resolve(item))
      .catch(err => reject(err))
  );
};

// Delete a document :
const deleteOneDocument = (collection, id) => {
  return new Promise((resolve, reject) =>
    collection
      .deleteOne({
        _id: id
      })
      .then(item => resolve(item))
      .catch(err => reject(err))
  );
};

module.exports = {
  getAllDocument,
  getOneDocument,
  addOneDocument,
  updateOneDocument,
  deleteOneDocument
};
