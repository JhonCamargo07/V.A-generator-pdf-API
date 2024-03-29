const Router = require('express');
const { join } = require('path');

const { login, isAutorized } = require('./../controllers/auth.controller.js');
const { personalCard, comunityCard, familyCard } = require('./../controllers/cards.controller.js');

const utils = require('./../utils/utils');

const router = Router();

router.post('/api/login', login);

// Authorizations
router.use(isAutorized);

// Cards
router.post('/api/family-card', familyCard);
router.post('/api/comunity-card', comunityCard);
router.post('/api/personal-card', personalCard);

// Files
router.get('/public/img/:file', (req, res) => {
	res.status(200).sendFile(join(__dirname, `../public/img/${req.params.file}`));
});

router.get('/public/pdf/:file', (req, res) => {
	res.status(200).sendFile(join(__dirname, `../public/pdf/${req.params.file}`));
});

router.get('/public/*', (req, res) => {
	res.status(200).sendFile(join(__dirname, `../public/${utils.getFileNameInfo()}`));
});

module.exports = router;
