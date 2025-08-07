<template>
  <v-app>
    <!-- Sidebar Component -->
    <AppSidebar :items="menuItems" @menu-item-click="handleMenuItemClick" />

    <div class="main-wrapper">
      <!-- Header Component -->
      <AppHeader
        :title="pageTitle"
        @notification-click="handleNotificationClick"
        @profile-click="handleProfileClick"
        @settings-click="handleSettingsClick"
        @logout-click="handleLogoutClick"
      />

      <!-- Main Content -->
      <v-main>
        <v-container fluid class="main-content">
          <v-row>
            <v-col cols="12">
              <div class="content-placeholder">
                <h3>Main Content</h3>
                <p>Responsive yan salpakan nalang nindo</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script>
// Import the components
import AppSidebar from "../AppSidebar.vue";
import AppHeader from "../AppHeader.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  components: {
    AppSidebar,
    AppHeader,
  },
  data() {
    return {
      pageTitle: "Dashboard",
      menuItems: [
        { id: 1, icon: "mdi-view-dashboard", name: "Dashboard", active: true },
        { id: 2, icon: "mdi-credit-card", name: "Payments", active: false },
        { id: 3, icon: "mdi-account-group", name: "Applicants", active: false },
        { id: 4, icon: "mdi-chart-line", name: "Reports", active: false },
        { id: 5, icon: "mdi-shield-check", name: "Compliances", active: false },
      ],
    };
  },
  mounted() {
    this.initializeDashboard();
  },
  methods: {
    // Handle menu item clicks from sidebar
    handleMenuItemClick(itemId) {
      console.log("Menu item clicked:", itemId);
      // Update page title based on selected menu item
      this.updatePageTitle(itemId);
      // Add any additional logic here
    },

    // Handle notification clicks from header
    handleNotificationClick() {
      console.log("Notification clicked in Dashboard");
      // Add notification logic here
    },

    // Handle profile clicks from header
    handleProfileClick() {
      console.log("Profile clicked in Dashboard");
    },

    // Handle settings clicks from header dropdown
    handleSettingsClick() {
      console.log("Settings clicked in Dashboard");
      // Navigate to settings or open settings modal
    },

    // Handle logout clicks from header dropdown
    handleLogoutClick() {
      console.log("Logout clicked in Dashboard");
      // Handle logout logic - clear session, redirect to login, etc.
    },

    // Update page title based on menu selection
    updatePageTitle(itemId) {
      const titleMap = {
        1: "Dashboard",
        2: "Payments",
        3: "Applicants",
        4: "Reports",
        5: "Compliances",
      };
      this.pageTitle = titleMap[itemId] || "Dashboard";
    },

    // Initialize dashboard
    initializeDashboard() {
      console.log("Dashboard initialized");
      // Add any initialization logic here
    },
  },
};
</script>

<style scoped>
/* Main Content Styles */
.v-main {
  padding-left: 0 !important;
}

.main-wrapper {
  margin-left: 80px; /* Fixed margin - no longer changes with sidebar expansion */
  transition: none; /* Remove transition to prevent shifting */
  min-height: 100vh;
}

.main-content {
  background-color: #fafafa;
  min-height: calc(100vh - 64px);
  padding: 24px;
}

.content-placeholder {
  background-color: white;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content-placeholder h3 {
  color: #333;
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: 300;
}

.content-placeholder p {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
}

/* Custom scrollbar for main content */
.main-content::-webkit-scrollbar {
  width: 6px;
}

.main-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.main-content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.main-content::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Responsive Design */
@media (max-width: 960px) {
  .main-wrapper {
    margin-left: 60px; /* Adjusted for mobile sidebar width */
  }

  .main-content {
    padding: 16px;
  }
}

@media (max-width: 600px) {
  .main-wrapper {
    margin-left: 50px; /* Adjusted for mobile sidebar width */
  }

  .content-placeholder {
    padding: 20px;
    min-height: 300px;
  }

  .content-placeholder h3 {
    font-size: 24px;
  }

  .content-placeholder p {
    font-size: 14px;
  }
}
</style>
