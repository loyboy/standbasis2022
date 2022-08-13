<template>
  <div class="projects">
    <b-sidebar
      id="add-new-user-sidebar"
      :visible="isAddNewUserSidebarActive"
      bg-variant="white"
      sidebar-class="sidebar-lg"
      shadow
      backdrop
      no-header
      right
    >
      <template #default="{ hide }">
        <!-- Header -->
        <div
          class="
            d-flex
            justify-content-between
            align-items-center
            content-sidebar-header
            px-2
            py-1
          "
        >
          <h5 class="mb-0">Add New User</h5>

          <feather-icon
            class="ml-1 cursor-pointer"
            icon="XIcon"
            size="16"
            @click="hide"
          />
        </div>
        <b-form
          class="p-2"
          @submit.prevent="handleSubmit(onSubmit)"
          @reset.prevent="resetForm"
        >
          <div class="d-flex mt-2">
            <b-button variant="primary" class="mr-2" type="submit">
              Add
            </b-button>
            <b-button type="button" variant="outline-secondary" @click="hide">
              Cancel
            </b-button>
          </div>
        </b-form>
      </template>
    </b-sidebar>

    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <div class="card">
          <div
            class="card-body d-flex align-items-center justify-content-between"
          >
            <div>
              <h3 class="fw-bolder mb-75">21,459</h3>
              <span>Total Users</span>
            </div>
            <div class="avatar bg-light-primary p-50">
              <span class="avatar-content">
                <i data-feather="user" class="font-medium-4"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card">
          <div
            class="card-body d-flex align-items-center justify-content-between"
          >
            <div>
              <h3 class="fw-bolder mb-75">4,567</h3>
              <span>Verified Users</span>
            </div>
            <div class="avatar bg-light-danger p-50">
              <span class="avatar-content">
                <i data-feather="user-plus" class="font-medium-4"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card">
          <div
            class="card-body d-flex align-items-center justify-content-between"
          >
            <div>
              <h3 class="fw-bolder mb-75">19,860</h3>
              <span>Unverified Users</span>
            </div>
            <div class="avatar bg-light-success p-50">
              <span class="avatar-content">
                <i data-feather="user-check" class="font-medium-4"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card">
          <div
            class="card-body d-flex align-items-center justify-content-between"
          >
            <div>
              <h3 class="fw-bolder mb-75">237</h3>
              <span>Deactivated Users</span>
            </div>
            <div class="avatar bg-light-warning p-50">
              <span class="avatar-content">
                <i data-feather="user-x" class="font-medium-4"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body border-bottom">
        <h4 class="card-title">Search & Filter</h4>
      </div>
      <div class="card-datatable table-responsive pt-0">
        <div
          class="
            d-flex
            justify-content-between
            align-items-center
            header-actions
            mx-2
            row
            mt-75
          "
        >
          <div
            class="
              col-sm-12 col-lg-4
              d-flex
              justify-content-center justify-content-lg-start
            "
          >
            <div class="dataTables_length" id="DataTables_Table_0_length">
              <label
                >Show
                <select
                  name="DataTables_Table_0_length"
                  aria-controls="DataTables_Table_0"
                  class="form-select"
                  v-model="tableData.length"
                  @change="getProjects()"
                >
                  <option
                    v-for="(records, index) in perPage"
                    :key="index"
                    :value="records"
                  >
                    {{ records }}
                  </option>
                </select>
                entries</label
              >
            </div>
          </div>
          <div class="col-sm-12 col-lg-8 ps-xl-75 ps-0">
            <div
              class="
                dt-action-buttons
                d-flex
                align-items-center
                justify-content-center justify-content-lg-end
                flex-lg-nowrap flex-wrap
              "
            >
              <div class="me-1">
                <div id="DataTables_Table_0_filter" class="dataTables_filter">
                  <label
                    >Search:<input
                      type="search"
                      class="form-control"
                      v-model="tableData.search"
                      placeholder="Search Table"
                      @input="getProjects()"
                  /></label>
                </div>
              </div>
              <div class="dt-buttons d-inline-flex mt-50">
                <button
                  class="dt-button add-new btn btn-primary"
                  tabindex="0"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modals-slide-in"
                  @click="isAddNewUserSidebarActive = true"
                >
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <datatable
          :columns="columns"
          :sortKey="sortKey"
          :sortOrders="sortOrders"
          @sort="sortBy"
        >
          <tbody>
            <tr v-for="project in projects" :key="project.id">
              <td>{{ project.mobile_no }}</td>
              <td>{{ project.creds }}</td>
              <td>{{ project.receipt }}</td>
              <td>{{ project.amount_spent }}</td>
              <td>
                <b-dropdown
                  variant="link"
                  no-caret
                  :right="$store.state.appConfig.isRTL"
                >
                  <template #button-content>
                    <feather-icon
                      icon="MoreVerticalIcon"
                      size="16"
                      class="align-middle text-body"
                    />
                  </template>
                  <b-dropdown-item
                    :to="{ name: 'customers', params: { id: project.id } }"
                  >
                    <feather-icon icon="FileTextIcon" />
                    <span class="align-middle ml-50">Details</span>
                  </b-dropdown-item>

                  <b-dropdown-item
                    :to="{ name: 'customers', params: { id: project.id } }"
                  >
                    <feather-icon icon="EditIcon" />
                    <span class="align-middle ml-50">Edit</span>
                  </b-dropdown-item>

                  <b-dropdown-item>
                    <feather-icon icon="TrashIcon" />
                    <span class="align-middle ml-50">Delete</span>
                  </b-dropdown-item>
                </b-dropdown>
              </td>
            </tr>
          </tbody>
        </datatable>
        <pagination
          :pagination="pagination"
          @prev="getProjects(pagination.prevPageUrl)"
          @next="getProjects(pagination.nextPageUrl)"
        >
        </pagination>
      </div>
      <!-- Modal to add new user starts-->
      <div
        class="modal modal-slide-in new-user-modal fade"
        id="modals-slide-in"
      >
        <div class="modal-dialog">
          <form class="add-new-user modal-content pt-0">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              ×
            </button>
            <div class="modal-header mb-1">
              <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
            </div>
            <div class="modal-body flex-grow-1">
              <div class="mb-1">
                <label class="form-label" for="basic-icon-default-fullname"
                  >Full Name</label
                >
                <input
                  type="text"
                  class="form-control dt-full-name"
                  id="basic-icon-default-fullname"
                  placeholder="John Doe"
                  name="user-fullname"
                />
              </div>
              <div class="mb-1">
                <label class="form-label" for="basic-icon-default-uname"
                  >Username</label
                >
                <input
                  type="text"
                  id="basic-icon-default-uname"
                  class="form-control dt-uname"
                  placeholder="Web Developer"
                  name="user-name"
                />
              </div>
              <div class="mb-1">
                <label class="form-label" for="basic-icon-default-email"
                  >Email</label
                >
                <input
                  type="text"
                  id="basic-icon-default-email"
                  class="form-control dt-email"
                  placeholder="john.doe@example.com"
                  name="user-email"
                />
              </div>
              <div class="mb-1">
                <label class="form-label" for="basic-icon-default-contact"
                  >Contact</label
                >
                <input
                  type="text"
                  id="basic-icon-default-contact"
                  class="form-control dt-contact"
                  placeholder="+1 (609) 933-44-22"
                  name="user-contact"
                />
              </div>
              <div class="mb-1">
                <label class="form-label" for="basic-icon-default-company"
                  >Company</label
                >
                <input
                  type="text"
                  id="basic-icon-default-company"
                  class="form-control dt-contact"
                  placeholder="PIXINVENT"
                  name="user-company"
                />
              </div>
              <div class="mb-1">
                <label class="form-label" for="country">Country</label>
                <select id="country" class="select2 form-select">
                  <option value="Australia">USA</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Canada">Canada</option>
                  <option value="China">China</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Korea">Korea, Republic of</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Russia">Russian Federation</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                </select>
              </div>
              <div class="mb-1">
                <label class="form-label" for="user-role">User Role</label>
                <select id="user-role" class="select2 form-select">
                  <option value="subscriber">Subscriber</option>
                  <option value="editor">Editor</option>
                  <option value="maintainer">Maintainer</option>
                  <option value="author">Author</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div class="mb-2">
                <label class="form-label" for="user-plan">Select Plan</label>
                <select id="user-plan" class="select2 form-select">
                  <option value="basic">Basic</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="company">Company</option>
                  <option value="team">Team</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary me-1 data-submit">
                Submit
              </button>
              <button
                type="reset"
                class="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- Modal to add new user Ends-->
    </div>
  </div>
