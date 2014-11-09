var headline = "Award the team",
    content_template = "new_voting",
    button = "QQQ",
    page_state_dep = new Tracker.Dependency();



Template.page.helpers({
  headline: function(){
    page_state_dep.depend();
    return headline;
  },
  content: function(){
    page_state_dep.depend();
    return Template[content_template];
  },
  button: function(){
    page_state_dep.depend();
    return button;
  }
});

Template.page.events({
  'click #QQQ': function(){
    content_template = "QQQ";
    button = "FUU";
    page_state_dep.changed();
  },
  'click #FUU': function(){
    headline = "Headline";
    content_template = "FUU";
    button = "ABC";
    page_state_dep.changed();
  },
  'click #ABC': function(){
    headline = "Headline";
    content_template = "ABC";
    button = "QQQ";
    page_state_dep.changed();
  }
});
