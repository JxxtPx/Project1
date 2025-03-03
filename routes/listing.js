const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js")

const Listing=require("../models/listing.js");
const {validateListing,isLoggedIn, isOwner}=require("../middleware.js")

const listingcontroller=require("../controllers/listings.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig.js")
const upload = multer({ storage })




router.route("/")
.get(wrapAsync(listingcontroller.index))
.post(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingcontroller.createListing));



router.route("/new")
.get(isLoggedIn,listingcontroller.renderNewForm)



router.route("/:id")
.get(wrapAsync(listingcontroller.showListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingcontroller.updateListing))
.delete(isLoggedIn,wrapAsync(listingcontroller.destroyeListing));



//NEW ROUTE





//Edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingcontroller.renderEditForm));


module.exports=router;