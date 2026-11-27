# Architecture

Vlad Code is a source fork of [Oh My Pi](https://github.com/can1357/oh-my-pi), not a replacement runtime. The existing TypeScript/Bun workspace, Rust crates, CLI/TUI, provider layer, sessions, tools, subagents, MCP support, and Tern Surface Protocol remain the foundation.

Keep Vlad-specific behavior at the smallest existing extension point. Inspect the relevant OMP package before adding a new package or changing the agent loop. Preserve upstream APIs and copyright/license notices; record compatibility-impacting upstream integrations in [`UPSTREAM_VERSION`](../../UPSTREAM_VERSION).

No Vlad-specific memory, learning, shipping, or orchestration runtime has been implemented yet. See the [integration assessment](../integrations/README.md) and [roadmap](../roadmap/README.md) for current status.
