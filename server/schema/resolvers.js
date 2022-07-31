export const resolvers = {
  Query: {
    users: (parent, args, context) => {
      return context.db.UserList;
    },
    user: (parent, args, context) => {
      return context.db.UserList.find((user) => user.id === +args.id);
    },
    movies: (parent, args, context) => {
      return context.db.MovieList;
    },
    movie: (parent, args, context) => {
      return context.db.MovieList.find((movie) => movie.name === args.name);
    },
  },
  User: {
    favouriteMovies: (parent, args, context) => {
      return context.db.MovieList.filter(
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2020
      );
    },
  },
  Mutation: {
    addUser: (parent, args, context) => {
      const lastId = context.db.UserList[context.db.UserList.length - 1].id;

      const newUser = {
        ...args.input,
        id: lastId + 1,
      };

      context.db.UserList.push(newUser);
      return newUser;
    },

    updateUser: (parent, args, context) => {
      let index = context.db.UserList.findIndex((user) => user.id === +args.id);
      context.db.UserList[index] = {
        ...context.db.UserList[index],
        ...args.input,
      };
      return context.db.UserList[index];
    },

    deleteUser: (parent, args, context) => {
      context.db.UserList = context.db.UserList.filter(
        (user) => user.id !== +args.id
      );
      return null;
    },
  },
};
