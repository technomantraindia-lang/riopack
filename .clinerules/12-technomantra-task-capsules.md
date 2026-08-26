# Technomantra Task Capsules V4.11

This workspace uses task capsules so developers can run parallel development without prompt/file mixing and without losing intelligence.

## How to use capsule memory
1. Treat the active capsule below as the only resumable state for this workspace/window/task lane.
2. If the developer says "continue", continue only from this capsule when it matches the same workspace/window/task. If no matching capsule exists, ask for the missing context instead of guessing from another project.
3. Keep strong reasoning quality: use Project Memory, Team Learning, Developer Learning, framework maps and current source evidence, but retrieve only what is relevant to the active capsule.
4. Do not merge files, requirements, screenshots, terminal output, or decisions from a different capsule.
5. When the task is long, update your mental checkpoint: objective, completed items, pending items, files touched, current blocker, next action and validation.
6. If two tasks touch the same file, never rewrite the whole file to combine them. Use minimal range edits and preserve unrelated changes.

## Active capsule snapshot
The extension refreshes this file automatically. Prefer its concise state over old chat history when resuming.

- Capsule ID: tm-cap-bcd446e70b8e589c889c3ac7
- Isolation: task-capsule-v411
- Workspace ID: tm-ws-3aec2729a2ac2e37611aea92
- Window ID: tm-win-eb1580fef08a41e3584aa05a
- Project: riopack
- Framework: 
- Developer mode: smart
- Model mode: paid/manual
- Active file: riopak-website/css/responsive.css
- Objective: Create a completely empty website project structure for **RIOPAK ENGINEERS – Packaging & Processing**.

Do NOT write any website code, content, styling, components, animations, SEO content, or page layouts yet.

Only create the folders and empty files.

Project structure:

```text
riopak-website/
│
├── index.html
│
├── pages/
│   ├── about.html
│   ├── products.html
│   ├── industries.html
│   ├── projects.html
│   └── contact.html
│
├── products/
│   ├── vffs-machines.html
│   ├── bottle-filling.html
│   ├── fillers-weighers.html
│   ├── accessories.html
│   └── service-spares.html
│
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── products/
│   │   ├── industries/
│   │   ├── projects/
│   │   ├── about/
│   │   └── common/
│   │
│   ├── icons/
│   ├── logos/
│   └── videos/
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── animations.js
│   └── smooth-scroll.js
│
├── robots.txt
├── sitemap.xml
└── README.md
```

### Rules

* Every file should initially be empty.
* Do not add HTML boilerplate.
* Do not add CSS.
* Do not add JavaScript.
* Do not add placeholder text.
* Do not add comments.
* Do not add components.
* Do not install libraries.
* Do not create additional files or folders.
* Preserve the exact folder and filename structure above.

The only goal is to prepare the empty project structure for development.
- Blocker: none
- Next action: Continue this task from its isolated checkpoint and current workspace evidence.

## Touched files in this capsule
- riopak-website/js/main.js
- riopak-website/js/smooth-scroll.js
- riopak-website/js/animations.js
- riopak-website/js/navigation.js
- riopak-website/css/responsive.css
- riopak-website/css/animations.css
- riopak-website/css/style.css
- riopak-website/index.html

## Recent files in this workspace/window
- riopak-website/css/responsive.css
- riopak-website/css/style.css
- riopak-website/index.html
- riopak-website/js/main.js
- riopak-website/js/smooth-scroll.js
- riopak-website/js/animations.js
- riopak-website/js/navigation.js
- riopak-website/css/animations.css

## Hard rule
If a file, goal, screenshot, terminal output, or decision is not connected to this capsule, do not use it for the current task.
