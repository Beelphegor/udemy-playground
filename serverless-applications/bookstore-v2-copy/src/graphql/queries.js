/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      user
      date
      total
      books {
        items {
          id
          createdAt
          updatedAt
          bookOrdersId
          orderBooksId
          customer
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      customer
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        user
        date
        total
        books {
          nextToken
        }
        id
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          createdAt
          updatedAt
          bookOrdersId
          orderBooksId
          customer
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
