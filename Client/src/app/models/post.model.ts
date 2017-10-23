export class Post {
  id: number;
  category: number;
  title: string;
  description: string;
  image_post: string;
  created_date: string;
  published_date: string;
  number_views: number;
  author: number;

  constructor(id: number, author: number, category: number, title: string, description?: string,
              image_post?: string, created_date?: string, published_date?: string, number_views?: number) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.description = description;
    this.image_post = image_post;
    this.created_date = created_date;
    this.published_date = published_date;
    this.number_views = number_views;
    this.author = author;
  }

}
