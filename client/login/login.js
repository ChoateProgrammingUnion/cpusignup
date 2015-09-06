Template.login.helpers({
	'startTransition': function() {
		Meteor.setTimeout(function() {
			$('#welcome').fadeOut(400);
		}, 1000);
		Meteor.setTimeout(function() {
			Router.go('overview');
		})
	}
});