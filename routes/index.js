const express = require("express");
const path = require("path");
const router = express.Router();

const multer = require("multer");
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, done) {
			done(null, "static/uploads");
		},
		filename(req, file, done) {
			var mimeType;

			switch (file.mimetype) {
				case "image/jpeg":
					mimeType = "jpg";
					break;
				case "image/png":
					mimeType = "png";
					break;
				case "image/gif":
					mimeType = "gif";
					break;
				case "image/bmp":
					mimeType = "bmp";
					break;
				default:
					mimeType = "jpg";
					break;
			}
			const ext = path.extname(file.originalname);
			console.log(file.originalname);
			console.log(path.basename(file.originalname, ext) + "." + mimeType);
			done(null, path.basename(file.originalname, ext) + "." + mimeType);
		},
		// fileFilter: fileFilter,
	}),
	limits: { fileSize: 5 * 1024 * 1024 },
}).array("uploadfile");

const memberController = require("../Controller/MemberController");
const productController = require("../Controller/ProductController");

router.get("/", memberController.member); // 멤버 콘트롤러.멤버
router.get("/profile", memberController.accessProfile); // 프로필 접근 성공 여부 확인

router.get("/product", productController.products); // 로그인 하지 않은 프로턱트 페이지 렌더
router.get("/product/:search", productController.products);
router.get("/detail/:id", productController.showDetail);
router.get("/takeproduct",productController.takeProduct)
router.get("/jimm", productController.Jimm);
router.get("/myproduct", productController.Myproduct);

module.exports = router;
