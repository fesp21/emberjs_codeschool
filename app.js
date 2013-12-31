var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function(){
  this.route('about');

  this.resource('products', function() {
    this.resource('product', { path: '/:product_id' });
  });
  
  this.resource('contacts', function() {
    this.resource('contact', { path: '/:contact_id'});
  });
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

App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return App.PRODUCTS.findBy('title', params.title);
  }
})

App.ContactsRoute = Ember.Route.extend({
  model: function() {
    return App.CONTACTS;
  }
});

App.Product.FIXTURES = [
  { 
    id: 1,
    title: 'Flint',
    price: 99,
    description: 'Flint is a thing',
    isOnSale: true,
    image: 'images/flint.jpg'
  },
  { 
    id: 2,
    title: 'Kindling',
    price: 249,
    description: 'Easily one of the best things',
    isOnSale: false,
    image: 'images/kindling.jpg'
  }
];

App.CONTACTS = [
  {
    name: "Giamia",
    avatar: "images/contacts/ryu.jpg",
    about: "SO COOL"
  },
  {
    name: "Anostagia",
    avatar: "images/contacts/cosby.jpg",
    about: "ALSO SO COOL"
  }
];


App.Product = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  isOnSale: DS.attr('boolean'),
  image: DS.attr('string')
});




















