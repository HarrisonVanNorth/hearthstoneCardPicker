const knex = require("../db/knex.js");

module.exports = {
  index: (req, res)=> {
    knex('cards').then((results) => {
      res.render("cards", {cards: results});
    });
  },

  create: (req, res)=>{
    knex('cards').insert({
      name: req.body.name,
      description: req.body.description,
      attack: req.body.attack,
      mana: req.body.mana,
      health: req.body.health,
      img_url: req.body.img_url
    }).then(() => {
          res.redirect("/")
          })
  },
}
