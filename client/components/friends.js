Template.friendsPane.helpers({
  friends: function(){ return Friend.find({});},
  users: function(){
    return Meteor.users.find({});
  }
});

Template.friend.helpers({
  getName: function(){

    return Meteor.users.findOne({_id:this.target}).username;
  }
});

Template.friend.events({
  "click .friend" : function(event){
    event.preventDefault();

    Session.set("currentChatTarget",this.target);
  }
});
