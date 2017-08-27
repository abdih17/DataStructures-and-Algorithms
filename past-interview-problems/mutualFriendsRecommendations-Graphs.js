var user1 = { id: 1, name: 'John', friends: [], friendIndexes: [] };  // friendIndexes: [3, 2, 1], friends: [ user3, user2, user 1]
var user2 = { id: 2, name: 'Susan', friends: [], friendIndexes: [] }; // friendIndexes: [4]
var user3 = { id: 3, name: 'Bob', friends: [], friendIndexes: [] };
var user4 = { id: 4, name: 'Sam', friends: [], friendIndexes: [] };
var user5 = { id: 5, name: 'Mike', friends: [], friendIndexes: [] };

var usersArray = [[3, 2, 1], [4], [0, 1, 4], [1, 4], [3]];

function getFriendsOfFriends(users, index) {
   // Convert array of into a graph of objects of type user
  var graph = [ user1, user2, user3, user4, user5 ];

  for (var i = 0; i < users.length; ++i) {
   var friends = users[i];
     graph[i].friendIndexes = friends;
  }

  for (var i = 0; i < graph.length; ++i) {
   var user = graph[i];
   for (var j = 0; j < user.friendIndexes.length; ++j) {
     var index =  user.friendIndexes[j];
       user.friends.push(graph[index]);
   }
	}
   var result = {};
   addFriends(graph[index], result, 5);
   return Object.values(result);
}

function addFriends(user, result, counter) { // user is of type User, result contains type User
	if (counter === 0) return;

  console.log('--------------------------------step: ', counter);
  console.log('--------------------------------user, result: ', user, result);
	var friends = user.friends;
    for (var i = 0; i < friends.length; i++) {
      var friend = friends[i];
      if (!result[friend.id]) {
        result[friend.id] = friend;
        addFriends(friend, result, counter-1);
      }
    }
}

var friends = getFriendsOfFriends(usersArray, 7);
console.log(friends);
