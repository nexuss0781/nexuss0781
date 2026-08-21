# Nexuss-Monitor

| Repository metadata | Details |
|---|---|
| Repository | [nexuss0781/Nexuss-Monitor](https://github.com/nexuss0781/Nexuss-Monitor) |
| Visibility | Public |
| Fork | No |
| Archived | No |
| Default branch | `main` |
| Primary language | Python |
| Topics | None listed |
| Repository description | Not provided |

---
## NexussMonitor

NexussMonitor is a command-line uptime monitor. It lets you — or an AI agent —
add, check, and track monitors for any API, website, or service, against a
Nexuss-Cronjob server.

- **Interactive** for humans (`nexuss-monitor add`)
- **Non-interactive** for AI agents (`nexuss-monitor add --url ... --json`)

## Install

```bash
pip install nexuss-monitor
```

## Quick start

```bash
# point at your server and log in (stores token in ~/.nexuss-monitor/config.json)
nexuss-monitor login --api-url https://your-app.onrender.com

# add a monitor
nexuss-monitor add --name gateway --url https://your-api.onrender.com/health

# run all checks now (use this as your cron command)
nexuss-monitor check

# see everything
nexuss-monitor list
nexuss-monitor status
```

## Commands

| Command | Description |
| --- | --- |
| `login` | Log in and store your API token |
| `register` | Create an account on the server |
| `list` | List all monitors |
| `add` | Add a monitor (`--name --url`, optional `--method --interval --header --body`) |
| `status [id-or-name]` | Show status/uptime for all monitors or one |
| `history <id-or-name>` | Show recent check results |
| `update <id-or-name>` | Change name/url/method/interval/headers/body |
| `remove <id-or-name>` | Delete a monitor |
| `check` | Trigger checks on every monitor (cron) |
| `whoami` | Show the logged-in user and API URL |

## AI (non-interactive) usage

Everything can run with flags and `--json` — no prompts:

```bash
nexuss-monitor --api-url https://your-app.onrender.com \
  --token "$TOKEN" add --name api --url https://your-api.onrender.com/health \
  --interval 60 --json
```

Token and API URL can also be set as env vars `NEXUSS_MONITOR_API_URL` and
`NEXUSS_MONITOR_TOKEN`.

## One-line cron

```bash
nexuss-monitor check
```

Point that at any cron runner (Render cron, Uptime Robot webhook, crontab) to
run all monitors on schedule.
