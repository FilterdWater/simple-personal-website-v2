---
title: "Restarting the GNOME Desktop Environment"
description: "Because sometimes it freezes"
date: "Apr 13, 2026"
---

I'm currently dual‑booting Windows 11 and Ubuntu 25.10 on my desktop.

Every now and then, the GNOME Desktop Environment (DE) freezes, sometimes only for a moment, sometimes indefinitely. When this happens, the graphical interface stops responding, but the underlying system is usually still running.

If this happens to you, here’s how you can restart GNOME without rebooting your entire machine.

1. Switch to a TTY

A TTY (teletype terminal) is a text‑only interface you can access even when the graphical environment is frozen. It runs independently of GNOME, which makes it perfect for recovery.

Open a TTY using:

```bash
CTRL + ALT + F3
```

You should now see a login prompt.

2. Log in

Log in as the same user whose GNOME session froze. This gives you access to the system services you need to restart.

3. Restart the GNOME Display Manager

Once logged in, run:

```bash
sudo systemctl restart gdm3
```

What this does:

gdm3 is the GNOME Display Manager, the service responsible for handling graphical logins and launching GNOME sessions.

Restarting it effectively restarts the entire GNOME desktop environment, similar to 
logging out and back in, but without needing the GUI to respond.

After the service restarts, you should be automatically returned to the GNOME login screen or your session.