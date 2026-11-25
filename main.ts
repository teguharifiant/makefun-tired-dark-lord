// The Tired Dark Lord: a 100-word villain monologue.
// Node 22, standard library only. Writes the monologue to entry.txt
// (or to the path given as the first argument), byte-identical every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MONOLOGUE = [
  "Ah. The hero. Right on time, the one appointment I could not move.",
  "",
  "Sit. No, not there. That chair belongs to the cat, and the cat outranks you.",
  "",
  "Three hundred years I have kept this tower, the Ember Crown, the whole empire of dread, and still the kettle whistles at dawn, still the stairs complain, still my left knee files its grievances in triplicate.",
  "",
  "You want a duel? I have a monologue, a curse, and a schedule, and only one of them can be honoured.",
  "",
  "Draw your sword. But slowly. I have waited three centuries for someone to listen properly.",
].join("\n");

const out = process.argv[2] ?? "entry.txt";
// The gate: /output/entry.txt must be UTF-8 text of 1 to 600 characters.
if (MONOLOGUE.length < 1 || MONOLOGUE.length > 600) {
  throw new Error(`entry is ${MONOLOGUE.length} characters, outside the 1-600 gate`);
}
const dir = dirname(out);
if (dir !== ".") mkdirSync(dir, { recursive: true });
writeFileSync(out, MONOLOGUE + "\n", "utf8");
