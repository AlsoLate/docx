const fs = require('fs');
const html = fs.readFileSync('nap.html', 'utf8');
const classRegex = /class="([^"]+)"/g;
let match;
const classes = new Set();
while ((match = classRegex.exec(html)) !== null) {
  match[1].split(' ').forEach(c => classes.add(c));
}
console.log(Array.from(classes).filter(c => c.includes('vp-') || c.includes('plugin') || c.includes('tab')));
