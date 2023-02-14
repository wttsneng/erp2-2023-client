export default function checkModuleAccess(moduleAccessArr, userAccessArr) {
  if (userAccessArr.length === 0) {
    return false;
  }
  const access = moduleAccessArr.filter((item) => userAccessArr.includes(item));
  return access.length > 0;
}
