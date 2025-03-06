function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, text, name } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      text,
      name,
    };

    res.status(201).json({
      message: "Added comment",
      comment: newComment,
    });
  }
  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "max", text: "A first comment" },
      { id: "c2", name: "test", text: "A second comment" },
    ];
    res.status(200).json({ message: "get Message", comments: dummyList });
  }
}

export default handler;
