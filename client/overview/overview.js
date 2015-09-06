Template.overview.helpers({
	'members': function() {
		return Members.find();
	},
	'memberemails': function() {
		var memberemails = []
		Members.find().fetch().forEach(function(obj) {
			memberemails.push(obj.email);
		})
		return memberemails.join(';');
	}
})

Template.overview.events({
	'mouseenter .overview-row': function() {
		$("tr[data-id='" + this._id + "']").find('i').removeClass('hidden');
	},
	'mouseleave .overview-row': function() {
		$("tr[data-id='" + this._id + "']").find('i').addClass('hidden');
	},
	'click .removeMember': function() {
		var undo = {
			name: this.name,
			email: this.email
		}
		Session.set('undo', undo);
		
		Meteor.call('removeMember', this._id, function(err, ret) {
			if (err == undefined) {
				Materialize.toast('<span>Member deleted</span><a class="btn-flat yellow-text" onclick=\'Meteor.call("addMember", Session.get("undo"))\';>undo</a>', 4000);
			}
		})
	},
	'click #selectall': function() {
		// weeping
		if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById('memberemails'));
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(document.getElementById('memberemails'));
            window.getSelection().addRange(range);
        }
	}
})

Template.overview.rendered = function() {
	$('.js-bottom-pushpin').pushpin({offset: $('.js-bottom-pushpin').position().top});
	$('#exportemails').leanModal().tooltip();
}