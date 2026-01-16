# Media Organizer (CLI)

Organize your photos, RAW files, and videos by date, remove duplicates, and optionally rename or delete items — all from a friendly, interactive terminal UI.

## Why
- Consolidate messy camera dumps into a clean year/day structure.
- Remove exact duplicates safely with a dry run preview.
- Quickly ignore, rename, or delete individual files before applying changes.

## Features
- Dry run by default: review planned operations before executing.
- Date-based organization: moves files into `YEAR/YYYY-MM-DD/` folders.
- Duplicate detection: size + MD5 content hash.
- Interactive review: selectable list using `ink-scroll-list`.
- Per-item actions: Ignore, Rename, Delete.
- Smart cleanup: prunes effectively empty folders (handles `.DS_Store`, `._` files).
- EXIF date extraction with fallback to file timestamps.

## Supported Formats
- Images: JPG, JPEG, PNG, GIF, BMP, TIFF, HEIC, HEIF, WebP
- RAW: CR2, CR3, CRW (Canon), RAF (Fujifilm), DNG, NEF, ARW, ORF, RW2
- Video: MP4, MOV, AVI, MKV, M4V, WMV, FLV, WebM

## Requirements
- Bun (recommended): https://bun.sh
- macOS, Linux, or Windows (terminal with Node/Bun support)

## Quick Start
Clone the repo and install dependencies:

```bash
git clone https://github.com/yourname/media-organizer.git
cd media-organizer
bun install
```

Run a dry run (recommended):

```bash
bun run media-organizer.js /path/to/media
```

Execute immediately (skips the prompt):

```bash
bun run media-organizer.js /path/to/media --execute
```

Build a standalone binary:

```bash
bun run build
# Produces ./media-organizer
```

## Interactive Review & Actions
When run without `--execute`, you get a scrollable list of planned operations.

Keyboard shortcuts:
- Up/Down: move selection
- I: ignore this file (no changes applied to it)
- D: delete this file (removes source instead of moving)
- R: rename this file
  - For move items: changes the destination filename.
  - For delete items: renames the file in-place (converts delete → rename).
- Enter or Y: execute all actions
- N: cancel

The list annotates your choices:
- `[IGNORED]` — item will be skipped
- `[DELETE OVERRIDE]` — item will be deleted
- `[RENAME -> newname.ext]` — item will be renamed to `newname.ext`

## Behavior Details
- Date source: Attempts EXIF `DateTimeOriginal`; if missing, falls back to file creation/modification time.
- Duplicates: Any two files with identical size and MD5 hash — one becomes a delete operation.
- Organized folders: Existing `YEAR/YYYY-MM-DD/` trees are not reprocessed.
- Cleanup: After execution, the tool removes empty directories up to the selected root, treating folders with only ignorable files as empty.
- Safety: Dry run is the default; explicit confirmation is required to make changes (or pass `--execute`).

## Examples
Dry run on current directory:

```bash
bun run media-organizer.js
```

Dry run on `~/Pictures`:

```bash
bun run media-organizer.js ~/Pictures
```

Execute on `~/Pictures`:

```bash
bun run media-organizer.js ~/Pictures --execute
```

## Tech Stack
- Bun + Node APIs: file system operations, hashing
- Ink + React: terminal UI components
- ink-scroll-list: fast, controlled list with selection
- ink-text-input: inline text input for renaming

## Binaries
- macOS: dist/media-organizer-macos-arm64, dist/media-organizer-macos-x64
- Linux: dist/media-organizer-linux-arm64, dist/media-organizer-linux-x64
- Windows: dist/media-organizer-windows-x64

These are self-contained binaries built with Bun’s compiler.

### Build Locally (Current OS)
```bash
bun run build
# Output placed in dist/media-organizer-<platform>-<arch>
```

To produce binaries for each OS/arch, run the build on that platform (or use CI):
- macOS (arm64/x64): run bun run build on Apple Silicon and Intel Macs.
- Linux (arm64/x64): run on AArch64/x86_64 hosts.
- Windows (x64): run in PowerShell or Command Prompt.

### Optional: Clean dist
```bash
bun run dist:clean
```

### CI Recommendation
GitHub Actions workflow included: `.github/workflows/release.yml`.
- Triggers on `v*` tags or manually via workflow dispatch.
- Builds on macOS, Linux, and Windows and uploads artifacts.
- Publishes a GitHub release with binaries and `SHA256SUMS.txt`.

## Notes & Limitations
- EXIF parsing is lightweight and covers common JPEG/TIFF paths; for HEIC/RAW variations, fallback to filesystem dates may occur.
- On Windows, `.Thumbs.db` and similar ignorable files are cleaned during folder pruning.
- Large directories are handled incrementally; performance depends on disk I/O.

## License
MIT
