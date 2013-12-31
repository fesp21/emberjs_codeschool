var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function(){
  this.route('about');
  this.resource('products');
});

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'images/logo.png',
  time: function(){
    return (new Date()).toDateString()
  }.property()
});

App.AboutController = Ember.Controller.extend({
  contactName: "Brian Han",
  gravatar: "images/gravatar.jpeg",
  open: function(){
    var day = new Date().getDay();
    if (day === 0) {
      return 'But we are closed for today...come back on Monday!';
    } else {
      return 'We are open!';
    }
  }.property()
});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.PRODUCTS;
  }
});

App.PRODUCTS = [
  {
    title: 'Flint',
    price: 99,
    description: 'Flint is a thing',
    isOnSale: true,
    image: 'flint.png'
  },
  {
    title: 'Kindling',
    price: 249,
    description: 'Easily one of the best things',
    isOnSale: false,
    image: 'kindling.png'
  }
];