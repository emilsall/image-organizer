export const IMAGE_EXTENSIONS: string[] = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.tif', '.heic', '.heif', '.webp'];
export const RAW_EXTENSIONS: string[] = ['.cr2', '.cr3', '.crw', '.raf', '.raw', '.dng', '.nef', '.arw', '.orf', '.rw2'];
export const VIDEO_EXTENSIONS: string[] = ['.mp4', '.mov', '.avi', '.mkv', '.m4v', '.wmv', '.flv', '.webm'];

export const IGNORABLE_FILENAMES = new Set<string>(['.DS_Store', 'Thumbs.db', '.localized']);
export function isIgnorableFile(name: string): boolean {
  return IGNORABLE_FILENAMES.has(name) || name.startsWith('._');
}
