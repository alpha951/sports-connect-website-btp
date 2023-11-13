function haveCommonElements(array1, array2) {
  return array1.some((element) => array2.includes(element));
}

function areUsersAvailable(user1, user2) {
  let matchingTime = [];

  for (const availability1 of user1.availability) {
    for (const availability2 of user2.availability) {
      if (
        availability1.dayOfWeek === availability2.dayOfWeek &&
        availability1.timeRanges.startHour ===
          availability2.timeRanges.startHour &&
        availability1.timeRanges.endHour === availability2.timeRanges.endHour
      ) {
        matchingTime.push(availability1);
      }
    }
  }
  return { match: matchingTime.length > 0, matchingTime };
}

module.exports = { haveCommonElements, areUsersAvailable };
