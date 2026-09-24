// ===== LINK PREVIEW TESTS =====
// LinkedIn and most preview crawlers ignore SVG, so index.html has to point at
// a raster card that actually exists at the size it declares. A renamed or
// resized PNG would otherwise fail silently: the preview just shows no image.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const HTML = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const SITE = 'https://guillhermm.github.io/mathematikos/';

function meta(property) {
    const m = HTML.match(new RegExp(`<meta (?:property|name)="${property}" content="([^"]*)">`));
    return m ? m[1] : null;
}

// Width and height live in the IHDR chunk, right after the 8-byte signature
// and the chunk's own length and type fields.
function pngSize(file) {
    const buf = fs.readFileSync(file);
    const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    if (!buf.subarray(0, 8).equals(signature)) throw new Error(`${file} is not a PNG`);
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

describe('Link preview (Open Graph)', () => {
    it('og:image is an absolute PNG URL under the published site', () => {
        const image = meta('og:image');
        assert(image && image.startsWith(SITE), `og:image should start with ${SITE}, got ${image}`);
        assert(image.endsWith('.png'), `og:image should be a PNG, got ${image}`);
        assertEqual(meta('og:image:type'), 'image/png');
    });

    it('the referenced PNG exists and matches the declared size', () => {
        const file = path.join(ROOT, meta('og:image').slice(SITE.length));
        assert(fs.existsSync(file), `missing ${file}`);
        const { width, height } = pngSize(file);
        assertEqual(String(width), meta('og:image:width'));
        assertEqual(String(height), meta('og:image:height'));
        assertEqual(`${width}x${height}`, '1200x630');
    });

    it('uses the large-image Twitter card', () => {
        assertEqual(meta('twitter:card'), 'summary_large_image');
    });
});
