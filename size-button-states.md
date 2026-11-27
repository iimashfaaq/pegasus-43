# Size button states

Source: `nike_pegasus_size_stock_b2ebb9fac7f74d6a8bb3432d7642176f.json`, driven by `stock_status`. Each button is about 80 × 48 px (4 columns, 8 px gap, 343 px content width), well above the 44 px minimum touch target, so it is easy to tap on a phone.

| State | Example | Color | Text | Tappable |
|---|---|---|---|---|
| `in_stock` | HV7521-001-085 (198 left) | White fill, dark grey border, black text; selected = black fill, white text | `M 8.5` / `W 10` | Yes |
| `low_stock` | HV7521-001-090 (3 left) | Same as `in_stock`, plus a small amber dot, top right | `M 9` / `W 10.5`; on tap, message line shows `Only 3 left` (from `stock_quantity`) | Yes |
| `sold_out` | HV7521-001-100 (0 left) | Light grey fill, grey text, dashed border, diagonal line | `M 10` / `W 11.5`; on tap, message line shows `Out of stock` | Yes, it can be selected, but Add to Bag stays unavailable for it |

Don't rely on color alone: low stock always shows the "Only N left" text, and sold out always shows the diagonal line and the "Out of stock" text.
