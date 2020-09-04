const multer = require("multer");
const helper = require("../helper/index");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "./uploads/");
  },
  filename: (request, file, callback) => {
    // console.log(file);
    callback(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});
const fileFilter = (request, file, callback) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    callback(null, true);
  } else {
    return callback(new Error("Extension File Must Be JPG or PNG"), false);
  }
};

const limits = { fileSize: 1024 * 1024 * 1 };

let upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits,
}).single("product_image");

const uploadFilter = (request, response, next) => {
  upload(request, response, function (error) {
    if (error instanceof multer.MulterError) {
      return helper.response(response, 400, error.message);
    } else if (error) {
      return helper.response(response, 400, error.message);
    }
    next();
  });
};

module.exports = uploadFilter;
