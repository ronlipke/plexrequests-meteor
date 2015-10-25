AutoForm.hooks({
  updateSettingsForm: {
    onSuccess: function(formType, result) {
      if (result) {
        Bert.alert('Updated successfully', 'success');
        Meteor.call("settingsUpdate");
      }
      this.event.preventDefault();
      return false;
    },
    onError: function(formType, error) {
      console.log(error);
      Bert.alert('Update failed, please try again', 'danger');
    }
  }
});

Template.admin.helpers({
  settings: function(){
    return Settings.findOne({});
  }
});

Template.admin.events({
  'show.bs.collapse .panel' : function (event, template) {
    console.log($(event.target));
    $(event.target).parent().removeClass("panel-default")
    $(event.target).parent().addClass("panel-primary")
  },
  'hide.bs.collapse .panel' : function (event, template) {
    $(event.target).parent().removeClass("panel-primary")
    $(event.target).parent().addClass("panel-default")
  },
  'submit #updateSettingsForm' : function (event) {
    event.preventDefault();
    return false;
  }
});
