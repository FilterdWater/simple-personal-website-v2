---
title: "Installing a NerdFont on Linux"
description: "Or just a font generally speaking"
date: "Feb 13, 2026"
---

Go to the [Nerd Fonts Website](https://www.nerdfonts.com/)

Download a font you think looks good

Create a new directory for your font to live in (system wide)

```bash
sudo mkdir /usr/share/fonts/nerd-fonts/
sudo mkdir /usr/share/fonts/nerd-fonts/FONT-NAME/
```

Unzip the font into the new directory

```bash
sudo unzip ZIP-CONTAINING-FONT.zip -d /usr/share/fonts/nerd-fonts/FONT-NAME/
```

Re-cache fonts

```bash
fc-cache -fv
```

Now you have your Nerd Font installed systemwide!