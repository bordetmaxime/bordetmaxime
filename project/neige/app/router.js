const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const basketController = require('./controllers/basketController');
const authController = require('./controllers/authController');

const loginCheck = require('./middlewares/loginCheck');
const adminCheck = require('./middlewares/adminCheck');


router.get('/', mainController.home);
router.get('/product/:id', mainController.product);
router.get('/acces', mainController.acces);
router.get('/contact', mainController.contact);
router.get('/redirection', mainController.redirectionPage );

router.use('/basket', basketController.checkBasketPage);

router.get('/basket', basketController.basketPage);
router.get('/basket/add/:id', basketController.addBasketPage );
router.get('/basket/delete/:id', basketController.deleteBasketPage );

router.get('/signup', loginCheck, authController.signupPage);
router.get('/login', loginCheck, authController.loginPage);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/profile', authController.profile);
router.get('/admin', adminCheck, authController.adminPage);


module.exports = router;