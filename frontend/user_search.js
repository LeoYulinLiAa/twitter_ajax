const FollowToggle = require('./follow_toggle');
const APIUtil = require('./api_util');

class UserSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find("input");
    this.$ul = this.$el.find(".users");
    this.$input.on("input", event => this.handleInput(event));
  }

  handleInput(event) {
    APIUtil.searchUser(this.$input.val())
      .then(users => {
        this.$ul.empty();
        users.forEach(user => {
          const $li = $('<li>')
          $li.text(user.username);
          this.$ul.append($li);
          $li.append($('<button>'));
        })
      })
      .fail(error => {
        console.log(error);
      });
  }


}

module.exports = UserSearch