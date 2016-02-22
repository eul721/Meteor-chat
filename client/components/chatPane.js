Template.chatPane.helpers({
  messages: function(){
    return Message.find({
      $or: [
        {
          $and: [{spoker:Meteor.userId()},{target:Session.get('currentChatTarget')}]
        },
        {
          $and: [{spoker:Session.get('currentChatTarget')},{target:Meteor.userId()}]
        }
      ]

    });
  },
  currentChatTarget: function(){
    var targetId = Session.get('currentChatTarget');
    return Meteor.users.findOne({"_id":targetId}).username;
  }

});
Template.chatPane.events({
  "keypress #new-message": function (event) {
    if (event.which === 13 && event.target.value !== ""){
      event.preventDefault();
      console.log(Session.get('currentChatTarget'));
      Message.insert({
        spoker: Meteor.userId(),
        target: Session.get('currentChatTarget'),
        text: event.target.value
      });

      event.target.value = "";
    }

  }
});

Template.message.helpers({
  spokerIsCurrentUser: function () {
    console.log(this);
    return this.spoker === Meteor.userId();
  }
});
