# Prompt: Pegasus 43 product page

Build a phone-first product page for the Nike Pegasus 43 (Black/White-Volt, $140) in Next.js (App Router, TypeScript). Design for a 375 px wide screen first, then scale up.

**Sizes:** Read every size from `nike_pegasus_size_stock_b2ebb9fac7f74d6a8bb3432d7642176f.json`. Sort by `display_order` and set the button state from `stock_status`. Don't hard-code sizes.

**Size buttons:** Style each state as `size-button-states.md` describes:
- Size and grid: 4 columns with an 8 px gap inside a 343 px content width (16 px side gutters), so each button is about 80 × 48 px. 26 sizes make 7 rows.
- Content: two lines. Line 1 is the men's size (`size_us_men`, "M 9"), 14/20 medium. Line 2 is the women's size (`size_us_women`, "W 10.5"), 12/16, secondary text color.
- `in_stock`: white fill, dark grey border, black text, tappable. Selected = black fill, white text.
- `low_stock`: same as `in_stock`, plus an amber dot top right. Tappable. When selected, the message line under the grid shows "Only N left" from `stock_quantity`.
- `sold_out`: light grey fill, grey text, dashed border, diagonal line. Tappable: selecting it shows "Out of stock" in the message line, and Add to Bag stays unavailable for that size.
- The grid is a `radiogroup` named "Select size"; each button is a `radio`.

**No layout shift:** The size grid must not move when the photos load late. Reserve the photo area with `aspect-ratio: 375 / 280` and a placeholder, use `next/image` with `fill` inside that box, and keep the size grid's height fixed from the first render. Aim for a Cumulative Layout Shift near 0.

**Done when:** All 26 sizes render in order, the three states look and behave as above, a shopper can select any size and see its stock message, and the page has no visible jump while photos load on a slow 3G connection.

# Prompt: Slow 4G phone trace

Record a Slow 4G phone trace with Chrome DevTools MCP on a 375 x 812 CSS px viewport at 3x pixel density with mobile on, Slow 4G (150 ms round trip, 1638.4 Kbps) and a 4x CPU slowdown. Do not judge the size grid from a desktop trace or an unthrottled trace. Report back with what moves in the grid.

Resource: Web Platform Slow 4G Mobile Check Profile.yaml.
