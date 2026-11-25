import * as fs from "node:fs/promises";
import * as path from "node:path";

const SPEC_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function titleFromSlug(slug: string): string {
	return slug.replace(
		/(^|-)([a-z])/g,
		(_match, separator: string, letter: string) => `${separator ? " " : ""}${letter.toUpperCase()}`,
	);
}

function validateTitle(title: string): string {
	const normalized = title.trim();
	if (!normalized || normalized.length > 160 || /[\r\n\u0000-\u001f\u007f]/.test(normalized)) {
		throw new Error("Title must contain 1–160 characters on a single line");
	}
	return normalized;
}

function renderSpecTemplate(title: string): string {
	return `# ${title}\n\n## Goal\n\n## Context\n\n## Scope\n\n### In scope\n\n- \n\n### Out of scope\n\n- \n\n## Constraints\n\n- \n\n## Acceptance criteria\n\n- [ ] \n\n## Interfaces\n\n- \n\n## Verification\n\n- [ ] \n`;
}

/** Create a version-controlled SDD starter without replacing an existing spec. */
export async function createSpecFile(root: string, slug: string, title?: string): Promise<string> {
	if (!SPEC_SLUG.test(slug) || slug.length > 80) {
		throw new Error(
			"Spec slug must be lowercase letters and numbers separated by single hyphens (max 80 characters)",
		);
	}
	const specTitle = validateTitle(title ?? titleFromSlug(slug));
	const directory = path.join(root, ".vlad", "specs");
	await fs.mkdir(directory, { recursive: true });
	const filePath = path.join(directory, `${slug}.md`);
	await fs.writeFile(filePath, renderSpecTemplate(specTitle), { flag: "wx" });
	return filePath;
}

