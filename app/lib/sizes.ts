import stock from "../../nike_pegasus_size_stock_b2ebb9fac7f74d6a8bb3432d7642176f.json";

export type StockStatus = "in_stock" | "low_stock" | "sold_out";

export type SizeStock = {
  sku: string;
  style_code: string;
  product_name: string;
  colorway: string;
  price: number;
  size_label: string;
  size_us_men: number;
  size_us_women: number;
  size_eu: string;
  display_order: number;
  in_stock: boolean;
  stock_quantity: number;
  stock_status: StockStatus;
  launch_date: string;
};

export const sizes: SizeStock[] = (stock as SizeStock[])
  .slice()
  .sort((a, b) => a.display_order - b.display_order);

export const product = {
  name: sizes[0].product_name,
  colorway: sizes[0].colorway,
  styleCode: sizes[0].style_code,
  price: sizes[0].price,
};

export const fmtSize = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));
