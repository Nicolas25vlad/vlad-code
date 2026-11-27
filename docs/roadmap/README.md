# Roadmap status

Vlad Code is based on the inherited Oh My Pi source fork. Its coding-agent runtime and existing capabilities are available; Vlad-specific product systems are being built separately.

## M0 — Foundation

- [x] Public fork at [Nicolas25vlad/vlad-code](https://github.com/Nicolas25vlad/vlad-code), with upstream ancestry preserved.
- [x] Explicit integrated-release baseline and six-hour/manual upstream release monitoring.
- [x] Existing OMP CI, source, and license retained.
- [x] Default branch protection requires a reviewed pull request, one approval, resolved conversations, and disallows force pushes/deletion.
- [ ] Complete and confirm an inherited OMP build and test run in CI.
- [ ] Add a required CI status check to branch protection after validating stable check behavior for the repository's path-filtered workflows.

## Later milestones

Vlad-owned memory service and learning policies, Vlad Prompts installation, full engineering governance, Vlad Ship, continuous agents, and Vlad-specific Tern workflows or visuals are not implemented. The inherited runtime does include configurable memory backends and learning tools; see the [integration assessment](../integrations/README.md). Do not present those inherited capabilities as a managed Vlad service.
