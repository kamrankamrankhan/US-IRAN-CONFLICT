/**
 * Fails fast before `next start` if `.next` is missing or incomplete (avoids ENOENT on routes-manifest).
 */
const fs = require('fs');
const path = require('path');

const manifest = path.join(process.cwd(), '.next', 'routes-manifest.json');
const buildId = path.join(process.cwd(), '.next', 'BUILD_ID');

if (!fs.existsSync(manifest) || !fs.existsSync(buildId)) {
  console.error('\n[!] Production build output is missing or incomplete (.next/).');
  console.error('    Fix:  npm run clean && npm run build');
  console.error('    Then: npm run start');
  console.error('    For local work, prefer: npm run dev\n');
  process.exit(1);
}
