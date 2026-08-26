# Aqua Noir 3000

A colorful Aqua-inspired theme, color scheme, and file icon set for Sublime Text 4.

## Install

1. In Sublime Text, choose **Preferences → Browse Packages…**.
2. If you installed an older version, remove its loose `Aqua Noir 3000*` files and its top-level `assets` and `icons` folders first. Only remove files that came from this theme.
3. Copy the entire [`Aqua Noir 3000`](./Aqua%20Noir%203000) folder into the opened `Packages` folder.

The final layout must be:

```text
Packages/
└── Aqua Noir 3000/
    ├── Aqua Noir 3000.sublime-theme
    ├── Aqua Noir 3000.sublime-color-scheme
    ├── Aqua Noir 3000.sublime-file-icons
    ├── C Joy.sublime-*
    ├── C++ Joy.sublime-*
    ├── Dart Joy.sublime-*
    ├── GDScript Joy.sublime-*
    ├── assets/
    └── icons/
```

Do not copy the contents of `Aqua Noir 3000` directly into `Packages`; the folder name is required for its texture paths.

## Activate

1. Choose **Preferences → Select Theme… → Aqua Noir 3000**.
2. Choose **Preferences → Select Color Scheme… → Aqua Noir 3000**.

The matching jewel file icons load automatically with the theme. If Sublime was open during installation and the UI does not refresh, restart it once.

No plug-in, additional settings, or external font is required.

## Joy syntax variants

The package also includes colorful syntax variants for C, C++, Dart, and GDScript. Choose one from **View → Syntax → Aqua Noir 3000**. Each Joy syntax automatically uses its matching Joy color scheme.

If Sublime keeps choosing a built-in syntax for an extension, open a file of that type and use **View → Syntax → Open all with current extension as…** to select the Joy variant once.
