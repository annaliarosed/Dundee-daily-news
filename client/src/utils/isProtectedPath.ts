export const isProtectedPath = (pathname: string) => {
  if (
    pathname.includes("admin") ||
    pathname.includes("create") ||
    pathname.includes("edit") ||
    pathname.includes("log-in")
  ) {
    return true;
  }

  return false;
};
