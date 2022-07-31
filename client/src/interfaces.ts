export interface IUser {
  id?: number;
  name?: string;
  username?: string;
  age?: number;
  nationality?: string;
  friends?: IUser[];
}
export interface IUserDetails {
  name: string;
  username: string;
  age: number;
  nationality: string;
}

export interface IUsersData {
  users: IUser[];
}

export interface IUsersVars {}

export interface IMovie {
  id?: number;
  name?: string;
  yearOfPublication?: number;
  isInTheaters?: boolean;
}

export interface IMovieData {
  movie: IMovie;
}

export interface IMovieVars {
  name: string;
}
