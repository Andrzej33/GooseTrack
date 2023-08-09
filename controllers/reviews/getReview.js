const Review = require("../../models/reviews");
const getReview = async (req, res) => {
  const review = await Review.findById(req.user.id);
  if (!review) {
    return res.status(404).json({ message: "You have no review" });
  }
  const { name, text, rating } = review;
  return res.status(200).json({ name, text, rating });
};
module.exports = getReview;
