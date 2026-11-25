# ADR 0001: Keep Oh My Pi as the runtime foundation

- **Status:** Accepted
- **Date:** 2026-11-24

## Decision

Develop Vlad Code as a public GitHub fork of `can1357/oh-my-pi`. Preserve its commit ancestry, MIT license, notices, build system, and runtime capabilities. Keep `upstream` as the local Git remote and `origin` as the Vlad Code fork. Track the last successfully integrated OMP release in [`UPSTREAM_VERSION`](../../UPSTREAM_VERSION).

## Rationale

OMP already supplies the coding-agent runtime and extensibility surfaces the product needs. A fork keeps changes reviewable against upstream and avoids rebuilding those systems. Release monitoring creates issues only; it never merges upstream code or advances the integrated version automatically.

## Consequences

- Upstream synchronization remains a reviewed compatibility task.
- Vlad-specific features must be clearly distinguished from inherited OMP behavior.
- Update `UPSTREAM_VERSION` only when an upstream release is successfully integrated.
- Preserve all applicable upstream attribution and license text.
