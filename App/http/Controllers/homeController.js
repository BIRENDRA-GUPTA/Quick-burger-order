const Menu = require('../../Models/menu')

function homeController() {
    
return {
   async index(req, res) {
      const burgers = await Menu.find()
      //console.log(burgers);
      return res.render('home', { burgers: burgers })
  }
    
}
}

module.exports = homeController;