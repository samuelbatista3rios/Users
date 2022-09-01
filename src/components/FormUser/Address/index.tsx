import { UserProps } from "../../../@types/user";
import { AddressContainer } from "./styles";

type AddressProps = {
  user?: UserProps;
  geolocation: {
    lat: string;
    long: string;
  };
  address: {
    city: string;
    number: string;
    street: string;
    zipcode: string;
  };
  onChangeAddressAddress: (
    e: React.ChangeEvent<HTMLInputElement>,
    address: string
  ) => void;
};

export function Address({
  address,
  user,
  geolocation,
  onChangeAddressAddress,
}: AddressProps) {
  return (
    <AddressContainer>
      <label htmlFor="city">
        city:{" "}
        <input
          name="city"
          id="city"
          type="text"
          placeholder={user?.address.city}
          value={address.city}
          onChange={(e) => onChangeAddressAddress(e, "city")}
        />
      </label>
      <label htmlFor="number">
        number:{" "}
        <input
          name="number"
          id="number"
          type="text"
          placeholder={user?.address.number.toString()}
          value={address.number}
          onChange={(e) => onChangeAddressAddress(e, "number")}
        />
      </label>
      <label htmlFor="street">
        street:{" "}
        <input
          name="street"
          id="street"
          type="text"
          placeholder={user?.address.street}
          value={address.street}
          onChange={(e) => onChangeAddressAddress(e, "street")}
        />
      </label>
      <label htmlFor="zipcode">
        zipcode:{" "}
        <input
          name="zipcode"
          id="zipcode"
          type="text"
          placeholder={user?.address.zipcode}
          value={address.zipcode}
          onChange={(e) => onChangeAddressAddress(e, "zipcode")}
        />
      </label>
      <label htmlFor="lat">
        lat:{" "}
        <input
          name="lat"
          id="lat"
          type="text"
          placeholder={user?.address.geolocation.lat}
          value={geolocation.lat}
          onChange={(e) => onChangeAddressAddress(e, "lat")}
        />
      </label>
      <label htmlFor="long">
        long:{" "}
        <input
          name="long"
          id="long"
          type="text"
          placeholder={user?.address.geolocation.long}
          value={geolocation.long}
          onChange={(e) => onChangeAddressAddress(e, "long")}
        />
      </label>
    </AddressContainer>
  );
}
