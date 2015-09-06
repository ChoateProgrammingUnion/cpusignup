Template.email.events({
	'keyup #emailbody': function() { 
		$('#bodypreview').empty().append(marked($('#emailbody').val()));
	},
	'submit #email, click #sendemail': function(ev, tm) {
		ev.preventDefault();
	},

})

Template.email.rendered = function() {
	$('#sendemail').tooltip();
}
