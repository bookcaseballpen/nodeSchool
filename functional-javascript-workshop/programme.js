function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every(function(everyone){
            return  goodUsers.some(function(checked){
                return everyone===checked;
              })
        });
      };
    }

    module.exports = checkUsersValid
