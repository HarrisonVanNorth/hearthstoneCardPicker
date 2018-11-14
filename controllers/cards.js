const knex = require("../db/knex.js");

module.exports = {

  index: (req, res)=> {
    if (!req.session.deck) {
      req.session.deck = [];
    }
    knex('cards').then((results) => {
      res.render("cards", {cards: results, deck:req.session.deck});
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

  add: (req,res)=>{ 
    knex('cards').where('id', req.params.id)
    .then((result)=>{
      req.session.deck.push(result[0]);
      res.redirect('/');
    });
  },

  remove: (req,res)=>{
    let deck = req.session.deck;

    if(deck.lenght == 1){
      deck = [];
      res.redirect('/');
      return; 

    }
    for( let i = 0; i < deck.length; i++){
      if(deck[i].id == req.params.id){
        deck.splice(i,1);
        res.redirect('/')
        return;
      }
    } res.redirect('/')
  }
}
