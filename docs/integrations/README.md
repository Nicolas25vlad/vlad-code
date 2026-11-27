# Integration assessment

This assessment separates inherited runtime capabilities from Vlad-specific integrations.

| Component | Observed foundation | Vlad Code status |
| --- | --- | --- |
| [Oh My Pi](https://github.com/can1357/oh-my-pi) | TypeScript/Bun monorepo with Rust crates; existing CLI/TUI, agent runtime, subagents, and Tern Surface Protocol. MIT licensed. | Active fork foundation. Inherited source, CI, and compatibility contracts are preserved. |
| [Hindsight](https://github.com/vectorize-io/hindsight) | MIT-licensed Python memory service, API/client packages, Docker deployment, and a documented embedded `pg0` database option. | The runtime includes a remote Hindsight backend. Users must configure and operate the service; Vlad Code does not install or manage it. |
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | MIT-licensed Python agent with experience-driven skill creation/improvement, memory nudges, and cross-session learning. | Research reference only. The inherited runtime has its own learning tools; no Hermes code or integration is included. |
| [Vlad Prompts](https://github.com/Nicolas25vlad/vlad-prompts) | Provider-neutral core prompts, host adapters, and separately packaged Agent Skills. | Planned. No package or installer is wired into this fork; repository-owned prompts and user skills remain separate. |
| [Tern](https://stencil.so/tern) | Oh My Pi supports Tern's Surface Protocol; Tern also documents a separate Luau plugin SDK. | Existing protocol support is inherited. No Vlad-specific plugin or workflow is implemented. |

Before adding copied or bundled code, verify its current license and preserve required notices. See [`THIRD_PARTY_NOTICES.md`](../../THIRD_PARTY_NOTICES.md).
