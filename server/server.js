Meteor.methods({
	'addMember': function(member) {
		return Members.insert(member);
	},
	'removeMember': function(id) {
		return Members.remove({_id: id});
	}
})