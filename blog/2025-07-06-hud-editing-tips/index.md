---
slug: hud-editing-1
title: HUD Editing - Start Here
authors: [criticalflaw]
---

Firstly, download the following software. You can make do with just your operating system's included notepad and no version control but these will make editing easier:
- [notepad++](https://notepad-plus-plus.org/downloads/) or [Visual Studio Code](https://code.visualstudio.com/) [with the VDF Plugin](https://marketplace.visualstudio.com/items?itemName=pfwobcke.vscode-vdf)
- [GitHub Desktop](https://desktop.github.com/download/) or any other preffered git client.

The following are optional but useful:
- [WinMerge](https://winmerge.org/?lang=en) for comparing HUDs
- [Link Shell Extension](https://schinagl.priv.at/nt/hardlinkshellext/linkshellextension.html#contact) for creating symlinks to ease hot-swap between  HUDs

---

Next, you need to know where you'll be installing your HUD:

1. Open **Steam**, go to your **Library**
2. Right-click on **Team Fotress 2**, select **Properties...**
3. Select **Installed Files**, then **Browse...**
4. Go to the `tf` folder
5. Right-click on the `custom` folder, select **Pin to Quick access**

You'll be going to this folder *a lot* so it is a good idea to have a shortcut handy.

---

You can use any HUD as a base for modying or creating your own with appropriate credit. For purposes if this guide, well use the [Default TF2 HUD](https://github.com/Hypnootize/TF2-Default-HUD).
1. [Download the latest default HUD here.](https://github.com/Hypnootize/TF2-Default-HUD/archive/refs/heads/master.zip)
2. Right-click on `TF2-Default-HUD-master.zip` and select **Extract All...**
3. Click **Browse**, navigate to your pinned `tf/custom` folder
4. Click **Select Folder** then **Extract** 
5. Go to your `tf/custom` folder then to `TF2-Default-HUD-master`
6. Delete the following folders: `#HL2 Files`, `#Map Files`, `#Platform Files` and `#TF2 Files`
7. Verify that your final folder structure looks like this:
```
tf
└── custom
    └── TF2-Default-HUD-master
        ├── resource
        ├── scripts
        ├── info.vdf
        └── README.md
```
8. Launch Team Fortress 2 and you now should be ready to start HUD editing. 

Though you'll still see the default HUD, it is actually a "custom" HUD that will reflect any changes we make in `tf/custom/TF2-Default-HUD-master`.