</template>


<script>
import Datatable from "@/views/components/datatable/Datatable.vue";
import Pagination from "@/views/components/datatable/Pagination.vue";
import jwtHeader from "@core/services/jwt-header";
import { $themeConfig } from "@themeConfig";
import axios from "axios";
import {
  BDropdown,
  BDropdownItem,
  BSidebar,
  BFormGroup,
  BFormInput,
  BForm,
  BButton,
} from "bootstrap-vue";
import { ref, onUnmounted } from "@vue/composition-api";

export default {
  components: {
    datatable: Datatable,
    pagination: Pagination,
    BDropdown,
    BDropdownItem,
    BSidebar,
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
  },
  setup() {
    // App Name
    const isAddNewUserSidebarActive = ref(false);

    const { baseURL } = $themeConfig.app;
    return {
      isAddNewUserSidebarActive,
      baseURL,
    };
  },
  created() {
    this.getProjects();
  },
  data() {
    let sortOrders = {};
    let columns = [
      { width: "33%", label: "mobile_no", name: "mobile_no" },
      { width: "33%", label: "creds", name: "creds" },
      { width: "33%", label: "receipt", name: "receipt" },
      { width: "33%", label: "amount_spent", name: "amount_spent" },
      { width: "33%", label: "Action", name: "action" },
    ];
    columns.forEach((column) => {
      sortOrders[column.name] = -1;
    });
    return {
      projects: [],
      columns: columns,
      sortKey: "deadline",
      sortOrders: sortOrders,
      perPage: ["10", "20", "30"],
      tableData: {
        draw: 0,
        length: 10,
        search: "",
        column: 0,
        dir: "desc",
      },
      pagination: {
        lastPage: "",
        currentPage: "",
        total: "",
        lastPageUrl: "",
        nextPageUrl: "",
        prevPageUrl: "",
        from: "",
        to: "",
      },
    };
  },
  methods: {
    getProjects(url = this.baseURL + "/transaction-logs") {
      this.tableData.draw++;
      axios
        .get(url, { params: this.tableData, headers: jwtHeader() })
        .then((response) => {
          console.log(response.data);
          let data = response.data;
          if (this.tableData.draw == data.draw) {
            this.projects = data.data.data;
            this.configPagination(data.data);
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    configPagination(data) {
      this.pagination.lastPage = data.last_page;
      this.pagination.currentPage = data.current_page;
      this.pagination.total = data.total;
      this.pagination.lastPageUrl = data.last_page_url;
      this.pagination.nextPageUrl = data.next_page_url;
      this.pagination.prevPageUrl = data.prev_page_url;
      this.pagination.from = data.from;
      this.pagination.to = data.to;
    },
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
      this.tableData.column = this.getIndex(this.columns, "name", key);
      this.tableData.dir = this.sortOrders[key] === 1 ? "asc" : "desc";
      this.getProjects();
    },
    getIndex(array, key, value) {
      return array.findIndex((i) => i[key] == value);
    },
  },
};
</script>