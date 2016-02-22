Meteor.subscribe("users");
Meteor.subscribe("friends");
Meteor.subscribe("messages");

Accounts.ui.config({

  passwordSignupFields: "USERNAME_ONLY"

});

Deps.autorun(function (computataion) {
  var currentUser = Meteor.user();
  if(currentUser){
    console.log("logged in");
    Session.set("currentChatTarget",undefined);
  }
  else if (!computataion.firstRun){
    console.log("logged out");
    Session.set("currentChatTarget",undefined);
  }
});
