const validateAuthorId = (req, res, next) => {
  const authorId = parseInt(req.params.authorId);
  if (Number.isNaN(authorId)) {
    return res.status(400).json({ message: 'Invalid author ID' });
  }
  next();
};

module.exports = {
  validateAuthorId
};
