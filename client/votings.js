Template.new_voting.helpers({
    team: function() {
        return Teams.findOne();
    },
    member_name: function(member_id) {
        return Members.findOne({_id: member_id}).name;
    }
});
