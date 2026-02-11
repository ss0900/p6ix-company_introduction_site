const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/pages/UnifierPage.jsx',
  'src/pages/TimeManagementPage.jsx',
  'src/pages/PPMPage.jsx',
  'src/pages/OPCPage.jsx',
  'src/pages/EPPMPage.jsx',
  'src/pages/AconexPage.jsx',
  'src/components/SubPage.jsx',
  'src/components/panels/HoverExpandCard.tsx',
  'src/components/panels/ExpandableCard.tsx',
  'src/components/panels/EppmMenuSection.tsx',
  'src/components/panels/AconexMenuSection.tsx',
  'src/components/Header.jsx'
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing file: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace url(${...}) with url('${...}')
  content = content.replace(/url\(\$\{([^}]+)\}\)/g, "url('${$1}')");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Modified: ${file}`);
  } else {
    console.log(`No changes needed: ${file}`);
  }
});

console.log('CSS URL fix complete.');
