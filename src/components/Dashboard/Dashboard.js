// Dashboard.js - JavaScript logic for Dashboard component

export const dashboardMethods = {
  setActiveItem(itemId) {
    // Set all items to inactive
    this.menuItems.forEach(item => {
      item.active = false;
    });
    
    // Set clicked item to active
    const selectedItem = this.menuItems.find(item => item.id === itemId);
    if (selectedItem) {
      selectedItem.active = true;
    }
    
    // You can add navigation logic here
    this.handleNavigation(itemId);
  },

  handleNavigation(itemId) {
    // Add your routing logic here based on the selected menu item
    switch (itemId) {
      case 1:
        console.log('Navigating to Dashboard');
        // this.$router.push('/dashboard');
        break;
      case 2:
        console.log('Navigating to Documents');
        // this.$router.push('/documents');
        break;
      case 3:
        console.log('Navigating to Users');
        // this.$router.push('/users');
        break;
      case 4:
        console.log('Navigating to Messages');
        // this.$router.push('/messages');
        break;
      case 5:
        console.log('Navigating to Settings');
        // this.$router.push('/settings');
        break;
      default:
        console.log('Unknown navigation item');
    }
  },

  // Method to handle notification clicks
  handleNotificationClick() {
    console.log('Notification clicked');
    // Add notification logic here
  },

  // Method to handle profile clicks
  handleProfileClick() {
    console.log('Profile clicked');
    // Add profile logic here
  },

  // Method to initialize dashboard data
  initializeDashboard() {
    // Add any initialization logic here
    console.log('Dashboard initialized');
  }
};

// You can also export other utilities or constants
export const MENU_ITEMS_CONFIG = [
  { id: 1, icon: 'mdi-view-dashboard', name: 'Dashboard', route: '/dashboard' },
  { id: 2, icon: 'mdi-file-document', name: 'Documents', route: '/documents' },
  { id: 3, icon: 'mdi-account-group', name: 'Users', route: '/users' },
  { id: 4, icon: 'mdi-message', name: 'Messages', route: '/messages' },
  { id: 5, icon: 'mdi-cog', name: 'Settings', route: '/settings' }
];

export default {
  dashboardMethods,
  MENU_ITEMS_CONFIG
};