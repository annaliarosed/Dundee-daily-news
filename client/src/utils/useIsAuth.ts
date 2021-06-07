import { useEffect, useState } from "react";
import { useGetCurrentUserQuery } from "../generated/graphql";

export const useIsAuth = () => {
  const { data, loading, error } = useGetCurrentUserQuery();
  const [isAuth, setIsAuth] = useState<boolean>();
  useEffect(() => {
    if ((!loading && !data?.me) || error) {
      //not logged in
      setIsAuth(false);
      return;
    }

    setIsAuth(true);
  }, [loading, data, error]);

  return isAuth;
};
