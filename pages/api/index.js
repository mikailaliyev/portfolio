const fs = require("fs");
const path = require("path");
export const config = {
  api: {
    bodyParser: true,
  },
};
export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    fs.writeFile("newfile.md", req.body, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    });
    res.status(200).json({ status: "Ok" });
  }
}
