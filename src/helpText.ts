export function printHelp(): void {
  console.log(`
Media File Organizer (Bun Edition)

Usage:
  bun run media-organizer.ts [path] [options]

Arguments:
  path         Path to scan (default: current directory)

Options:
  --execute    Execute the operations (default is dry run)
  --help       Show this help message

Supported Formats:
  Images: JPG, PNG, GIF, BMP, TIFF, HEIC, HEIF, WebP
  RAW:    CR2, CR3, CRW (Canon), RAF (Fujifilm), DNG, NEF, ARW, ORF, RW2
  Video:  MP4, MOV, AVI, MKV, M4V, WMV, FLV, WebM

Description:
  Recursively scans the current directory for images, RAW files, and videos.
  Removes exact duplicates (same size + content hash).
  Organizes files into /YEAR/YYYY-MM-DD/ based on EXIF or file dates.

Examples:
  bun run media-organizer.ts                        # Dry run in current directory
  bun run media-organizer.ts /path/to/photos        # Dry run in specified path
  bun run media-organizer.ts ~/Pictures --execute   # Organize files in ~/Pictures
  `);
}
