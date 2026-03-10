#!/usr/bin/env node

/**
 * Default entry point for iflow-mcp_fedcal-tech-mcp
 * Starts the scrum-board server by default
 */

import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCRUM_BOARD_ENTRY = join(__dirname, 'servers', 'scrum-board', 'dist', 'index.js');

console.log('Starting scrum-board server...');

const child = spawn('node', [SCRUM_BOARD_ENTRY], {
  stdio: 'inherit',
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code || 0);
});

child.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});