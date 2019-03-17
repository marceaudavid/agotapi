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
const getAllDocument = (collection, params) => {
  return new Promise((resolve, reject) => {
    collection
      .find(params)
      .then(item => resolve(item))
      .catch(err => reject({ code: 400, err }));
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
          reject({ code: 404, err: "This id does not exist" });
        }
      })
      .then(item => resolve(item))
      .catch(err => reject({ code: 400, err }));
  });
};

// Add a document to the collection :
const addOneDocument = (collection, body) => {
  return new Promise((resolve, reject) => {
    verifyId(collection, body._id)
      .then(id => {
        if (id) {
          reject({ code: 400, err: "This id is already used" });
        } else {
          return (item = new collection(body).save());
        }
      })
      .then(item => resolve(item))
      .catch(err => reject({ code: 400, err }));
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
          reject({ code: 404, err: "This id does not exist" });
        }
      })
      .then(item => resolve(item))
      .catch(err => reject({ code: 400, err }));
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
          reject({ code: 404, err: "This id does not exist" });
        }
      })
      .then(item => resolve(item))
      .catch(err => reject({ code: 400, err }));
  });
};

module.exports = {
  getAllDocument,
  getOneDocument,
  addOneDocument,
  updateOneDocument,
  deleteOneDocument
};
