export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'buyer';
  location: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  location: string;
  sellerId: string;
  sellerName: string;
  imageUrl: string;
  createdAt: Date;
}

export interface MarketPrice {
  cropName: string;
  currentPrice: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
}