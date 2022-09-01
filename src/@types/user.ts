export interface UserProps {
  email: string;
  id?: number;
  password: string;
  phone: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    number: number;
    street: string;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
}

export interface IUserState {
  items: UserProps[];
}

export interface IState {
  users: IUserState;
}
