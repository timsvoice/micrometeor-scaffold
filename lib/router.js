FlowRouter.route('/', {
    name: 'Landing',
    action: function(params, queryParams) {
      BlazeLayout.render('Landing');
    }
});