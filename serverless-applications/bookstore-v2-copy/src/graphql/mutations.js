/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createBookOrder = /* GraphQL */ `
  mutation CreateBookOrder(
    $input: CreateBookOrderInput!
    $condition: ModelBookOrderConditionInput
  ) {
    createBookOrder(input: $input, condition: $condition) {
      id
      book {
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
      order {
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
      createdAt
      updatedAt
      bookOrdersId
      orderBooksId
      customer
    }
  }
`;
export const updateBookOrder = /* GraphQL */ `
  mutation UpdateBookOrder(
    $input: UpdateBookOrderInput!
    $condition: ModelBookOrderConditionInput
  ) {
    updateBookOrder(input: $input, condition: $condition) {
      id
      book {
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
      order {
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
      createdAt
      updatedAt
      bookOrdersId
      orderBooksId
      customer
    }
  }
`;
export const deleteBookOrder = /* GraphQL */ `
  mutation DeleteBookOrder(
    $input: DeleteBookOrderInput!
    $condition: ModelBookOrderConditionInput
  ) {
    deleteBookOrder(input: $input, condition: $condition) {
      id
      book {
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
      order {
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
      createdAt
      updatedAt
      bookOrdersId
      orderBooksId
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
