const cloudinary = require('cloudinary').v2; // methods to connect to cloudinary cloud
const { CloudinaryStorage } = require('multer-storage-cloudinary'); //methods to deal with form data requests
const multer = require('multer'); //methods to connect multer with cloudinary

//when in doubt how to fill this out look at the manual! uppercase is a convention. comes from the environment file.
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

//the cb function belongs to cloudinarystorage and this is the format. it just is.
const storage=new CloudinaryStorage({
  cloudinary,
  params: {
  folder: 'streetart',
  allowedFormats: ['jpg', 'png'], 
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;