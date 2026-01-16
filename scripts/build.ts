#!/usr/bin/env bun

import { spawn } from 'child_process';
import { mkdirSync } from 'fs';
import { join } from 'path';

const platformMap: Record<string, string> = { darwin: 'macos', linux: 'linux', win32: 'windows' };
const platform = platformMap[process.platform] || process.platform;
const arch = process.arch;
const isWindows = platform === 'windows';

const outfile = join('dist', `media-organizer-${platform}-${arch}${isWindows ? '.exe' : ''}`);

mkdirSync('dist', { recursive: true });

console.log(`Building for platform=${platform} arch=${arch} -> ${outfile}`);

const args = ['build', './media-organizer.ts', '--compile', '--outfile', outfile];
const child = spawn('bun', args, { stdio: 'inherit' });

child.on('exit', (code) => {
  if (code === 0) {
    console.log(`Build complete: ${outfile}`);
  } else {
    console.error(`Build failed with code ${code}`);
  }
  process.exit(code === null ? 1 : code);
});
