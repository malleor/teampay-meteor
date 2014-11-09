Meteor.startup(function () {
    // DB initialization
    if(Teams.find().count() === 0) {
        var initial_team = {
            name: 'Poker team',
            members: [
                {name: 'Jack'},
                {name: 'Queen'},
                {name: 'King'},
                {name: 'Ace'}
            ]
        };

        // insert members
        initial_team.members = _.map(initial_team.members, function(member){
            return Members.insert(member);
        });

        // insert the team
        Teams.insert(initial_team, function () {
            console.log('Added the initial team to the DB.');
        });
    }
});
