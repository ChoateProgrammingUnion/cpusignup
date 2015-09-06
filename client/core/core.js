Meteor.startup(function() {
	sAlert.config({
        effect: 'stackslide',
        position: 'bottom',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0
    });
})

Template.nav.rendered = function() {
	$('.navbutton').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrain_width: false,
		hover: true,
		gutter: $('.navbutton').width(),
		belowOrigin: false
	});
}

Template.nav.helpers({
	'loginCheck': function() {
		if (Meteor.userId() == null) {
			Router.go('login');
		}
	}
})

Template.nav.events({
	'click #logout': function() {
		Meteor.logout();
	}
})