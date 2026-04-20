const multer = require("multer");
const ApiError = require("./ApiError");
const httpStatus = require("http-status").status;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const filepath = `${__dirname}'/../uploads`
    cb(null,filepath);
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

module.exports = multer({

  fileFilter: function (req, file, cb) {
    const maxsize  = 3*1024*1024;
    if (!file.originalname.match(/.(jpg|jpeg|png)$/)) {
      cb(ApiError(httpStatus.BAD_REQUEST, "Only image is Allowed"));
    } else if(file.size > maxsize){
      cb(ApiError(httpStatus.BAD_REQUEST, "File size exceeds limit"));
    } else {
      cb(null,true);
    }
  },
});
