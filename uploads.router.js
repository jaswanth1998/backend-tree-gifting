const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
// const helpers = require("./helpers");
let fileName;
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        

        cb(null, fileName?fileName:file.originalname);
    },
});
const upload = multer({ storage: storage });

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
        res.header("Access-Control-Allow-Origin","*")
        // res.send({ img: data });
          
         res.status(200).json({
          success: 1,
          data: { url: "Upload" },
        });
  
        //res.json(stringify(req.file.filename));
        //res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
      } catch (error) {
        console.error(error);
      }
    });
  });
  module.exports = router;
  


