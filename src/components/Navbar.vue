<template>
  <nav>
    <!-- app bar -->
    <v-app-bar color="#fbfcff" height="40" elevation="0" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Setup</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab
            v-for="link in tablinks"
            :key="link.title"
            router
            :to="link.route"
          >
            {{ link.title }}
          </v-tab>
          <v-spacer></v-spacer>
          <v-btn color="white" class="mr-5" elevation="1">
            <img src="../assets/navigationIcon/avatar.svg" alt="John" />
            <img
              class="ml-2"
              src="../assets/navigationIcon/flash.svg"
              alt="John"
            />
          </v-btn>
          <v-icon class="mx-3">mdi-bell-outline</v-icon>
        </v-tabs>
      </template>
    </v-app-bar>
    <!-- side bar -->
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item class="my-6">
          <v-list-item-action class="mx-5 ">
            <img src="../assets/logo.svg" alt="" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <h1>Rutilea</h1>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="my-2" @click="setup">
          <v-list-item-action class="mx-5 ">
            <img src="../assets/navigationIcon/dashboard.svg" alt="" />
            {{ navlinks.dashboard }}
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              dashboard
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mx-4"></v-divider>
        <h5 class="mx-4 mt-4">Operation</h5>
        <v-list-item class="my-2" @click="setup">
          <v-list-item-action class="mx-5 ">
            <img src="../assets/navigationIcon/setup.svg" alt="" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Setup
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="my-2" @click="setup">
          <v-list-item-action class="mx-5 ">
            <img src="../assets/navigationIcon/process.svg" alt="" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Proccess
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mx-4"></v-divider>
        <v-list-item class="my-2" @click="setup">
          <v-list-item-action class="mx-5 ">
            <img src="../assets/navigationIcon/monitoring.svg" alt="" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Monitoring
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="my-2" @click="setup">
          <v-list-item-action class="mx-5 ">
            <img src="../assets/navigationIcon/operation.svg" alt="" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              operators
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <img src="../assets/bg.svg" class="nav-card-bg" />
      <div class="nav-card text-center">
        <p>only <span class="day">03</span> day left</p>
        <button>
          Upgrade now <img src="../assets/flash_right.svg" alt="" srcset="" />
        </button>
      </div>
      <div class="expire-note mx-2 ">
        <img src="../assets/security.svg" alt="" srcset="" />
        <p class="ml-2">Your Computation Resource Is About to Expire</p>
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        drawer: true,
        navlinks: [
          {
            dashboard: "/dashboard",
          },
          {
            setup: "/",
          },
          {
            process: "/process",
          },
          {
            monitoring: "/monitoring",
          },
          {
            oprators: "/oprators",
          },
        ],
        tablinks: [
          {
            title: "stations",
            route: "/",
          },
          {
            title: "input streams",
            route: "/input_streams",
          },
          {
            title: "ROI frames",
            route: "/roi_frames",
          },
          {
            title: "Objects",
            route: "/objects",
          },
          {
            title: "Train",
            route: "/train",
          },
          {
            title: "integrations",
            route: "/integrations",
          },
        ],
      };
    },
    methods: {
      setup() {
        this.$route.push("/setup");
      },
    },
  };
</script>
<style scoped>
  nav {
    background-color: #adb9ca !important;
  }
  .nav-card-bg {
    position: absolute;
    bottom: 0;
  }
  .nav-card {
    background-color: #4a5260;
    color: #fff;
    min-height: 100px;
    width: 90%;
    border-radius: 10px;
    font-family: Arial, sans-serif;
    margin: 10px;
    font-size: 17px;
    position: absolute;
    bottom: 90px;
  }
  .nav-card .day {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 30px;
  }
  .nav-card button:hover{
    background-color: #eeeeee;

  }
  .nav-card button {
    background-color: #fff;
    color: #000;
    width: 85%;
    border-radius: 10px;
    padding: 8px;
    margin: 0px 5px 15px 5px;
  }
  .expire-note {
    position: absolute;
    bottom: 30px;
  }

  .expire-note p {
    display: inline;
    font-family: sans-serif;
  }
</style>
