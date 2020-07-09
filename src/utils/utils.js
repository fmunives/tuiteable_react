export function objectToSnake(userData) {
  function camelToUnderscore(key) {
    return key.replace(/([A-Z])/g, "_$1").toLowerCase();
  }

  const newUserData = {};
  for (var camel in userData) {
    newUserData[camelToUnderscore(camel)] = userData[camel];
  }
  return newUserData;
}
