if (Meteor.isClient) {
  Template.page.helpers({
    headline: function () {
      return "Aye!";
    },
    content: function () {
      return "Content...";
    }
  });

  //Template.hello.events({
  //  'click button': function () {
  //    // increment the counter when button is clicked
  //    Session.set("counter", Session.get("counter") + 1);
  //  }
  //});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
