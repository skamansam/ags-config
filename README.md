# ags-config
This is my desktop config for Aylur's Gtk Shell.

# About
This contains a lot of the code from the AGS examples in the AGS documentation.

# Changes:

## `app-bar` -> `TopPanel`
I have refactored the `app-bar` example to `TopPanel` so it uses widgets instead and a central config object so you don't have to wade through code to modify your layout. The widgets are in `js/widgets`.

The TopPanel also has some changes in its widgets:

## Battery Monitor
This now uses a vertical progressbar instead of a horizontal one.


# Additions

## GPU Panel Widgets

# Installation

You can run the install script to install this into the ags directory.

> NOTE: if you have an exisitng ags config direcrtory, this will create a backup directory at `$HOME/.config/ags.bak`

```sh
pnpm ags:install
```
or if you use npm instead:

```sh
npm run ags:install
```
# Runnign automatically:

I am adding hyprland instructions here because that's what I use. If you want more specifics, consult your window manager's documentation for autostarting apps.

To use in hyperland, simply add the following line to your hyprland config file at `$HOME/.config/hypr/hyprland.conf`

```
exec-once = ags -c ~/.config/ags/config.js &
```

# Coming Soon

## AppLauncher (TBD)
This will be changed into a window that is activated with Ctrl+F12. There is also a panel widget for activating it.

## GPU Monitor Widgets
This is a panel widget that displays circular graphs for memorty and gpu usage for nVidia GPUs. It uses `nvidia-smi`. 

> AMD and Intel GPU additions are welcome!

## Central Config YAML file
A config file will be at the root of the project that will hold options for everything. There will be a config.yaml.example that will contain all options.

# Starter Config

if suggestions don't work, first make sure
you have TypeScript LSP working in your editor

if you do not want typechecking only suggestions

```json
// tsconfig.json
"checkJs": false
```

types are symlinked to:
/usr/share/com.github.Aylur.ags/types
