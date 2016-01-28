// Home Event Handlers
Template.Landing.events({
  'submit form': function (event) {
    event.preventDefault();
    var email = event.target.loginEmail.value;
    var password = event.target.loginPassword.value;
    Meteor.loginWithPassword(email, password, function (err) {
      if (err) {        
        alert(err)
      } else {
        FlowRouter.go('/admin');
      }
    });
  }
});

// Home Helpers
Template.Landing.helpers({
  products: function () {
    return Products.find();
  }
});

// Home Lifecycle Hooks
Template.Landing.onCreated(function () {
});

Template.Landing.onRendered(function () {
});

Template.Landing.onDestroyed(function () {
});