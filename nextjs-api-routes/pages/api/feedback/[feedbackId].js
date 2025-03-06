import { buildFeedbackPath, extractFeedback } from ".";

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  const data = feedbackData.find((feedback) => feedback.id === feedbackId);

  res.status(200).json({
    message: "feedback data",
    feedback: data,
  });
}

export default handler;
