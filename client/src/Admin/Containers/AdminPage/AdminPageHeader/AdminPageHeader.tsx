import React from "react";
import { Stack } from "../../../../Components/Stack/Stack";
import {
  useGetCurrentUserQuery,
  useLogOutMutation,
} from "../../../../generated/graphql";
import styles from "./AdminPageHeader.module.scss";
import { useHistory, useLocation } from "react-router-dom";
import cn from "classnames";
import { useIsAuth } from "../../../../utils/useIsAuth";
import { isProtectedPath } from "../../../../utils/isProtectedPath";

export const AdminPageHeader = () => {
  const { data, loading, error } = useGetCurrentUserQuery();
  const [logOut] = useLogOutMutation();
  const history = useHistory();
  const location = useLocation();
  const isLogInPage = location.pathname === "/log-in";
  const isAuth = useIsAuth();
  const isProtectedPage = isProtectedPath(location.pathname);

  if (error || !data) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>loading.....</div>;
  }

  const handleLogOut = async () => {
    try {
      const logOutResponse = await logOut();

      if (!logOutResponse.data?.logout) {
        throw new Error("could not log out");
      } else {
        history.push("/");
      }

      return logOutResponse;
    } catch (err) {
      console.log("Log out error message: ", err.message);
    }
  };

  console.log("isLogInPage", isLogInPage);
  console.log("isProtectedPage", isProtectedPage);

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.loggedOut]: !isAuth && isProtectedPage,
        [styles.logInPageWrapper]: isLogInPage,
      })}
    >
      <Stack justify="flex-end" align="center" gap={4}>
        <div>{data.me && data.me.username}</div>

        <div>
          {data.me && (
            <button
              className={styles.button}
              type="button"
              onClick={handleLogOut}
            >
              Log out
            </button>
          )}
        </div>

        {!data.me && (
          <Stack
            direction={isLogInPage ? "horizontal" : "vertical"}
            align="center"
            className={cn(styles.logOutWrapper, {
              [styles.logInPageNotAuth]: isLogInPage && isProtectedPage,
            })}
            gap={3}
          >
            <p>you are logged out</p>

            {!isLogInPage && (
              <button
                className={styles.button}
                onClick={() => history.push("/log-in")}
              >
                log in
              </button>
            )}
          </Stack>
        )}
      </Stack>
    </div>
  );
};

export default AdminPageHeader;
