import { mkdirSync, writeFileSync } from "node:fs";

// Dad Joke Showdown entry: one dad joke, written to /output/entry.txt.
// Gate: UTF-8 text of 1 to 200 characters, not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

const JOKE = `My calendar says my days are numbered. I said, "Relax, it's only the 24th."`;

function assertGate(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(`entry must be ${MIN_CHARS}-${MAX_CHARS} characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

assertGate(JOKE);
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, JOKE, "utf8");
