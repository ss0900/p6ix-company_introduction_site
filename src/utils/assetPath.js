/**
 * Get the correct path for assets in the public folder.
 * Handles GitHub Pages base path automatically via Vite's import.meta.env.BASE_URL
 * Also handles URI encoding for paths with special characters (spaces, Korean, etc.)
 */
export function getAssetPath(path) {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Smart encoding: if the path is not already encoded, encode it.
  // This fixes issues with spaces and Korean characters in CSS url() and HTML src attributes.
  let finalPath = cleanPath;
  try {
    if (decodeURI(cleanPath) === cleanPath) {
      // If decoding doesn't change it, it implies it's not encoded (or has nothing to encode).
      // We apply encoding to be safe (e.g. for spaces/Korean).
      finalPath = encodeURI(cleanPath);
    }
  } catch (e) {
    // Fallback for malformed URIs - unlikely but safe
    finalPath = cleanPath;
  }

  return `${base}${finalPath}`;
}
