export interface ProductVariant {
  name: string;
  description: string;
}

export interface ProductSubCategory {
  name: string;
  tagline: string;
  imageUrl?: string;
  /** When true, the image renders at its natural aspect ratio with no cropping or zoom (object-contain). */
  showFullImage?: boolean;
  variants: ProductVariant[];
  features: string[];
  uses?: string[];
}

export interface SizeChartRow {
  grade: string;
  nutsPerKg: string;
  size: string;
  usage: string;
}

export interface PackagingOption {
  name: string;
  sizes: string;
}

export interface NutritionItem {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "industrial" | "agricultural";
  description: string;
  longDescription?: string;
  specifications?: Record<string, string>;
  packagingDetails?: string;
  exportQuality?: string;
  imageUrl: string;
  isFeatured?: boolean;
  /** Dedicated thumbnail used in ProductCard and Related Products. Falls back to imageUrl if not set. */
  thumbnailUrl?: string;
  subCategories?: ProductSubCategory[];
  sizeChart?: SizeChartRow[];
  packagingOptions?: PackagingOption[];
  nutritionInfo?: { per: string; items: NutritionItem[] };
  /** Full-width info image sections displayed below sub-category sections */
  infoSections?: { title: string; imageUrl: string }[];
  /** Generic data table (grades, specs, etc.) shown below sub-category sections */
  infoTable?: { caption?: string; headers: string[]; rows: string[][] };
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  country: string;
  flag: string;
  message: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  product?: string;
  message: string;
}
