import { expect, it } from "bun:test";
import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import { createSpecFile } from "../src/specs";

it("creates a structured spec and rejects unsafe or replacing writes", async () => {
	const root = await fs.mkdtemp(path.join(os.tmpdir(), "vlad-spec-test-"));
	try {
		await expect(createSpecFile(root, "../outside")).rejects.toThrow("Spec slug");
		await expect(createSpecFile(root, "valid-spec", "first\nsecond")).rejects.toThrow("Title");
		expect(await fs.readdir(root)).toEqual([]);

		const filePath = await createSpecFile(root, "managed-memory");
		const content = await fs.readFile(filePath, "utf8");
		expect(filePath).toBe(path.join(root, ".vlad", "specs", "managed-memory.md"));
		expect(content.startsWith("# Managed Memory\n")).toBe(true);
		expect(
			["## Goal", "## Context", "## Scope", "## Constraints", "## Acceptance criteria", "## Interfaces", "## Verification"].every(
				heading => content.includes(heading),
			),
		).toBe(true);
		await expect(createSpecFile(root, "managed-memory", "Replacement")).rejects.toMatchObject({ code: "EEXIST" });
		expect(await fs.readFile(filePath, "utf8")).toBe(content);
	} finally {
		await fs.rm(root, { recursive: true, force: true });
	}
});
