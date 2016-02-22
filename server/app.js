Meteor.startup(function () {
  "use strict";

  Meteor.publish("friends", function(){
    //add those who have added you
    var loggedInUserId = this.userId;
    var yetToAdd = Friend.find({"target":loggedInUserId}).fetch();
    yetToAdd.forEach(function(friend){
      if(Friend.findOne({owner:loggedInUserId,target:friend.owner}) === undefined)
        Friend.insert({
          owner: loggedInUserId,
          target: friend.owner
        });
    });

    return Friend.find({owner: this.userId });
  });

  Meteor.publish("users", function(){
    return Meteor.users.find({});
  });

  Meteor.publish("messages", function(){
    return Message.find({});
  })
});
