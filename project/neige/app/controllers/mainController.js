
const { Product } = require('../models'); 

const mainController = {
    home: async function(req, res) {
        try {     
            
            const products  = await Product.findAll() 
           
    
            res.render('index', {products});
        } catch(error) {
            console.error(error);

            res.status(500).send("Erreur serveur : " + error);
        }
    },

    acces: async function(req, res) {
        try {       
           
            res.render('acces');
        } catch(error) {
            console.error(error);
            
            res.status(500).send("Erreur serveur : " + error);
        }
    },

    contact: async function(req, res) {
        try {       
  
            res.render('contact');
        } catch(error) {
            console.error(error);
         
            res.status(500).send("Erreur serveur : " + error);
        }
    },

    product: async function(req, res) {
        try {
            const product = await Product.findByPk(req.params.id);
           
            res.render('product', {product});
        } catch(error) {
            console.error(error);
            res.status(500).send("Erreur : " + error);
        }
       
    },


   redirectionPage: async function(req, res) {
        try {
            if(!req.session.user) return res.render('error');
                
    res.render('redirection')
}                                
                      
            
        catch(error) {
            console.error(error);
            res.status(500).send("Erreur : " + error);
        }
       
    },





}

module.exports = mainController;