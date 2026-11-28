import Image from "next/image";
import SizePicker from "./components/SizePicker";
import { product, sizes } from "./lib/sizes";

const photos = [1, 2, 3].map((n) => ({
  src: `/photos/pegasus-43-${n}.svg`,
  alt: `${product.name} in ${product.colorway}, view ${n} of 3`,
}));

export default function Page() {
  return (
    <main className="pdp">
      <div className="photo-box" data-testid="main-photo">
        <Image
          src={photos[0].src}
          alt={photos[0].alt}
          fill
          sizes="(max-width: 600px) 100vw, 600px"
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>

      <div className="content">
        <p className="eyebrow">Men&apos;s Road Running Shoes</p>
        <h1 className="title">{product.name}</h1>
        <p className="colorway">
          {product.colorway} · {product.styleCode}
        </p>
        <p className="price" data-testid="price">
          ${product.price.toFixed(0)}
        </p>

        <SizePicker sizes={sizes} />
      </div>
    </main>
  );
}
