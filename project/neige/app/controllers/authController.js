const { User } = require('../models');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const authController = {
    signupPage: function(req, res) {
   
        res.render('signup');
    },
    loginPage: function(req, res) {
     
        res.render('login');
    },
    signup: async function(req, res) {
       

        const errors = [];

        if(!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password || !req.body.passwordConfirm) {
          
            errors.push("Vous devez remplir tous les champs !");
        }
       
        if(!emailValidator.validate(req.body.email)) {
        
            errors.push("L'email n'est pas valide !");
        }
       
        if(req.body.password !== req.body.passwordConfirm) {
         
            errors.push("Les deux mots de passes ne correspondent pas !");
        }
        
        const user = await User.findOne({
            where: {
                "email": req.body.email
            }
        });
  
        if(user) {
            
            errors.push("Un utilisateur inscrit sur le site possède déjà cette adresse email !");
        }

   
        if(errors.length > 0) return res.render('signup', {errors});


        delete req.body.passwordConfirm;
        
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
    
        await User.create(req.body);
     
        return res.redirect('/login');
    },
    login: async function(req, res) {

        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        
      
        if(!user) return res.redirect('/login');
     
        const passIsGood = await bcrypt.compare(req.body.password, user.password);

        if(!passIsGood) return res.redirect('/login');
       

        const userSession = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            fullname: user.fullname,
            email: user.email,
            role: user.role
        }
       
        req.session.user = userSession;

        return res.redirect('/');

    },
    logout: function(req, res) {
       
        req.session.destroy();
      


        return res.redirect('/');
    },
    profile: function(req, res) {
        if(!req.session.user) return res.redirect('/login');
   
        res.render('profile');
    },
    adminPage: function(req, res) {
        res.render('admin');
    }
}

module.exports = authController;