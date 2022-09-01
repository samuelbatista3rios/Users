import { UserProps } from "../../@types/user";

export function addUsersAction(items: UserProps) {
  return {
    type: "ADD_USERS",
    payload: {
      items,
    },
  };
}

export function deleteUserAction(items: UserProps) {
  return {
    type: "DELETE_USER",
    payload: {
      items,
    },
  };
}
