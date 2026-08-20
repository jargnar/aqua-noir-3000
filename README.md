# Aqua Noir 3000 for Sublime Text

Version 4.0.1 — compact Aqua controls on a noir/Vercel-like base.

Aqua Noir 3000 uses static PNG nine-slice layers only. It includes no plugin code, JavaScript, background tasks, blur, or keyframe animation.

## Install

1. Fully quit Sublime Text.
2. Open **Preferences → Browse Packages…**.
3. Delete earlier `Vanta Noir`, `Velocity Noir`, or `Sublime Aqua` folders.
4. Copy the inner `Aqua Noir 3000` folder beside `User`.
5. Reopen Sublime Text.
6. Use one of the included full settings profiles.

## Profiles

- `Aqua Noir 3000 - Balanced.sublime-settings`: recommended. Keeps indexing, Git status, definitions and index-backed completions.
- `Aqua Noir 3000 - Hyper Sidebar.sublime-settings`: keeps indexing and code intelligence, but disables Git-status rendering and mini-diff work.
- `Aqua Noir 3000 - Maximum.sublime-settings`: disables indexing and related project intelligence for the lightest background workload.

## Compact Aqua pass

The tabs are 30 DIPs high and use a glass fill plus an Aqua rim, with no underline. Find/Replace option buttons now use the same rounded bevel, gloss and outline system as text buttons. Inputs, quick panels, status buttons, scroll pucks, tooltips and popups use the same material vocabulary.

## Sidebar responsiveness

The sidebar uses compact row metrics, full-row hit targets, no expansion animation, immediate hover/selection states and single-click previewing on the left mouse button. The included project template excludes common generated/vendor directories and does not follow symlinks.

A theme cannot expand a folder merely because the pointer hovers over it: Sublime theme rules can style the `hover` state, but do not execute commands. The public hover API is for open text views, not sidebar rows. Option-click a folder to expand its descendants using Sublime's built-in behavior.

## JetBrains Mono

The editor uses the regular `font_face` setting. The UI theme separately applies JetBrains Mono to sidebar labels, tabs, quick panels, autocomplete, status text and tooltips. The font must already be installed in the operating system.

## Optional jewel icons

Add:

```json
"file_icon_theme": "Aqua Noir 3000 Jewels"
```

Remove that key to return to Sublime's normal icons.

## 4.0.1 control polish

The Find/Replace option-button layer now explicitly clears Adaptive's inherited segmented-button background texture. Selected controls use a softer Aqua rim and a lower-opacity blue sheen, eliminating the pale edge fringe. Active tabs now use a graphite-blue fill with a restrained Aqua outline instead of a solid cyan capsule.
