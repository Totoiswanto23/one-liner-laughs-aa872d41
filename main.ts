// One-Liner Laughs — a single funny line, written to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not whitespace-only, one line.
// Judge: setup + payoff, laugh-out-loud, surprise twist, fresh, tight.
import { mkdirSync, writeFileSync } from "node:fs";

// Setup: a smart fridge acting like a partner. Payoff: the breakup line
// "We need to talk" — aimed at the reader's 2 a.m. snacking.
const joke =
  "My smart fridge just sent me a calendar invite: 'We need to talk about your 2 a.m. decisions.'";

// The gate only accepts 1-200 characters of UTF-8 text, so check first.
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
}
if (joke.trim().length === 0) {
  throw new Error("joke must not be whitespace-only");
}
if (joke.includes("\n") || joke.includes("\r")) {
  throw new Error("joke must be a single line");
}

// The harness runs with /output mounted; local runs use MAKEFUN_OUTPUT_DIR.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts every character, 1-200.
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
console.log(`${joke.length} chars: ${joke}`);
