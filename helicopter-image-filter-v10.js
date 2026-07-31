
// Replace the existing Wikimedia filter with this version
const BAD_IMAGE_PATTERNS = /logo|patch|emblem|badge|map|diagram|svg|drawing|lineart|sketch|illustration|render|rendering|cutaway|blueprint|technical|schematic|cockpit|interior|instrument|panel|cabin|flight deck|maintenance|engine|rotor head|component|placard|display board|museum/i;

const pages = Object.values(data.query?.pages || {})
  .filter(p => p.imageinfo && p.imageinfo[0] && (p.imageinfo[0].thumburl || p.imageinfo[0].url))
  .filter(p => !BAD_IMAGE_PATTERNS.test(p.title))
  .filter(p => {
      const info = p.imageinfo[0];
      const w = info.thumbwidth || 1400;
      const h = info.thumbheight || 900;
      return w >= 1000 && (w / h) < 3.0;
  });
