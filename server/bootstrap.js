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
        Teams.insert(initial_team, function () {
            console.log('Added the initial team to the DB.');
        });
    }
});
