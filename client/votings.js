Template.new_voting.helpers({
    team: function() {
        return Teams.findOne();
    }
});
