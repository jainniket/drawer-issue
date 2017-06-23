# drawer-issue
drawer issue https://github.com/react-community/react-navigation/issues/1960

1. git clone https://github.com/jainniket/drawer-issue.git
2. npm install
3. react-native run-android

![afof7b](https://user-images.githubusercontent.com/10733088/27467163-998f9c88-57fd-11e7-819f-edb47a453911.gif)

### Current Behavior
There is a Hamburger Menu on whose click `DrawerOpen` action is triggered. 
But when, that menu is tapped twice very fast, the drawer opens and closes back, but the state is still set as Open.

So the error is, once the menu is clicked, it opens the drawer, but in the transition phase, when the drawer is opening, another tap happens which eventually happens to be on the View being presented by Drawer. This tap forces the menu to close back but the action `DrawerClose` doesn't get registered.

Whereas the redux state says the current route as `DrawerOpen` even though the drawer is clossed. So any further taps on the menu icon becomes un-responsive. 

Reason - The drawer presented and drawer state are out of sync.

### Expected Behavior
The double tap should be disabled.
The presenting view of drawer shouldn't take any touch event.

### Your Environment
<!--- Include as many relevant details about the environment you experienced the bug in -->

| software         | version
| ---------------- | -------
| react-navigation |  ^1.0.0-beta.11
| react-native     |  0.45.1
| node             | v7.6.0
| npm or yarn      | v4.1.2
