const router = require("express").Router();
const multer = require("multer");
const AWS = require("aws-sdk");
const fs = require("fs");
// const helpers = require("./helpers");
const s3 = new AWS.S3({
  accessKeyId: process.env.aws_access_key_id,
  secretAccessKey: process.env.aws_secret_key,
});
let fileName;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {


    cb(null,  file.originalname);
  },
});
const upload = multer({ storage: storage });

async function uploadFile(fileName, data) {
  // Read content from the file
  const fileContent = fs.readFileSync(fileName.path);
  // Setting up S3 upload parameters
  console.log(data);
  const params = {
    Bucket: "tree-gifting",
    Key: data["fileName"], // File name you want to save as in S3
    Body: fileContent,
  };

  // Uploading files to the bucket
  dat = await s3.upload(params).promise();
  console.log(dat.Location);
  return dat.Location;

  //  await s3.upload(params, function (err, data) {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(`File uploaded successfully. ${data.Location}`);
  //   removefile(fileName.path);

  //   return data.Location;
  // });
}


router.post("/upload", upload.single("image"), (req, res, next) => {
  fileName = req.body['fileName'];
  console.log(fileName)
  let upload = multer({
    storage: storage,

  }).single("image");

  const body = req.body;
  upload(req, res, async function (err) {
    try {


      // var data = await uploadFile(req.file, body);
      var data = await uploadFile(req.file, body);
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Origin", "*")
      // res.send({ img: data });

      res.status(200).json({
        success: 1,
        data: {url:data},
      });

      //res.json(stringify(req.file.filename));
      //res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
    } catch (error) {
      console.error(error);
    }
  });
});
module.exports = router;



