export interface Category {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  productCount: number;
  featured?: boolean;
  highlights: string[];
}

export interface ProductVariant {
  name: string;
  finish?: string;
  dimensions?: string;
  priceEstimate?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string; // Human readable name
  categorySlug: string; // Exact match with Category slug
  shortDescription: string;
  fullDescription: string;
  images: string[];
  featured?: boolean;
  specifications: {
    material: string;
    finish: string;
    thickness: string;
    warranty: string;
    waterproof: boolean;
    termiteProof: boolean;
    fireRetardant?: boolean;
    suitableFor: string[];
  };
  variants?: ProductVariant[];
  tags: string[];
}

export interface CollectionFilterState {
  searchQuery: string;
  selectedFinish: string;
  selectedMaterial: string;
  waterproofOnly: boolean;
  sortBy: 'featured' | 'name-asc' | 'name-desc';
}
