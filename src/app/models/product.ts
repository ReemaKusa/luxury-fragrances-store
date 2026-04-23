export interface Product {
  id: number;
  name: string;
  brand: string;
  release_year: number;
  price: number;
  image: string;
  url: string;
  description: string;
  top_notes: string[];
  middle_notes: string[];
  base_notes: string[];
  perfumer: string[];
  category: string;
  gender: string;
  longevity: string;
  sillage: string;
  occasion: string;
  about: string;
}
