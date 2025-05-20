---
title: "Installing Windows 11"
description: "Despite the popularity of the OS, it can be surprisingly frustrating."
date: "May 20, 2025"
---

Despite my love for Linux, the hardware I currently use works best on Windows. I’ve installed Windows more times than I can count, usually because the system starts to feel _bloated_ or _messy_, and I end up doing a full reinstall. Not the most efficient use of my time, but it’s taught me a lot about setting up and maintaining Windows 11.

Right now, I'm writing this from a Windows 11 machine that I’ve finally dialed in. Everything’s clean, lean, and exactly how I want it, so for once, I have no urge to reinstall.

A big reason I’m still on Windows comes down to two open-source projects that make the experience actually bearable:

1. [Microsoft-Activation-Scripts](https://github.com/massgravel/Microsoft-Activation-Scripts)
2. [WinUtil](https://github.com/ChrisTitusTech/winutil)

The first handles activation, which means I don’t have to pay for Windows. Honestly, if I _did_ have to pay for it, I’d probably have ditched it by now. It’s just not worth the price tag to me. The second project helps me quickly debloat the system, install essential software, and tweak everything to my liking.

If you're using Windows like I am, these tools are priceless.

---

## How I Reinstall Windows 11

Here’s my personal reinstall process. It’s not the only way, but it works well for me:

1. **Download the Windows 11 ISO**  
   Use the _English (United States)_ version from the official [Microsoft site](https://www.microsoft.com/software-download/windows11).

2. **Create a MicroWin ISO**  
   Use [WinUtil](https://github.com/ChrisTitusTech/winutil) to generate a streamlined ISO using the default settings.

3. **Flash the ISO**  
   Use [Rufus](https://rufus.ie/en/) to flash the ISO to a USB stick.

4. **Reboot into BIOS/UEFI**  
   If you're already on Windows, some modern PCs support running

   ```powershell
   shutdown /r /fw /t 0
   ```

   in PowerShell as admin to enter firmware settings directly. Otherwise you should refer to your motherboards guide on how to get into the BIOS

5. **Boot from the USB stick**.

6. **Change language settings**  
   During setup, set _Time and Currency_ to Dutch (or another locale that allows Edge to be removed).

7. **Skip product key**  
   Choose “I don’t have a product key.”

8. **Wipe the drive**  
   Delete all partitions on _Disk 0_ (at least in my case) until it shows as unallocated space. Select that for the install.

9. **Complete Windows setup**.

10. **Install drivers**  
    Install chipset, GPU, network, and other essential drivers.

11. **Connect to Wi-Fi**.

12. **Wait ~5–10 minutes and make some tea**  
    Let Windows apply background updates silently.

13. **Manually check for updates**  
    Go to Settings → Windows Update → _Check for updates_ and wait.

14. **Use [Microsoft-Activation-Scripts](https://github.com/massgravel/Microsoft-Activation-Scripts) to go Pro**

15. **Restart after updates are installed**.

16. **Run WinUtil**

    - Apply the standard debloat and performance tweaks.
    - Disable Recall, remove Edge, and turn off Copilot.
    - Use the toggles on the right side to further customize.

17. **(Using WinUtil) Enable extra features (for developers)**  
    In the "Config" section, install **Hyper-V** and **WSL2**.

18. **(Using WinUtil) Set updates to security-only**.

19. **Exit WinUtil and reboot**.

20. **Fine-tune system settings**
    - Go through all of Windows Settings and adjust preferences.
    - Set your **Region format** to _English (Europe)_, if preferred.

---

## Final Notes

You can use WinUtil to install apps via **winget** as well. What you install depends on your workflow and personal needs. The important thing is that your system is now clean and minimal.
