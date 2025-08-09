export const parseFrontmatter = (markdownContent) => {
  // Check if content starts with frontmatter
  if (!markdownContent.trim().startsWith('---')) {
    return { frontmatter: {}, content: markdownContent };
  }

  // Split the content
  const parts = markdownContent.split('---');
  
  if (parts.length < 3) {
    return { frontmatter: {}, content: markdownContent };
  }

  // Parse the frontmatter (YAML-like)
  const frontmatterText = parts[1].trim();
  const content = parts.slice(2).join('---').trim();
  
  const frontmatter = {};
  
  // Parse each line of frontmatter
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    
    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();
    
    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    // Handle arrays (tags)
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(item => 
        item.trim().replace(/^["']|["']$/g, '')
      );
    }
    
    frontmatter[key] = value;
  });

  return { frontmatter, content };
};