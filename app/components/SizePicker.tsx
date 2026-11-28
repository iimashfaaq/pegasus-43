"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { fmtSize, type SizeStock } from "../lib/sizes";

function messageFor(size: SizeStock | undefined): string {
  if (!size) return "";
  if (size.stock_status === "sold_out") return "Out of stock";
  if (size.stock_status === "low_stock") return `Only ${size.stock_quantity} left`;
  return "";
}

export default function SizePicker({ sizes }: { sizes: SizeStock[] }) {
  const [selected, setSelected] = useState<number>(-1);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = selected >= 0 ? sizes[selected] : undefined;
  const canAdd = !!current && current.stock_status !== "sold_out";

  // Roving tabindex + arrow keys, per the ARIA radio group pattern.
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const cols = 4;
    const moves: Record<string, number> = {
      ArrowRight: 1,
      ArrowDown: cols,
      ArrowLeft: -1,
      ArrowUp: -cols,
    };
    let next = i;
    if (e.key in moves) next = Math.min(sizes.length - 1, Math.max(0, i + moves[e.key]));
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = sizes.length - 1;
    else return;
    e.preventDefault();
    setSelected(next);
    refs.current[next]?.focus();
  };

  const tabStop = selected >= 0 ? selected : 0;

  return (
    <section className="sizes" aria-labelledby="size-heading">
      <h2 id="size-heading" className="sizes__heading">
        Select size
      </h2>
      <div
        className="size-grid"
        data-testid="size-grid"
        role="radiogroup"
        aria-labelledby="size-heading"
        style={{ ["--rows" as string]: Math.ceil(sizes.length / 4) }}
      >
        {sizes.map((s, i) => {
          const soldOut = s.stock_status === "sold_out";
          const isSel = i === selected;
          const men = fmtSize(s.size_us_men);
          const women = fmtSize(s.size_us_women);
          const status =
            s.stock_status === "low_stock" ? ", low stock" : soldOut ? ", sold out" : "";
          return (
            <button
              key={s.sku}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="radio"
              aria-checked={isSel}
              aria-label={`Men's ${men}, women's ${women}${status}`}
              tabIndex={i === tabStop ? 0 : -1}
              className={`size-btn size-btn--${s.stock_status}`}
              data-testid={soldOut ? "size-button-sold-out" : "size-button"}
              data-sku={s.sku}
              onClick={() => setSelected(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className="size-btn__men">M {men}</span>
              <span className="size-btn__women">W {women}</span>
              {s.stock_status === "low_stock" && <span className="size-btn__dot" aria-hidden />}
            </button>
          );
        })}
      </div>
      <p className="size-msg" data-testid="size-message" aria-live="polite">
        {messageFor(current)}
      </p>
      <button type="button" className="add-btn" disabled={!canAdd} aria-disabled={!canAdd}>
        {current?.stock_status === "sold_out" ? "Unavailable in this size" : "Add to Bag"}
      </button>
    </section>
  );
}
