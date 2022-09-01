import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState, UserProps } from "../../@types/user";
import { CardUser } from "../../components/CardUser";
import { api } from "../../services/api";
import { addUsersAction } from "../../store/actions";
import { ButtonShowListUser, UserListContainer } from "./styles";

export function UserList() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const dispatch = useDispatch();
  const listUsers = useSelector<IState, UserProps[]>(
    (state) => state.users.items
  );

  useEffect(() => {
    api.get("/users").then((response) => setUsers(response.data));
  }, []);

  const handleSetListUsers = useCallback(() => {
    users.map((user) => {
      dispatch(addUsersAction(user));
    });
  }, [dispatch, users]);

  return (
    <UserListContainer>
      {listUsers.length !== 0 ? (
        listUsers.map((item) => <CardUser user={item} key={item.id} />)
      ) : (
        <ButtonShowListUser type="button" onClick={handleSetListUsers}>
          Show Users List
        </ButtonShowListUser>
      )}
    </UserListContainer>
  );
}
