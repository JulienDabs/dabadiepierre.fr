// sitemap-crawl.js
const SitemapGenerator = require('sitemap-generator');

// point to your deployed URL (or localhost:3000 if running dev-server)
const generator = SitemapGenerator('https://www.pierredabadie.fr', {
  stripQuerystring: false,
  filepath: './sitemap.xml',
  maxDepth: 0,        // 0 = no depth limit
  maxEntriesPerFile: 50000,
});

generator.on('done', () => {
  console.log('✅ sitemap.xml generated in public/');
});

generator.start();
