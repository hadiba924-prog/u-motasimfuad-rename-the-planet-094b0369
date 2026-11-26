import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: Mercury renamed "The Intern".
// Mercury's year lasts only 88 Earth days, and its sun-facing side
// reaches about 430 C, so it crams a whole year into 88 days and
// still gets roasted alive every single day.
const LINE =
  "Mercury: 'The Intern' \u2014 it crams a whole year into 88 days and still gets roasted alive every day.";

const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
