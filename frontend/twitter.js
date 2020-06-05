const FollowToggle = require('./follow_toggle');
const UserSearch = require('./user_search');

$(document).ready(function () {
    $('.follow-toggle').each(function (i, button) {
        const followToggle = new FollowToggle(button);
    });
    $('.users-search').each(function (i, nav) {
        const userSearch = new UserSearch(nav);
    });
});