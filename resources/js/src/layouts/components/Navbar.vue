<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">

      <dark-Toggler class="d-none d-lg-block" />
      <p class="user-name font-weight-bolder align-items-center d-md-flex mb-0">
          {{userData.cal_txt}}
      </p>

    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <b-nav-item-dropdown
        right
        toggle-class="d-flex align-items-center dropdown-user-link"
        class="dropdown-user"
      >
        <template #button-content>
          <div class="d-sm-flex d-none user-nav">

            <p class="user-name font-weight-bolder mb-0">
              {{userData.username}}
            </p>

            <span class="user-status" v-if="userData.role == 'admin' "> Super Admin </span>
            <span class="user-status" v-if="userData.role != 'admin' "> {{ userData.role }} </span>

          </div>
          <b-avatar
            size="40"
            variant="light-primary"
            badge
            :src="require('@/assets/images/avatars/13-small.png')"
            class="badge-minimal"
            badge-variant="info"
          />
        </template>

        <b-dropdown-item link-class="d-flex align-items-center" :to="{ name: 'profile-user'}">
          <feather-icon
            size="16"
            icon="UserIcon"
            class="mr-50"
          />
          <span>Profile</span>
        </b-dropdown-item>

        <b-dropdown-divider />

        <b-dropdown-item link-class="d-flex align-items-center" v-if=" userData.role == 'dashboarduser' " :to="{ name: 'auth-forgot-password'}">
          <feather-icon
            size="16"
            icon="HashIcon"
            class="mr-50"
          />
          <span>Change Password</span>
        </b-dropdown-item>

        <b-dropdown-divider v-if=" userData.role == 'dashboarduser' " />

        <b-dropdown-item link-class="d-flex align-items-center"  @click="logout">
          <feather-icon
            size="16"
            icon="LogOutIcon"
            class="mr-50"
          />
          <span>Logout</span>
        </b-dropdown-item>

      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'
import { avatarText } from '@core/utils/filter'
import useJwt from '@/auth/jwt/useJwt'
import { initialAbility } from '@/libs/acl/config'

export default {
  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,

    // Navbar Components
    DarkToggler,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    }
  },
   data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      avatarText,
      isAdmin: false
    }
  },
  mounted(){
    this.isAdmin = this.userData.role === "admin" ? true : false;
  },
  methods: {
    logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)

      // Remove userData from localStorage
      localStorage.removeItem('userData')

      // Reset ability
      this.$ability.update(initialAbility)

      // Redirect to login page
      this.$router.push({ name: 'auth-login' })
    },
  },
}
</script>
