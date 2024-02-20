let blogs = []; 

const getAllBlogs = (req, res) => {
  res.status(200).json(blogs);
};

const createBlog = (req, res) => {
  const { title, content, authorId } = req.body;
  const newBlog = { id: blogs.length + 1, title, content, authorId }; 
  blogs.push(newBlog);
  res.status(201).json(newBlog);
};

const getBlogByAuthorId = (req, res) => {
  const authorId = parseInt(req.params.authorId);
  const authorBlogs = blogs.filter(blog => blog.authorId === authorId);
  res.status(200).json(authorBlogs);
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogByAuthorId
};
