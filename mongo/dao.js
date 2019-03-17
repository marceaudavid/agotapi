// Check if the passed id exists
const verifyId = (collection, id) => {
  return new Promise((resolve, reject) =>
    collection.findOne({ _id: id }).then(item => {
      if (item === null) {
        resolve(false);
      } else {
        resolve(true);
      }
    })
  ).catch(err => reject(err));
};

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
    verifyId(collection, id)
      .then(id => {
        if (id) {
          return collection.findOne({ _id: id });
        } else {
          reject(404);
        }
      })
      .then(item => resolve(item))
      .catch(err => reject(err));
  });
};

// Add a document to the collection :
const addOneDocument = (collection, body) => {
  return new Promise((resolve, reject) => {
    verifyId(collection, body._id)
      .then(id => {
        if (id) {
          reject(400);
        } else {
          return (item = new collection(body).save());
        }
      })
      .then(item => resolve(item))
      .catch(err => reject(err));
  });
};

// Update a document :
const updateOneDocument = (collection, id, body) => {
  return new Promise((resolve, reject) => {
    verifyId(collection, id)
      .then(id => {
        if (id) {
          return collection.updateOne({ _id: id }, body);
        } else {
          reject(404);
        }
      })
      .then(item => resolve(item))
      .catch(err => reject(err));
  });
};

// Delete a document :
const deleteOneDocument = (collection, id) => {
  return new Promise((resolve, reject) => {
    verifyId(collection, id)
      .then(id => {
        if (id) {
          return collection.deleteOne({ _id: id });
        } else {
          reject(404);
        }
      })
      .then(item => resolve(item))
      .catch(err => reject(err));
  });
};

module.exports = {
  getAllDocument,
  getOneDocument,
  addOneDocument,
  updateOneDocument,
  deleteOneDocument
};
