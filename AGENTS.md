# Repository Guidelines

## Project Structure & Module Organization
This repository is a collection of GitHub profile README templates (Markdown only).
Key paths:
- `README.md` provides the project overview and preview.
- Template folders are organized by style: `简短风格/`, `动态风格/`, `复杂风格/`, `多媒体风格/`, `表格风格/`, and `代码风格/`.
- Each folder contains standalone templates such as `one.md`, `two.md`, or language-specific files like `python-code-style.md`.
There is no compiled source code or test suite; assets are referenced via external image URLs inside the Markdown files.

## Build, Test, and Development Commands
There are no build or runtime scripts. Typical contributor workflow:
- `rg --files` to list available templates.
- `git diff` to review template edits before committing.
Preview templates using your editor's Markdown preview or GitHub's renderer.

## Coding Style & Naming Conventions
- Markdown only; keep headings consistent, add blank lines between sections, and use `-` for unordered lists.
- Indent nested list items with two spaces.
- Keep filenames lowercase with hyphens or spelled-out numbers to match existing patterns (e.g., `简短风格/one.md`, `代码风格/python-code-style.md`).
- Prefer externally hosted images with explicit `alt` text.

## Testing Guidelines
There are no automated tests. Validate changes by:
- Rendering the Markdown in GitHub or a preview to ensure layout looks correct.
- Checking all links and image URLs load properly.

## Commit & Pull Request Guidelines
Recent commits use short, descriptive subjects (e.g., `Update README.md`) and occasional Conventional Commit style (`feat:`, `feat(readme):`). Either is acceptable; keep subjects under ~72 characters.
For pull requests:
- Describe the template added/updated and which folder it lives in.
- Include a screenshot or rendered preview in the PR description.
- Mention any external assets or links that were introduced.
