# Mattermost Desktop Setup Guides

## Step-by-step Windows setup

To set up the Mattermost desktop application for Windows 7, 8 and 10:

1. Download [the latest release](https://github.com/mattermost/desktop/releases) of Mattermost Desktop

   Find the file ending in `-win64.zip` if you're running a x64 version of Windows and `-win32.zip` if you're running an older 32-bit version.

2. From the `/Downloads` directory right-click on the file and select "Extract All..."

   A new directory should be created on your PC.

3. Go to `/mattermost-desktop...` directory and find the file named `Mattermost`

   - Right-click the file and select "Pin to Taskbar" to make the application available from your Windows task bar.
   - Right-click the file and select "Pin to Start Menu" to make the application available from your Windows Start menu.
   - Double-click the file to open the application.

4. After opening the application, press `Alt` key to bring up the menu at the top of the window, then click `File -> Settings`

5. For each Mattermost team you'd like to use, enter its **Name** and **URL** then click **Add**

6. Click **Save** to save your setting

   You're now ready to use electron-mattermost to interact with multiple teams from one desktop application

   To quit, use `Ctrl+Q`

## Help

The Mattermost desktop application offers:

- Connectivity to one or more Mattermost team sites and multiple Mattermost servers
- Shortcuts from Start Menu and Windows Task Bar
- Icon notifications from Windows Task Bar
- Desktop notifications

See the Mattermost [help documention](http://docs.mattermost.com/help/getting-started/signing-in.html) for how to use the Mattermost team site.

### Settings Page

The Settings Page is available from the **File** menu under **Settings** (Click `Alt` to show the menu if it's not visible). This page manages connections to team sites and other settings.

- **Add a Team Site**:
   1. Under **Teams** section, enter **Name** for team name to show in top tab
   2. Enter **URL** for the team site location. For example: `https://example.com/teamname` then click **Add**.
- **Delete a Team Site**:
   1. Delete a Team Site by clicking the "x" next to the URL of the team site you wish to delete.
- **Hide Menu Bar**
   1. Under **Options** enable this option to hide the menu bar. Press "Alt" to show the Menu Bar.

### Menu Bar

If **Hide Menu Bar** option is enabled, click the `Alt` key to toggle the menu on and off.

Below lists menu options (shortcut keys are listed in brackets):

- **File**
  - **About Mattermost** - Shows version information for Mattermost desktop application
  - **Settings** - Opens setting menu to add new team sites and configure shortcut key options
  - **Quit** (Ctrl+Q) - Exits the application
- **Edit**
  - **Undo** (Ctrl+Z) - Reverses previous action
  - **Redo** (Ctrl+Shift+Z) - Replays most recent action
  - **Cut** (Ctrl+X) - Cuts selected text
  - **Copy** (Ctrl+C) - Copies selected text
  - **Paste** (Ctrl+V) - Pastes text from clipboard
  - **Select All** (Ctrl+A) - Select all text in input box
- **View**
  - **Reload** (Ctrl+R) - Reload page from the server
  - **Clear Cache and Reload** (Ctrl+Shift+R) - Clear cached content in application and reload page
  - **Toggle Full Screen** (F11) - Toggle application from window to full screen and back
  - **Toggle Developer Tools** (Ctrl+Shift+I) - Turn on and off sidebar showing developer tools

### Notifications

Mattermost lets users configure [desktop notifications](http://docs.mattermost.com/help/getting-started/configuring-notifications.html#desktop-notifications) to alert users to new events in a team site.

For the Mattermost Windows application, these appear as ballon notifications from the task bar on Windows 7 and Windows 8.1, and as a "toast" pop-up on Windows 10.

### Start Menu and Task Bar shortcuts

If pinned to the Windows Start Menu in Step 3 of the setup procedure, a shortcut to the Mattermost desktop application should be available from the Start Menu by pressing the Windows Key.

If pinned to the Windows Task Bar in Step 3 of the setup procedure, a shortcut to the Mattermost desktop application should be available from the Windows Task Bar.


## Step-by-step OS X setup
For OS X 10.11 El Capitan. An older version of OS X has similar way.

1. Download [the latest release](https://github.com/mattermost/desktop/releases) of Mattermost Desktop

   Find the file ending in `-osx.tar.gz`.

2. From the `/Downloads` directory double-click on the file."

   A new directory should be created on your Mac.

3. Go to `/mattermost-desktop...` directory and right-click on `Mattermost` package and select "Open"

   If you see a dialog to confirm the application, select "Open".

   You should see a new application called **Mattermost Desktop** open.

4. Click `Mattermost` from the menu at the top of the screen, then click `Settings`

5. For each Mattermost team you'd like to use, enter its **Name** and **URL** then click **Add**

6. Click **Save** to save your setting

   You're now ready to use electron-mattermost to interact with multiple teams from one desktop application

   To quit, use `Command+Q`
