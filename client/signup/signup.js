Template.signup.events({
	'submit #signup': function(ev, tm) {
		ev.preventDefault();
		var data = {
			name: $('#member_name').val(),
			email: $('#member_email').val()
		}
		Session.set('signupFormVisible', false);
		Meteor.call('addMember', data, function(err, ret) {
			Session.set('signupFormVisible', true);
			if (err == undefined) {

				sAlert.success("signed up successfully");
				$('input').val('').removeClass('valid');
				$('i').removeClass('active');
				$('label').removeClass('active');

			} else {
				sAlert.error("an error occurred while signing up");
			}
		});
	}
});

Template.signup.helpers({
	'signupFormVisible': function() {
		return Session.get('signupFormVisible');
	}
})

Template.signup.rendered = function() {
	Session.set('signupFormVisible', true);
}