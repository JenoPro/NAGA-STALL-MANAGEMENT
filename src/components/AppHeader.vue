<!-- components/AppHeader.vue -->
<template>
  <v-app-bar app color="white" elevation="1" height="80" class="fixed-header">
    <div class="d-flex align-center">
      <h2 class="title-text ml-4">{{ title }}</h2>
    </div>

    <v-spacer></v-spacer>

    <div class="d-flex align-center mr-4">
      <!-- Notification Button - Made Bigger -->
      <v-btn icon large class="notification-btn mr-4" @click="handleNotificationClick">
        <v-icon size="28" color="dark">mdi-bell-outline</v-icon>
      </v-btn>

      <!-- Profile Dropdown - Made Bigger -->
      <v-menu
        v-model="profileMenu"
        offset-y
        :close-on-content-click="true"
        :nudge-bottom="12"
        :nudge-right="10"
        transition="slide-y-transition"
        max-width="250"
        min-width="220"
        :z-index="99999"
        content-class="profile-menu-content"
        :attach="false"
        absolute
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon large v-bind="attrs" v-on="on" class="profile-btn">
            <v-icon size="32" color="dark">mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <!-- Profile Dropdown Menu -->
        <v-card class="profile-dropdown" elevation="8">
          <!-- Profile Section -->
          <div class="profile-section" @click="handleProfileClick">
            <div class="d-flex align-center pa-3">
              <v-avatar size="40" class="mr-3 profile-avatar" color="#666">
                <v-icon size="20" color="white">mdi-account</v-icon>
              </v-avatar>
              <div class="profile-info flex-grow-1">
                <div class="profile-name">{{ profileName || "Profile Name" }}</div>
                <div class="profile-designation">{{ profileRole || "Designation" }}</div>
              </div>
              <v-icon color="#666" size="20">mdi-chevron-right</v-icon>
            </div>
          </div>

          <!-- Actions Section -->
          <div class="actions-section">
            <div class="actions-header">
              <span class="actions-label">Actions</span>
            </div>

            <!-- Settings Item -->
            <div class="action-item" @click="handleSettingsClick">
              <div class="action-icon">
                <v-icon size="20" color="#333">mdi-cog</v-icon>
              </div>
              <span class="action-text">Settings</span>
            </div>

            <!-- Logout Item -->
            <div class="action-item logout-action" @click="handleLogoutClick">
              <div class="action-icon">
                <v-icon size="20" color="#333">mdi-logout</v-icon>
              </div>
              <span class="action-text">Logout</span>
            </div>
          </div>
        </v-card>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    profileName: {
      type: String,
      default: "Profile Name",
    },
    profileRole: {
      type: String,
      default: "Management",
    },
  },
  data() {
    return {
      profileMenu: false,
    };
  },
  methods: {
    handleNotificationClick() {
      console.log("Notification clicked");
      this.$emit("notification-click");
    },
    handleProfileClick() {
      console.log("Profile clicked");
      this.profileMenu = false;
      this.$emit("profile-click");
    },
    handleSettingsClick() {
      console.log("Settings clicked");
      this.profileMenu = false;
      this.$emit("settings-click");
    },
    handleLogoutClick() {
      console.log("Logout clicked");
      this.profileMenu = false;
      this.$emit("logout-click");
    },
  },
};
</script>

<style scoped>
/* Header Styles - BELOW SIDEBAR */
.fixed-header.v-app-bar {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #e0e0e0;
  background-color: white !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  z-index: 1005 !important; /* Higher than sidebar */
  /* Create space for dropdown without changing background */
  margin-bottom: 200px !important;
}

/* Force the app bar content to have lower z-index */
.v-app-bar__content {
  z-index: 1006 !important;
}

.title-text {
  color: #333;
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  font-family: "Poppins", sans-serif;
  margin-left: 80px; /* Fixed margin to accommodate sidebar */
  transition: none; /* Remove transition to prevent layout shifts */
}

/* Notification Button Styles */
.notification-btn {
  background-color: #f5f5f5 !important;
  border-radius: 50% !important;
  transition: all 0.3s ease;
}

.notification-btn:hover {
  background-color: #e0e0e0 !important;
  transform: scale(1.05);
}

/* Profile Button Styles */
.profile-btn {
  background-color: #f5f5f5 !important;
  border-radius: 50% !important;
  transition: all 0.3s ease;
  cursor: pointer;
}

.profile-btn:hover {
  background-color: #e0e0e0 !important;
  transform: scale(1.05);
}

/* Profile Dropdown Styles - SIMPLIFIED */
.profile-dropdown {
  border-radius: 8px !important;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25) !important;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  background: white !important;
}

/* Profile Section Styles - FIXED */
.profile-section {
  background: #f8f9fa !important;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid #e0e0e0;
}

.profile-section:hover {
  background: #e9ecef !important;
}

.profile-avatar {
  background: #666 !important;
}

.profile-info {
  flex-grow: 1;
}

.profile-name {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 2px;
  line-height: 1.2;
  color: #333 !important;
}

.profile-designation {
  font-size: 12px;
  opacity: 0.7;
  line-height: 1;
  color: #666 !important;
}

/* Actions Section - FIXED */
.actions-section {
  background-color: #ffffff !important;
  padding: 8px 0;
}

.actions-header {
  padding: 8px 16px 4px 16px;
}

.actions-label {
  font-size: 11px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Action Items - FIXED */
.action-item {
  display: flex;
  align-items: center;
  padding: 12px 16px !important;
  cursor: pointer;
  transition: background-color 0.2s ease;
  min-height: 44px;
}

.action-item:hover {
  background-color: #f5f5f5 !important;
}

.logout-action:hover {
  background-color: #ffebee !important;
}

.action-icon {
  margin-right: 12px;
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-text {
  font-weight: 500;
  font-size: 14px;
  color: #333;
  flex: 1;
}

.logout-action .action-text {
  color: #d32f2f !important;
}

/* Animation for dropdown */
.slide-y-transition-enter-active,
.slide-y-transition-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-y-transition-enter-from,
.slide-y-transition-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

/* Responsive Design */
@media (max-width: 960px) {
  .title-text {
    font-size: 20px;
    margin-left: 60px;
  }

  .notification-btn,
  .profile-btn {
    margin-right: 8px;
  }
}

@media (max-width: 600px) {
  .title-text {
    font-size: 18px;
    margin-left: 50px;
  }

  .profile-dropdown {
    min-width: 200px;
  }

  .notification-btn .v-icon,
  .profile-btn .v-icon {
    font-size: 24px !important;
  }
}
</style>

<!-- Global styles for menu positioning -->
<style>
/* CRITICAL: High z-index dropdown positioning */
.profile-menu-content {
  z-index: 99999 !important;
  position: fixed !important;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3) !important;
  border-radius: 8px !important;
  margin-top: 12px !important;
  background: white !important;
}

.v-menu__content.profile-menu-content {
  z-index: 99999 !important;
  position: fixed !important;
  transform: none !important;
  top: auto !important;
  left: auto !important;
}

/* Ensure dropdown is always visible */
.v-application .v-menu__content.profile-menu-content {
  position: fixed !important;
  z-index: 99999 !important;
  max-height: 400px !important;
  overflow: visible !important;
}

.v-overlay--active {
  z-index: 99998 !important;
}

/* Debug styles - temporary border to see dropdown */
.profile-dropdown {
  border: 2px solid #ff0000 !important; /* Red border for debugging */
}
</style>
