---
title: "Installing a NerdFont on Linux"
description: "Or just a font generally speaking"
date: "Feb 13, 2026"
---

Go to the [Nerd Fonts Website](https://www.nerdfonts.com/)

Download a font you think looks good

Extract / unzip the zip you just downloaded

```bash
unzip ZIP-CONTAINING-FONT
```

Create a new directory for your font to live in (system wide)

```bash
sudo mkdir /usr/share/fonts/nerd-fonts/
sudo mkdir /usr/share/fonts/nerd-fonts/FONT-NAME/
```

Move the font to the new directory

```bash
sudo mv ZIP-CONTAINING-FONT/*.ttf /usr/share/fonts/nerd-fonts/FONT-NAME/
```

Re-cache fonts

```bash
fc-cache -fv
```

Now you have your NerdFont installed systemwide!

You can also install software like [starship.rs](https://starship.rs/presets/nerd-font) and make it look even better
