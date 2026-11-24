import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = "You will run out of tokens mid-sentence, just as you finally discover the meaning of life, love, and—";
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
