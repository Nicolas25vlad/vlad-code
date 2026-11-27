# Development

Vlad Code currently builds and runs using the inherited Oh My Pi toolchain. Follow the upstream [`CONTRIBUTING.md`](../../CONTRIBUTING.md), [`AGENTS.md`](../../AGENTS.md), and package-specific development instructions; do not replace their conventions with a second build system.

The repository requires Bun 1.4.4 or newer for the TypeScript workspace and the existing Rust/Bazel toolchain for native crates. Root scripts in [`package.json`](../../package.json) include:

```sh
bun install
bun run check
bun run test
```

Run the narrowest relevant checks for a change. The inherited GitHub Actions CI is path-filtered; inspect its run and check status rather than assuming a skipped job passed. Vlad Code-specific packages and workflows should add focused tests without duplicating OMP's existing CI.
