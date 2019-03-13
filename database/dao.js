const getAll = model => {
  return new Promise((resolve, reject) => {
    model
      .find()
      .then(item => resolve(item))
      .catch(err => reject(err));
  });
};

module.exports = {
  getAll
};
