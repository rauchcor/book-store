import { BooksLoaded } from "./books.actions";
import {
  BooksState,
  Entity,
  initialState,
  booksReducer
} from "./books.reducer";

describe("Books Reducer", () => {
  const getBooksId = it => it["id"];
  let createBooks;

  beforeEach(() => {
    createBooks = (id: string, name = ""): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe("valid Books actions ", () => {
    it("should return set the list of known Books", () => {
      const bookss = [createBooks("PRODUCT-AAA"), createBooks("PRODUCT-zzz")];
      const action = new BooksLoaded(bookss);
      const result: BooksState = booksReducer(initialState, action);
      const selId: string = getBooksId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe("PRODUCT-zzz");
    });
  });

  describe("unknown action", () => {
    it("should return the initial state", () => {
      const action = {} as any;
      const result = booksReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
