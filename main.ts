// news-image-20261118 — "THE WORLD IN ONE DAY": one front page summing up
// Wednesday 18 November 2026 in 48 stories. The finished image is entry.png
// beside this file; this program copies it to the output directory.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
