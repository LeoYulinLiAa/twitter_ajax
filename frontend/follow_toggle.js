const APIUtil = require('./api_util');


class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        this.render();
        this.$el.on("click", event => {
            this.handleClick(event);
        });
    }

    render() {
        this.$el.prop('disabled', false)
        if (this.followState === "unfollowed") {
            this.$el.text("Follow!");
        }
        if (this.followState === "followed") {
            this.$el.text("Unfollow!");
        }
        if (this.followState === 'following' || this.followState === 'unfollowing') {
            this.$el.prop('disabled', true)

        }

    }

    handleClick(event) {
        event.preventDefault();
        if (this.followState === 'unfollowed') {
            this.followState = 'following';
            this.render();
            APIUtil.followUser(this.userId).then(() => {
                this.followState = "followed";
                this.render();
            })
        }

        if (this.followState === 'followed') {
            this.followState = 'unfollowing';
            this.render();
            APIUtil.unfollowUser(this.userId).then(() => {
                this.followState = "unfollowed";
                this.render();
            })
        }
    }
}

module.exports = FollowToggle;