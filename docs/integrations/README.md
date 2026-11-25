# Integration assessment

Research checked the current public upstream repositories and documentation. These are references, not implemented integrations.

| Component | Observed foundation | Vlad Code status |
| --- | --- | --- |
| [Oh My Pi](https://github.com/can1357/oh-my-pi) | TypeScript/Bun monorepo with Rust crates; existing CLI/TUI, agent runtime, subagents, and Tern Surface Protocol. MIT licensed. | Active fork foundation. Inherited source and CI are preserved. |
| [Hindsight](https://github.com/vectorize-io/hindsight) | MIT-licensed Python memory service, API/client packages, Docker deployment, and a documented embedded `pg0` database option. | Not integrated. Deployment, runtime requirements, and lifecycle ownership still need evaluation; no managed service is claimed. |
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | MIT-licensed Python agent with experience-driven skill creation/improvement, memory nudges, and cross-session learning. | Research reference only. Reuse should target learning mechanisms, not replace OMP's agent runtime. |
| [Vlad Prompts](https://github.com/Nicolas25vlad/vlad-prompts) | Provider-neutral core prompts, host adapters, and separately packaged Agent Skills. | Not integrated. Keep repository-owned and user-generated skills distinct and avoid duplicate workflows. |
| [Tern](https://stencil.so/tern) | OMP already supports Tern's Surface Protocol; Tern also documents a separate Luau plugin SDK. | Existing OMP protocol support is inherited. No Vlad-specific plugin or visual extension is implemented. |

Before adding copied or bundled code, verify its current license and preserve required notices. See [`THIRD_PARTY_NOTICES.md`](../../THIRD_PARTY_NOTICES.md).
