Template.new_voting.helpers({
    team: function() {
        return Teams.findOne({_id: Session.get('team_id')});
    },
    member_name: function(member_id) {
        return Members.findOne({_id: member_id}).name;
    }
});
