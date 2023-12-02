import connectToMongoDB from "../../lib/db";
import Contact from "../../models/contact";
export default async function handler(req, res) {
  const { method } = req;
  await connectToMongoDB();
  switch (method) {
    case "GET":
      try {
        const contacts = await Contact.find({});
        res.status(200).json({ success: true, data: contacts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const contact = await Contact.create(req.body);
        res.status(201).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
