Template.addFriend.events({
  "submit #addNewFriend": function(event){
    event.preventDefault();
    var targetFriend = Meteor.users.findOne({
      "username": event.target.friendName.value
    });
    console.log(Meteor.userId());
    console.log(targetFriend);
    if (typeof (targetFriend) !== 'undefined'){
      Friend.insert({
        owner: Meteor.userId(),
        target: targetFriend._id
      });
      $('#add-friend-modal').modal('hide');
    }
  }
});
