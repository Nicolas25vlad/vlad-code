import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import { createSpecFile } from "../src/specs";

describe("Vlad spec scaffolding", () => {
	let root: string;

	beforeEach(async () => {
		root = await fs.mkdtemp(path.join(os.tmpdir(), "vlad-spec-test-"));
	});

	afterEach(async () => {
		await fs.rm(root, { recursive: true, force: true });
	});

	it("creates a structured, version-control-friendly spec in the project directory", async () => {
		const filePath = await createSpecFile(root, "managed-memory");

		expect(filePath).toBe(path.join(root, ".vlad", "specs", "managed-memory.md"));
		expect(await fs.readFile(filePath, "utf8")).toBe(
			"# Managed Memory\n\n" +
				"## Goal\n\n## Context\n\n## Scope\n\n### In scope\n\n- \n\n### Out of scope\n\n- \n\n" +
				"## Constraints\n\n- \n\n## Acceptance criteria\n\n- [ ] \n\n## Interfaces\n\n- \n\n## Verification\n\n- [ ] \n",
		);
	});

	it("rejects traversal and multiline titles before creating files", async () => {
		await expect(createSpecFile(root, "../outside")).rejects.toThrow("Spec slug");
		await expect(createSpecFile(root, "valid-spec", "first\nsecond")).rejects.toThrow("Title");
		expect(await fs.readdir(root)).toEqual([]);
	});

	it("does not overwrite an existing specification", async () => {
		const filePath = await createSpecFile(root, "keep-existing");
		await expect(createSpecFile(root, "keep-existing", "Replacement")).rejects.toMatchObject({
			code: "EEXIST",
		});
		expect(await fs.readFile(filePath, "utf8")).toContain("# Keep Existing");
	});
});
