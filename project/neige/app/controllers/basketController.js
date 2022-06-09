const { Product } = require('../models'); 


const basketController = {


    checkBasketPage(request, response, next) {
        // on test si le tableau des bookmarks n'existe pas
        if (!request.session.basketPage) {
          //et si c'est le cas, on le crée
          request.session.basketPage = [];
        }
        next();
      },

      basketPage: (request, response) => {
        response.render('basket', { products: request.session.basketPage });
      },


      addBasketPage: async function(req, res) {
          try {
            // je la récupére depuis la db
            const product = await Product.findByPk(req.params.id);
            // je l'ajoute ds le tableau des favoris
            req.session.basketPage.push(product);
            // et enfin je redirige vers la page des favoris
            res.redirect("/basket");
          } catch (error) {
            // si erreur de la db
            response.status(500).send(error);
          }
          },

          
      deleteBasketPage: (request, response) => {
        // je récupére l'id de la figurine à effacer
        const productId = Number(request.params.id);
        // j'enléve la figurine de la liste des bookmarks
        request.session.basketPage = request.session.basketPage.filter(product => product.id !== productId)
        // je redirige vers la page des favoris
        response.redirect("/basket");
      }
    };





module.exports = basketController;