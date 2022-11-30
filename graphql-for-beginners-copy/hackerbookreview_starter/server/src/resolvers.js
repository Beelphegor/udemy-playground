import { allBooks, imageUrl } from "./book";
import { authorsByBookId } from "./author";

const resolvers = {
  Book: {
    // ratingCount: (book) => book.rating_count,
    imageUrl: (book, params) => {
      const { size } = params;
      return imageUrl(size, book.googleId);
    },
    authors: (book, args, context) => {
      const { loaders } = context;
      const { findAuthorsByBookIdsLoader } = loaders;
      return findAuthorsByBookIdsLoader.load(book.id);
      //authorsByBookId(book.id),
    },
  },
  Query: {
    books: () => {
      return allBooks();
    },
  },
};

export default resolvers;
