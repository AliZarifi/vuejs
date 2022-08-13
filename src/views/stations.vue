<template>
  <v-row>
    <v-col lg="4" md="4" sm="12" xs="12" class="container px-5 form-panel">
      <div class="title">
        <h4>Add station</h4>
      </div>
      <!-- name -->
      <label>Name</label>
      <v-text-field dense single-line outlined> </v-text-field>
      <!-- Rgs -->
      <label>Ragister ID</label>
      <v-text-field dense single-line outlined></v-text-field>
      <!-- user -->
      <label>User</label>
      <v-select dense :items="items" outlined></v-select>
      <!-- disc -->
      <label>Description (optional)</label>
      <v-textarea dense outlined></v-textarea>
      <span>Image</span>
      <div class="upload-field text-center my-5">
        <img
          src="../assets/upload.svg"
          alt="GroupI141724736857"
          class="admin-operation-setup-stations-group3"
        />
        <p>
          upload an image from this station
        </p>
        <button>
          Upload
        </button>
      </div>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn text color="warning" class="mx-1">Discard</v-btn>
        <v-btn class="mx-1" color="warning" plain>
          Add
        </v-btn>
      </v-row>
    </v-col>
    <v-col lg="8" md="8" sm="12" class="px-6 table-panel">
      <v-row class="mx-auto container">
        <v-col lg="11" md="11" sm="11">
          <v-text-field
            dense
            single-line
            outlined
            placeholder="Search stations name or Ragister ID"
          ></v-text-field>
        </v-col>
        <v-col lg="1" md="1" sm="1" class="pr-4">
          <v-btn color="warning" class="mr-5" elevation="1">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <div class="table-responsive container">
        <table id="station-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Station Name</th>
              <th><img src="../assets/flash.svg" alt="" />Ragister ID</th>
              <th><img src="../assets/flash.svg" alt="" />User</th>
              <th><img src="../assets/flash.svg" alt="" />More</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in data" :key="data.id">
              <td>{{ data.id }}</td>
              <td><img :src="data.avatar" /> {{ data.name }}</td>
              <td>{{ data.ragister_id }}</td>
              <td>{{ data.user }}</td>
              <td>
                <v-icon>{{ data.more }}</v-icon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data() {
      return {
        items: ["web", "shopping", "videos", "images", "news"],

        data: [
          {
            id: 1,
            avatar: "../assets/data.png",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
          {
            id: 2,
            avatar: "../assets/data",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
          {
            id: 3,
            avatar: "../assets/data",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
          {
            id: 4,
            avatar: "../assets/data",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
          {
            id: 5,
            avatar: "../assets/data",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
          {
            id: 6,
            avatar: "../assets/data",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
          {
            id: 7,
            avatar: "../assets/data",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
          {
            id: 8,
            avatar: "../assets/data",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
          {
            id: 9,
            avatar: "../assets/data",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
          {
            id: 10,
            avatar: "../assets/data",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
          {
            id: 11,
            avatar: "../assets/data",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
          {
            id: 12,
            avatar: "../assets/data",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
          {
            id: 13,
            avatar: "../assets/data",
            name: "station-1",
            ragister_id: "2936223",
            user: "John Doe",
            more: "mdi-dots-vertical",
          },
        ],
      };
    },
  };
</script>
<style scoped>
  .title {
    margin-top: -12px;
    margin-left: -10px;
    margin-right: -20px;
    padding: 10px;
    background-color: #f6f7fb;
  }
  .upload-field {
    padding: 10px;
    border-radius: 5px;
    border: 2px dashed rgb(120, 120, 120);
  }
  .upload-field > button {
    color: rgba(255, 122, 0, 1);
  }

  .form-panel {
    height: 90vh;
    background-color: #fdfeff !important;
  }
  .table-panel {
    min-height: 90vh;
    background-color: #f6f7fb !important;
  }
  .table {
    background-color: #e3e7ed !important;
  }
  /* table */
  #station-table {
    border-collapse: collapse;
    width: 100%;
  }

  #station-table td,
  #station-table th {
    padding: 16px;
  }

  #station-table tr:nth-child(even) {
    background-color: #ffffff;
  }

  #station-table tr:hover {
    background-color: rgb(209, 209, 209);
  }

  #station-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #e3e7ed;
    color: black;
  }
</style>
