import { Category, Product } from './types';

export const RESTAURANT_CONFIG = {
  name: "Chiken Rojo",
  phone: "51973282798",
  currency: "S/",
  logoUrl: "https://static.vecteezy.com/system/resources/thumbnails/017/503/813/small/fried-chicken-restaurant-logo-template-vector.jpg",
  coverUrl: "https://elcomercio.pe/resizer/v2/55QLUH7SV5E53AFZHMYNTJ4TTE.jpg?auth=bdffd2a0f4da7a109fb83ad9b94fcf63e5ca1c345be580dc898152c14dac10a0&width=1200&height=900&quality=75&smart=true"
};

export const CATEGORIES: Category[] = [
  { 
    id: 'pollo', 
    name: 'Pollo a la Brasa',
    imageUrl: 'https://elcomercio.pe/resizer/v2/55QLUH7SV5E53AFZHMYNTJ4TTE.jpg?auth=bdffd2a0f4da7a109fb83ad9b94fcf63e5ca1c345be580dc898152c14dac10a0&width=980&height=528&quality=75&smart=true'
  },
  { 
    id: 'broaster', 
    name: 'Broaster',
    imageUrl: 'https://cdn.blog.paulinacocina.net/wp-content/uploads/2024/01/pollo-a-la-broaster-Paulina-Cocina-Recetas-1722251878.jpg'
  },
  { 
    id: 'chaufa', 
    name: 'Chaufa',
    imageUrl: 'https://www.chinawok.com.pe/media/catalog/product/a/g/agru_2146469527.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg'
  },
  { 
    id: 'bebidas', 
    name: 'Bebidas',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlQkNQNHSy_dC0bWjmCPWdjHKdrKSu3DXIg&s'
  }
];

export const PRODUCTS: Product[] = [
  // Pollo a la Brasa
  {
    id: 'p1',
    name: '1 Pollo a la Brasa',
    price: 49.00,
    categoryId: 'pollo',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVUDMKKWDRmzcimrFXfOzLfjHp3KEqxUu0A&s'
  },
  {
    id: 'p2',
    name: '1/2 Pollo a la Brasa',
    price: 29.00,
    categoryId: 'pollo',
    imageUrl: 'https://tofuu.getjusto.com/orioneat-local/resized2/ECyNzvtnqjwrXXwvj-2400-x.webp'
  },
  {
    id: 'p3',
    name: '1/4 Pollo a la Brasa',
    price: 16.00,
    categoryId: 'pollo',
    imageUrl: 'https://tofuu.getjusto.com/orioneat-local/resized2/WucYaNY6sTt2PdhxA-1080-x.webp'
  },
  {
    id: 'p4',
    name: '1/8 Pollo a la Brasa',
    price: 12.00,
    categoryId: 'pollo',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0M9aFx8LQcwTCOKqdpreDAXxJQacdv7JD1w&s'
  },
  
  // Broaster
  {
    id: 'b1',
    name: 'Broaster Ala',
    price: 9.00,
    categoryId: 'broaster',
    imageUrl: 'https://images.rappi.pe/restaurants_background/pethebroaster-1674840779042.jpg'
  },
  {
    id: 'b2',
    name: 'Broaster Pecho',
    price: 12.00,
    categoryId: 'broaster',
    imageUrl: 'https://polleriabrasasdelcentro.wordpress.com/wp-content/uploads/2021/07/pecho-1.png?w=1024'
  },
  {
    id: 'b3',
    name: 'Broaster Entrepierna',
    price: 11.00,
    categoryId: 'broaster',
    imageUrl: 'https://polleriabrasasdelcentro.wordpress.com/wp-content/uploads/2021/07/broster.png?w=1024'
  },
  {
    id: 'b4',
    name: 'Broaster Pierna',
    price: 11.00,
    categoryId: 'broaster',
    imageUrl: 'https://polleriabrasasdelcentro.wordpress.com/wp-content/uploads/2021/07/broaster.png?w=1024'
  },

  // Chaufa
  {
    id: 'c1',
    name: 'Chaufa de Pollo',
    price: 12.00,
    categoryId: 'chaufa',
    imageUrl: 'https://origin.cronosmedia.glr.pe/large/2020/12/18/lg_5fdd5b4acf89f80dcc653f1d.jpg'
  },
  {
    id: 'c2',
    name: 'Chaufa de Cerdo',
    price: 13.00,
    categoryId: 'chaufa',
    imageUrl: 'https://cdn0.recetasgratis.net/es/posts/5/1/3/chaufa_de_chancho_78315_orig.jpg'
  },
  {
    id: 'c3',
    name: 'Chaufa con Broaster',
    price: 13.00,
    categoryId: 'chaufa',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27Ez0fdWoSmR74S3Qpz5Vo74-OsM8spoS2w&s'
  },

  // Bebidas
  {
    id: 'dr1',
    name: 'Inca Kola Personal',
    price: 3.50,
    categoryId: 'bebidas',
    imageUrl: 'https://www.chilis.pe/_next/image?url=https%3A%2F%2Fdelosi-pidelo.s3.amazonaws.com%2Fchilis%2Fproducts%2Finca-kola-sabor-original-500-ml-202501071828190410.jpg&w=3840&q=75'
  },
  {
    id: 'dr2',
    name: 'Coca Cola Personal',
    price: 3.50,
    categoryId: 'bebidas',
    imageUrl: 'https://wongfood.vtexassets.com/arquivos/ids/727408/frontal-4850.jpg?v=638633469980270000'
  }
];