Template.list_teams.helpers({
    teams: function() {
        return Teams.find();
    },
    member_name: function(member_id) {
        return Members.findOne({_id: member_id}).name;
    }
});

Template.list_teams.events({
    'click .team-header': function(event) {
        var team_id = event.currentTarget.getAttribute('team');
        Session.set('team_id', team_id);
        console.log('Selected team: ', team_id);

        // TODO: redirect
        // note: the following does not work :|
        //content_template = 'new_voting';
        //page_state_dep.changed();
    }
});
