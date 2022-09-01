import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserProps } from "../../@types/user";
import { addUsersAction } from "../../store/actions";
import { Address } from "./Address";
import { FormContainer } from "./styles";

type Props = {
  user?: UserProps;
  handleOpenModal?: () => void;
};

export function FormUser({ user, handleOpenModal }: Props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState({ firstname: "", lastname: "" });
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState({
    city: "",
    number: "",
    street: "",
    zipcode: "",
  });
  const [geolocation, setGeolocation] = useState({ lat: "", long: "" });
  const dispatch = useDispatch();

  const handleEditUser = useCallback(
    (user: UserProps) => {
      const userObject = {
        email: email !== "" ? email : user.email,
        username: username !== "" ? username : user.username,
        id: user.id,
        password: phone !== "" ? phone : user.password,
        name: {
          firstname:
            name.firstname !== "" ? name.firstname : user.name.firstname,
          lastname: name.lastname !== "" ? name.lastname : user.name.lastname,
        },
        address: {
          city: address.city !== "" ? address.city : user.address.city,
          street: address.street !== "" ? address.street : user.address.street,
          number:
            address.number !== ""
              ? Number(address.number)
              : user.address.number,
          zipcode:
            address.zipcode !== "" ? address.zipcode : user.address.zipcode,
          geolocation: {
            lat:
              geolocation.lat !== ""
                ? geolocation.lat
                : user.address.geolocation.lat,
            long:
              geolocation.long !== ""
                ? geolocation.long
                : user.address.geolocation.long,
          },
        },
        phone: phone !== "" ? phone : user.phone,
      };
      dispatch(addUsersAction(userObject));
      handleOpenModal && handleOpenModal();
    },
    [
      dispatch,
      username,
      email,
      name,
      phone,
      address,
      geolocation,
      handleOpenModal,
    ]
  );

  const RegisterUser = useCallback(() => {
    const userObject = {
      email: email,
      username: username,
      id: Math.floor(Date.now() * Math.random()),
      password: phone,
      name: {
        firstname: name.firstname,
        lastname: name.lastname,
      },
      address: {
        city: address.city,
        street: address.street,
        number: Number(address.number),
        zipcode: address.zipcode,
        geolocation: {
          lat: geolocation.lat,
          long: geolocation.long,
        },
      },
      phone: phone,
    };
    dispatch(addUsersAction(userObject));
    navigate("/users");
  }, [dispatch, username, email, name, phone, address, geolocation]);

  function onChangeAddressAddress(
    e: React.ChangeEvent<HTMLInputElement>,
    address: string
  ) {
    switch (address) {
      case "city":
        setAddress((state) => {
          return { ...state, city: e.target.value };
        });
        break;
      case "number":
        setAddress((state) => {
          return { ...state, number: e.target.value };
        });
        break;
      case "street":
        setAddress((state) => {
          return { ...state, street: e.target.value };
        });
        break;

      case "zipcode":
        setAddress((state) => {
          return { ...state, zipcode: e.target.value };
        });
        break;

      case "lat":
        setGeolocation((state) => {
          return { ...state, lat: e.target.value };
        });
        break;

      case "long":
        setGeolocation((state) => {
          return { ...state, long: e.target.value };
        });
        break;
    }
  }
  return (
    <FormContainer>
      <label htmlFor="username">
        username:{" "}
        <input
          name="username"
          id="username"
          type="text"
          value={username}
          placeholder={user?.username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        email:{" "}
        <input
          name="email"
          id="email"
          type="text"
          value={email}
          placeholder={user?.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="firstname">
        Firstname:{" "}
        <input
          name="firstname"
          id="firstname"
          type="text"
          placeholder={user?.name.firstname}
          value={name.firstname}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
      </label>
      <label htmlFor="lastname">
        lastname:{" "}
        <input
          name="lastname"
          id="lastname"
          type="text"
          placeholder={user?.name.lastname}
          value={name.lastname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
      </label>
      <label htmlFor="phone">
        phone:{" "}
        <input
          name="phone"
          id="phone"
          type="text"
          placeholder={user?.phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <Address
        address={address}
        user={user}
        geolocation={geolocation}
        onChangeAddressAddress={onChangeAddressAddress}
      />
      <button
        type="button"
        onClick={
          user
            ? () => {
                handleEditUser(user);
              }
            : RegisterUser
        }
      >
        submit
      </button>
    </FormContainer>
  );
}
