const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'JSON',
      type: 'POST'
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'JSON',
      type: 'DELETE'
    });
  },

  searchUser: query => {
    return $.ajax({
      url: `/users/search/`,
      type: 'GET',
      dataType: 'JSON',
      data: {
        query: query
      }
    });
  }
};

module.exports = APIUtil;