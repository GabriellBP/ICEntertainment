export class Post {
  id: number;
  category: number;
  title: string;
  description: string;
  image: string;
  created_date: string;
  published_date: string;
  number_views: number;

  constructor(id: number, category: number, title: string, description?: string,
              image?: string, created_date?: string, published_date?: string, number_views?: number) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.description = description;
    this.image = image;
    this.created_date = created_date;
    this.published_date = published_date;
    this.number_views = number_views;
  }

}
