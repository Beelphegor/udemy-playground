import query from "./db";

export async function allBooks() {
  const sql = `select * from hb.book;`;
  try {
    const result = await query(sql);
    return result.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export function imageUrl(size, id) {
  // image links from google api
  // "imageLinks": {
  //   "smallThumbnail": "http://books.google.com/books/content?id=BqACBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  //   "thumbnail": "http://books.google.com/books/content?id=BqACBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  // },
  const zoom = size === "SMALL" ? 1 : 0;
  return `http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=${zoom}&edge=curl&source=gbs_api`;
}
