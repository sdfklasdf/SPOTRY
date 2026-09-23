import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const required = [
  ['assets/generated/ios-icon-1024.png', 1024, 1024, 2],
  ['assets/generated/android-adaptive-foreground.png', 1024, 1024, 6],
  ['assets/generated/android-adaptive-monochrome.png', 1024, 1024, 6],
  ['assets/generated/splash-icon.png', 1024, 1024, 6],
];

function readPngHeader(buffer) {
  const signature = buffer.subarray(0, 8).toString('hex');
  if (signature !== '89504e470d0a1a0a') throw new Error('Not a PNG');
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
    colorType: buffer[25],
  };
}

for (const [rel, width, height, colorType] of required) {
  const path = join(root, rel);
  await access(path);
  const header = readPngHeader(await readFile(path));
  if (header.width !== width || header.height !== height) throw new Error(`${rel}: expected ${width}x${height}`);
  if (header.colorType !== colorType) throw new Error(`${rel}: unexpected PNG color type ${header.colorType}`);
}

const configPath = join(root, 'integration-templates/expo/app.config.stage8.example.json');
const config = JSON.parse(await readFile(configPath, 'utf8'));
const adaptive = config?.expo?.android?.adaptiveIcon;
if (!adaptive?.foregroundImage || !adaptive?.monochromeImage || !adaptive?.backgroundColor) throw new Error('Android adaptive icon config incomplete');
if (config?.expo?.scheme !== 'spotry') throw new Error('Deep link scheme must remain spotry');

console.log('asset/config validation PASS');
