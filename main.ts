// Everyday Wonder — one sentence, written to /output/entry.txt.
// Deterministic, standard library only, no network, no model calls.
// The sentence is hard-coded: the entry is the writing, not a generator.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "The escalator handrail runs a little faster than the steps, so my hand arrives at the top before I do, a scout sent ahead of the rest of me.";

// The gate: one line, 1-200 characters, not only whitespace.
if (
  SENTENCE.length < 1 ||
  SENTENCE.length > 200 ||
  SENTENCE.includes("\n") ||
  SENTENCE.trim().length === 0
) {
  throw new Error("entry sentence fails the 1-200 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE + "\n", "utf8");
