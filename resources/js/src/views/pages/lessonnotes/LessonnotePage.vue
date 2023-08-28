<template>
    <div>  
        <div class="row">

          <b-sidebar
            id="add-new-user-sidebar-2"
            :visible="isManagementSidebarActive"
            bg-variant="white"
            sidebar-class="sidebar-md"
            shadow
            backdrop
            no-header
            right
          >
            <template >
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
                <h5 class="mb-0">Management Details</h5>

                <feather-icon
                  class="ml-1 cursor-pointer"
                  icon="XIcon"
                  size="16"
                  @click="isManagementSidebarActive = false"
                />
              </div>

              <b-form
                class="p-2"
                @reset.prevent="resetForm"
              >
                  <b-row>

                    <b-col cols="12" md="12" >
                      <b-form-group label="Quality Percentage Performance" label-for="quality">
                        <b-form-input v-model="quality"  type="number" disabled></b-form-input>
                      </b-form-group>
                    </b-col>

                    <b-col cols="12" md="12" >
                      <b-form-group label="Classwork Percentage Performance" label-for="sub_perf_classwork">
                        <b-form-input v-model="sub_perf_classwork" type="number" disabled></b-form-input>
                      </b-form-group>                    
                    </b-col>                 

                    <b-col cols="12" md="12">
                      <b-form-group label="Homework Percentage Performance" label-for="sub_perf_homework">
                        <b-form-input v-model="sub_perf_homework" type="number" disabled></b-form-input>
                      </b-form-group>                    
                    </b-col>

                    <b-col cols="12" md="12">
                      <b-form-group label="Test Percentage Performance" label-for="sub_perf_test">
                        <b-form-input v-model="sub_perf_test" type="number" disabled></b-form-input>
                      </b-form-group>                    
                    </b-col>

                    <b-col cols="12" md="12">
                      <b-form-group label="Total Average Percentage Performance" label-for="sub_perf_test">
                        <b-form-input v-model="score" type="number" disabled></b-form-input>
                      </b-form-group>                    
                    </b-col>
                  
                  </b-row>

                  <b-row class="filter-padding">               
                    <b-button
                      type="button"
                      class="mr-2 col-md-12"
                      variant="dark"
                      @click="isManagementSidebarActive = false"
                    >
                      Cancel
                    </b-button>
                  </b-row>

              </b-form>

            </template>
          </b-sidebar>

          <b-sidebar
            id="add-new-user-sidebar"
            :visible="isLessonnoteSidebarActive"
            bg-variant="white"
            sidebar-class="sidebar-md"
            shadow
            backdrop
            no-header
            right
          >
            <template >
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
                <h5 class="mb-0">Advanced Filter</h5>

                <feather-icon
                  class="ml-1 cursor-pointer"
                  icon="XIcon"
                  size="16"
                  @click="isLessonnoteSidebarActive = false"
                />
              </div>

              <b-form
                class="p-2"
                @submit.prevent="handleChange()"
                @reset.prevent="resetForm"
              >
                <b-row>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor'">
                    <b-form-group label="Select school" label-for="school">
                      <b-form-select
                        v-model="filters.schoolId"
                        :options="schoolOptions"
                        @change="loadOtherValues"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ">
                    <b-form-group label="Select teacher" label-for="teacher">
                      <b-form-select
                        v-model="filters.teacherId"
                        :options="teacherOptions"
                        @change="teacherGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="Select a class" label-for="classes">
                      <b-form-select
                        v-model="filters.classIndex"
                        :options="classOptions"
                        @change="classGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="Select a Calendar Period" label-for="calendar">
                      <b-form-select
                        v-model="filters.calendarId"
                        :options="calendarOptions"
                        @change="calendarGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="Select a Subject" label-for="subject">
                      <b-form-select
                        v-model="filters.subjectId"
                        :options="subjectOptions"
                        @change="subjectGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="Select a Week" label-for="week">
                      <b-form-select
                        v-model="filters.week"
                        :options="weekOptions"
                        @change="weekGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="Select a Status" label-for="status">
                      <b-form-select
                        v-model="filters.status"
                        :options="statusOptions"
                        @change="statusGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="From" label-for="from">
                      <b-form-datepicker
                        id="from"
                        v-model="filters.dateFrom"
                        placeholder="Choose a date"
                        local="en"
                        initial-date="2023-01-01"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="To" label-for="to">
                      <b-form-datepicker
                        id="to"
                        v-model="filters.dateTo"
                        placeholder="Choose a date"
                        local="en"
                        initial-date="2023-01-01"
                      />
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row class="filter-padding">
                  <b-button variant="success" class="mr-2 col-md-12" type="submit">
                    Filter Page
                  </b-button>

                  <b-button
                    type="button"
                    class="mr-2 col-md-12"
                    variant="dark"
                    @click="reset"
                  >
                    Reset
                  </b-button>
                </b-row>
              </b-form>

            </template>
          </b-sidebar>
          
          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UsersIcon"
              color="primary"
              :statistic=" totalLessonnotes === undefined ? 0 : totalLessonnotes "
              statistic-title="Total Expected"
            />
          </b-col>

          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalActiveLessonnotes === undefined ? 0 :totalActiveLessonnotes
              "
              statistic-title="Submitted"
            />
          </b-col>

          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UserMinusIcon"
              color="danger"
              :statistic="
                totalInactiveLessonnotes === undefined ? 0 : totalInactiveLessonnotes
              "
              statistic-title="Closed"
            />
          </b-col>

        </div>

        <div class="row mt-2 mb-4"> 
          <b-col lg="12" sm="6">

            <b-form-tags
                input-id="tags-pills"
                v-model="searchValues"
                tag-variant="warning"
                tag-pills
                size="lg"
                placeholder="Search items will appear here...."
                separator=" "
                no-add-on-enter
                :disabled="true"
            >
            </b-form-tags>

          </b-col>
        </div>
  
        <!-- Table Container Card -->
        <b-card
          no-body
          class="mb-0"
        >    
          <div class="m-2">    
            <!-- Table Top -->
            <b-row>    
              <!-- Per Page -->
              <b-col
                cols="12"
                md="6"
                class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
              >
                <label>Show</label>
                <v-select
                  v-model="perPage"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="perPageOptions"
                  :clearable="false"
                  class="per-page-selector d-inline-block mx-50"
                />
                <label>entries</label>
              </b-col>
    
              <!-- Search -->
              <b-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-items-center justify-content-end">
                  <b-form-input
                    v-model="searchQuery"
                    class="d-inline-block mr-1"
                    placeholder="Search..."
                  />

                  <b-button
                    variant="success"
                    @click="isLessonnoteSidebarActive = true"
                  >
                    <span class="text-nowrap">Advanced Filter</span>
                  </b-button>

                  <b-button
                    variant="danger"
                    @click="reset"
                  >
                    <span class="text-nowrap">Reset</span>
                  </b-button>

                </div>
              </b-col>
            </b-row>

          </div>
    
          <b-table
            ref="refLessonnoteListTable"
            v-if=" userData.role === 'teacher' "
            class="position-relative"
            :items="LessonnoteItems"
            :busy="isLoading"
            responsive
            :fields="tableColumns"
            primary-key="id"
            :sort-by.sync="sortBy"
            show-empty
            empty-text="No matching records found"
            :sort-desc.sync="isSortDirDesc"
          >

              <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
    
            <!-- Column: User -->
          <!-- <template #cell(user)="data">
              <b-media vertical-align="center">
                <template #aside>
                  <b-avatar
                    size="32"
                    :src="data.item.avatar"
                    :text="avatarText(data.item.fullName)"
                    :variant="`light-${resolveUserRoleVariant(data.item.role)}`"
                    :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
                  />
                </template>
                <b-link
                  :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
                  class="font-weight-bold d-block text-nowrap"
                >
                  {{ data.item.fullName }}
                </b-link>
                <small class="text-muted">@{{ data.item.username }}</small>
              </b-media>
            </template>-->
    
            <!-- Column: Role -->
          <!-- <template #cell(role)="data">
              <div class="text-nowrap">
                <feather-icon
                  :icon="resolveUserRoleIcon(data.item.role)"
                  size="18"
                  class="mr-50"
                  :class="`text-${resolveUserRoleVariant(data.item.role)}`"
                />
                <span class="align-text-top text-capitalize">{{ data.item.role }}</span>
              </div>
            </template>-->
    
             <!-- Column: Submission -->
             <template #cell(submission)="data">
               <div>
                  <b> {{  data.item.resubmission != null ? String( data.item.resubmission ).replace(".000+00:00","") : data.item.submission != null ? String( data.item.submission ).replace(".000+00:00","") : "Not yet submitted" }} </b>
               </div>               
             </template>

              <!-- Column: Status -->
              <template #cell(status)="data">
                <b-badge
                pill
                :variant="`light-${resolveLessonnotestatusVariant( data.item.resubmission != null && data.item.revert == null && data.item.approval == null ? 2 : data.item.revert != null ? -1 : data.item.approval != null ? 1 : data.item.closure != null ? 3 : data.item.launch != null ? 0 : 2  )}`"
                class="text-capitalize"
                >      
                   {{  data.item.resubmission != null && data.item.approval == null && data.item.revert == null ? "Re-submitted" : data.item.submission != null && data.item.revert == null && data.item.approval == null ? getStatusOfLessonnote("submission",data.item.expected_submission,data.item.submission ) : data.item.revert != null ? "Reverted" : data.item.approval != null ? "Approved" : data.item.closure != null ? getStatusOfLessonnote("closure",data.item.expected_submission,data.item.closure ) : data.item.launch != null ? "Launched" : "Queued" }}
                </b-badge>
             </template>

              <!-- Column: Class Index -->
              <template #cell(class_index)="data">
               <div>
                <b> {{   data.item.class_index === 7 ? "JSS1" : data.item.class_index === 8 ? "JSS2" : data.item.class_index === 9 ? "JSS3" : data.item.class_index === 10 ? "SS1" : data.item.class_index === 11 ? "SS2" : data.item.class_index === 12 ? "SS3" : "Nil"  }} </b>
               </div>               
             </template>

            <!-- Column: Term -->
            <template #cell(calendar.term)="data">
              <b-badge
                pill
                :variant="`light-${resolveLessonnotestatusVariant(data.item.calendar.term)}`"
                class="text-capitalize"
              >
                {{ data.item.calendar.term === 1 ? "1st Term" : data.item.calendar.term === 2 ? "2nd Term" : data.item.calendar.term === 3 ? "3rd Term" : " "  }}
              </b-badge>
            </template> 
    
            <!-- Column: Actions -->
            <template #cell(actions)="data">
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

                <b-dropdown-item @click="openfile(data.item.lsnPath, data.item.title)" v-if = " data.item.submission != null " >
                  <feather-icon icon="FileTextIcon"  />
                  <span class="align-middle ml-50">View Lessonnote File</span>
                </b-dropdown-item>

                <b-dropdown-item v-if=" data.item.approval !== null && data.item.closure == null && getClosureAllowed( new Date() , data.item.expected_closure ) && data.item.can_close" @click="triggerClosure( 'teacher', data.item.title, data.item.lessonnoteId, data.item.teacher.teaId ) "   >
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">Close this lessonnote</span>
                </b-dropdown-item>

                <b-dropdown-item :to="{ name: 'lessonnotes-home-view', params: { id: data.item.lessonnoteId } }" v-if = " data.item.submission != null " >
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">View Details</span>
                </b-dropdown-item>   

                <b-dropdown-item :to="{ name: 'lessonnotes-student-home', params: { id: data.item.lessonnoteId } }" v-if = " data.item.approval != null ">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">Add Student's Scores</span>
                </b-dropdown-item> 

                <b-dropdown-item @click="isManagementSidebarActive = true; loadManagement(data.item); "  v-if = " data.item.approval != null ">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">View Management Details</span>
                </b-dropdown-item>
                
                <b-dropdown-item :to="{ name: 'lessonnotes-activity-home', params: { id: data.item.lessonnoteId } }" v-if = " data.item.submission != null ">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50"> View its Activities </span>
                </b-dropdown-item> 

              </b-dropdown>
            </template>
    
          </b-table>

          <b-table
            ref="refLessonnoteListTable"
            v-if=" userData.role === 'principal' "
            class="my-class"
            :items="LessonnoteItems"
            :busy="isLoading"
            responsive
            :fields="tableColumnsPrincipal"
            primary-key="id"
            :sort-by.sync="sortBy"
            show-empty
            empty-text="No matching records found"
            :sort-desc.sync="isSortDirDesc"
          >

              <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
    
             <!-- Column: Submission -->
             <template #cell(lsn_id.submission)="data">
               <div>
                {{ String( data.item.lsn_id.submission ).replace(".000+00:00","") }}
               </div>               
             </template>

              <!-- Column: Status -->
              <template #cell(action)="data">
                <b-badge
                pill
                :variant="`light-${resolveLessonnoteactionVariant(data.item.action)}`"
                class="text-capitalize"
                >      
                   {{  data.item.action === "submit" ? "Submitted" : data.item.action }}
                </b-badge>
             </template>

              <!-- Column: Class Index -->
              <template #cell(lsn_id.class_index)="data">
               <div>
                <b> {{   data.item.lsn_id.class_index === 7 ? "JSS1" : data.item.lsn_id.class_index === 8 ? "JSS2" : data.item.lsn_id.class_index === 9 ? "JSS3" : data.item.lsn_id.class_index === 10 ? "SS1" : data.item.lsn_id.class_index === 11 ? "SS2" : data.item.lsn_id.class_index === 12 ? "SS3" : "Nil"  }} </b>
               </div>               
             </template>

            <!-- Column: Term -->
            <template #cell(lsn_id.calendar.term)="data">
              <b-badge
                pill
                :variant="`light-${resolveLessonnotestatusVariant(data.item.lsn_id.calendar.term)}`"
                class="text-capitalize"
              >
                {{ data.item.lsn_id.calendar.term === 1 ? "1st Term" : data.item.lsn_id.calendar.term === 2 ? "2nd Term" : data.item.lsn_id.calendar.term === 3 ? "3rd Term" : " "  }}
              </b-badge>
            </template>

            <!-- Column: Management Quality -->
            <template #cell(management)="data">
              <b-badge
                pill
                :variant="`light-${resolveLessonnotemagVariant(data.item.management)}`"
                class="text-capitalize"
              >
                {{ data.item.management === 0 ? "Good" : data.item.management === 100 ? "Excellent" : data.item.management === 60 ? "Satisfactory" : data.item.management === 50 ? "Bad" : data.item.management === 30 ? "Terrible" : "Not available"  }}
              </b-badge>
            </template>

            <template #cell(actions)="data">
              <div class="d-flex flex-column">
                <b-button size="sm" variant="success" class="mb-1" v-if=" ( data.item.lsn_id.resubmission != null || data.item.lsn_id.submission != null ) && data.item.lsn_id.revert == null && data.item.lsn_id.approval == null "  @click= " triggerApprove( data.item.lsn_id.title , data.item.lsn_id.lessonnoteId, data.item.lsn_id.teacher.teaId  ) " >Approve</b-button>
                <b-button size="sm" variant="danger"  class="mb-1"  v-if=" ( data.item.lsn_id.resubmission != null || data.item.lsn_id.submission != null ) && data.item.lsn_id.revert == null && data.item.lsn_id.approval == null " @click= " triggerDisapprove( data.item.lsn_id.title, data.item.lsn_id.lessonnoteId, data.item.lsn_id.teacher.teaId ) " >Query</b-button>
                <b-button size="sm" variant="primary" class="mb-1" v-if=" data.item.lsn_id.approval !== null && data.item.lsn_id.closure != null  " @click= " triggerClosure( 'principal', data.item.lsn_id.title, data.item.lsn_id.lessonnoteId, data.item.lsn_id.teacher.teaId ) "  >Close</b-button>
                
                <b-button size="sm" variant="info" @click="openfile(data.item.lsn_id.lsnPath, data.item.lsn_id.title)" > View File </b-button>
              </div>
            </template>

            <!-- Column: Actions -->
           <!-- <template #cell(actions)="data">
              <b-dropdown               
                variant="link"
                no-caret  
                left=true        
              >       
                <template #button-content>
                  <feather-icon
                    icon="MoreVerticalIcon"
                    size="20"
                    class="align-middle text-body"
                  />     
                </template>

                <b-dropdown-item v-if=" ( data.item.lsn_id.resubmission != null || data.item.lsn_id.submission != null ) && data.item.lsn_id.revert == null && data.item.lsn_id.approval == null "  @click= " triggerApprove( data.item.lsn_id.title , data.item.lsn_id.lessonnoteId, data.item.lsn_id.teacher.teaId  ) " >
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">Approve lessonnote</span>
                </b-dropdown-item>   

                <b-dropdown-item v-if=" ( data.item.lsn_id.resubmission != null || data.item.lsn_id.submission != null ) && data.item.lsn_id.revert == null && data.item.lsn_id.approval == null " @click= " triggerDisapprove( data.item.lsn_id.title, data.item.lsn_id.lessonnoteId, data.item.lsn_id.teacher.teaId ) " >
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">Revert lessonnote </span>
                </b-dropdown-item> 

                <b-dropdown-item v-if=" data.item.lsn_id.approval !== null && data.item.lsn_id.closure != null  " @click= " triggerClosure( 'principal', data.item.lsn_id.title, data.item.lsn_id.lessonnoteId, data.item.lsn_id.teacher.teaId ) "   >
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">Close lessonnote</span>
                </b-dropdown-item> 

                <b-dropdown-item @click="openfile(data.item.lsn_id.lsnPath, data.item.lsn_id.title)" v-if=" ( data.item.lsn_id.resubmission != null || data.item.lsn_id.submission != null ) " >
                  <feather-icon icon="FileTextIcon"  />
                  <span class="align-middle ml-50">View Lessonnote File</span>
                </b-dropdown-item>

                <b-dropdown-item :to="{ name: 'lessonnotes-home-view', params: { id: data.item.lsn_id.lessonnoteId } }" v-if=" ( data.item.lsn_id.resubmission != null || data.item.lsn_id.submission != null ) " >
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">View Details</span>
                </b-dropdown-item>   

                <b-dropdown-item :to="{ name: 'lessonnotes-student-home', params: { id: data.item.lsn_id.lessonnoteId } }" v-if=" ( data.item.lsn_id.approval != null ) ">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">View Student's Performance</span>
                </b-dropdown-item> 

                <b-dropdown-item @click="isManagementSidebarActive = true; loadManagement(data.item.lsn_id); " v-if=" ( data.item.lsn_id.approval != null ) ">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">View Management Details</span>
                </b-dropdown-item>
                
                <b-dropdown-item :to="{ name: 'lessonnotes-activity-home', params: { id: data.item.lsn_id.lessonnoteId } }" v-if=" ( data.item.lsn_id.submission != null ) " >
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50"> View its Activities </span>
                </b-dropdown-item> 

              </b-dropdown>
            </template>-->
    
          </b-table>

          <div class="mx-2 mb-2">
            <b-row>
    
              <b-col
                cols="12"
                sm="6"
                class="d-flex align-items-center justify-content-center justify-content-sm-start"
              >
                <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
              </b-col>
              <!-- Pagination -->
              <b-col
                cols="12"
                sm="6"
                class="d-flex align-items-center justify-content-center justify-content-sm-end"
              >
    
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalLessonnotes"
                  :per-page="perPage"
                  first-number
                  last-number
                  class="mb-0 mt-1 mt-sm-0"
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="handlePageChange"
                >
                  <template #prev-text>
                    <feather-icon
                      icon="ChevronLeftIcon"
                      size="18"
                    />
                  </template>
                  <template #next-text>
                    <feather-icon
                      icon="ChevronRightIcon"
                      size="18"
                    />
                  </template>
                </b-pagination>
    
              </b-col>
    
            </b-row>
          </div>

        </b-card>

        <!-- modal Approve -->
        <b-modal
          ref="my-modal-approve-lessonnote"
          hide-footer
          :title="modalTitle"
          no-close-on-backdrop
          content-class="shadow"
        >      
          <span> 
            <h3> <b>
              Are you sure you are satisfied with this Lessonnote?
             </b> 
            </h3> 
          </span>

              <b-row>
                  <b-col cols="4" md="12">
                    <b-form-group label="Classwork attached?" label-for="">
                     <b-form-checkbox
                      v-model="filters.hasClasswork"
                      switch
                    />
                    </b-form-group>
                  </b-col>

                  <b-col cols="4" md="12">
                    <b-form-group label="Homework attached?" label-for="">
                     <b-form-checkbox
                      v-model="filters.hasHomework"
                      switch
                    />
                    </b-form-group>
                  </b-col>

                  <b-col cols="4" md="12">
                    <b-form-group label="Test attached?" label-for="">
                     <b-form-checkbox
                      v-model="filters.hasTest"
                      switch
                    />
                    </b-form-group>
                  </b-col>
                 
              </b-row>

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-3"
            variant="warning"
            block
            @click="hideModal"
          >
            Cancel
          </b-button>

          <b-button
            v-if=" !isLoading "
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-2"
            variant="success"
            block
            @click="principalActionApprove( LessonnotePicked )"
          >
            Approve Lessonnote
          </b-button>
          <b-button  
            v-else
            class="mt-2"
            variant="outline-danger"
            block
          >
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
          </b-button>
        </b-modal>

        <!-- modal Disapprove -->
        <b-modal
          ref="my-modal-disapprove-lessonnote"
          hide-footer
          :title="modalTitle2"
          no-close-on-backdrop
          content-class="shadow"
        >    
         <span> 
            <h3> <b>
              Please select the problems of this Lessonnote:
             </b> 
            </h3> 
          </span>  
            <b-row>
                  <b-col cols="6" md="12">
                    <b-form-group label="Grammar?" label-for="">
                     <b-form-checkbox
                      v-model="grammar"
                      switch
                    />
                    </b-form-group>
                  </b-col>

                  <b-col cols="6" md="12">
                    <b-form-group label="Arrangement?" label-for="">
                     <b-form-checkbox
                      v-model="arrangement"
                      switch
                    />
                    </b-form-group>
                  </b-col>

                  <b-col cols="6" md="12">
                    <b-form-group label="Subject Matter?" label-for="">
                     <b-form-checkbox
                      v-model="subjectmatter"
                      switch
                    />
                    </b-form-group>
                  </b-col> 

                   <b-col cols="6" md="12">
                    <b-form-group label="Incomplete Assessment/No Assessment?" label-for="">
                     <b-form-checkbox
                      v-model="incomplete"
                      switch
                    />
                    </b-form-group>
                  </b-col>                  
            </b-row>

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-3"
            variant="warning"
            block
            @click="hideModal2"
          >
            Cancel
          </b-button>
          <b-button
            v-if=" !isLoading && ( arrangement !== null || subjectmatter !== null || grammar !== null || incomplete !== null ) "
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-2"
            variant="success"
            block
            @click="principalActionDisapprove( LessonnotePicked )"
          >
            Revert Lessonnote
          </b-button>
          <b-button  
            v-else
            class="mt-2"
            variant="outline-danger"
            block
          >
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
          </b-button>

        </b-modal>

        <!-- modal Close Lessonnote Teacher   -->
        <b-modal
          ref="my-modal-closure-t-lessonnote"
          hide-footer
          :title="modalTitle3"
          no-close-on-backdrop
          content-class="shadow"
        >    
         <span> 
            <h3> <b>
             Ready to close this Lessonnote?
             </b> 
            </h3> 
          </span>  
            
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-3"
            variant="outline-warning"
            block
            @click="hideModal3"
          >
            Cancel
          </b-button>
          <b-button
            v-if=" !isLoading "
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-2"
            variant="success"
            block
            @click="teacherActionClosure( LessonnotePicked )"
          >
            Close Lessonnote
          </b-button>
          <b-button  
            v-else
            class="mt-2"
            variant="outline-danger"
            block
          >
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
          </b-button>

        </b-modal>

         <!-- modal Close Lessonnote Principal  -->
        <b-modal
          ref="my-modal-closure-p-lessonnote"
          hide-footer
          :title="modalTitle4"
          no-close-on-backdrop
          content-class="shadow"
        >    
         <span> 
            <h3> <b>
             Ready to close this Lessonnote?
             </b> 
            </h3> 
          </span>  
            
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-3"
            variant="warning"
            block
            @click="hideModal4"
          >
            Cancel
          </b-button>

          <b-button
            v-if=" !isLoading "
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-2"
            variant="success"
            block
            @click="principalActionClosure( LessonnotePicked )"
          >
            Close this Lessonnote
          </b-button>

          <b-button  
            v-else
            class="mt-2"
            variant="outline-danger"
            block
          >
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
          </b-button>

        </b-modal>
 
    </div>
  </template>
  
  <script>
      import {
        BCard,
        BRow,
        BCol,
        BFormCheckbox,
        BFormInput,
        BFormGroup,
        BModal,
        BButton,
        BSpinner,
        BTable,
        BSidebar,
        BForm,
        BMedia,
        BAvatar,
        BFormSelect,
        BFormTags,
        BCardText,
        BFormDatepicker,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
      } from 'bootstrap-vue';
      import Ripple from 'vue-ripple-directive'
      import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
      import vSelect from 'vue-select'
      //import router from '@/router'

      import axios from "axios";
      import jwtHeader from "@core/services/jwt-header";
      import store from '@/store'
      import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
      import { $themeConfig } from "@themeConfig";
      //import { avatarText } from '@core/utils/filter'
      import formValidation from '@core/comp-functions/forms/form-validation'
      // Notification
      import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
      import useLessonnoteList from './useLessonnoteList'
      import lessonnoteStoreModule from './lessonnoteStoreModule'
      
      export default {
        components: {
        
          StatisticCardHorizontal,
          BCard,
          BRow,
          BCol,
          BFormCheckbox,
          BFormInput,
          BFormGroup,
          BModal,
          BButton,
          BSpinner,
          BTable,
          BSidebar,
          BForm,
          BFormTags,
          BMedia,
          BAvatar,
          BFormSelect,
          BCardText,
          BFormDatepicker,
          BLink,
          BBadge,
          BDropdown,
          BDropdownItem,
          BPagination,
      
          vSelect
        },

        directives: {
          Ripple
        },

        data() {
          
          let teacherOptions = [
          // { value: null, text: "Please select Teacher" }
          ]

          let classOptions = [
          // { value: null, text: "Please select Class" }
          ]

          let calendarOptions = [
          // { value: null, text: "Please select Calendar" }
          ]

          let weekOptions = [
          // { value: null, text: "Please select a Week" }
          ]

          let subjectOptions = [
            //{ value: null, text: "Please select a Subject" }
          ]

          let statusOptions = [
          // { value: null, text: "Please select a Status" }
          ]

          let grammarOptions = [
            { value: null, text: "Please select a Grade for Grammar" },
            { value: 10, text: "10%" },
            { value: 20, text: "20%" },
            { value: 30, text: "30%" },
            { value: 40, text: "40%" },
            { value: 50, text: "50%" },
            { value: 60, text: "60%" },
            { value: 70, text: "70%" },
            { value: 80, text: "80%" },
            { value: 90, text: "90%" },
            { value: 100, text: "100%" }
          ]

          let arrangementOptions = [
            { value: null, text: "Please select a Grade for Arrangement" },
            { value: 10, text: "10%" },
            { value: 20, text: "20%" },
            { value: 30, text: "30%" },
            { value: 40, text: "40%" },
            { value: 50, text: "50%" },
            { value: 60, text: "60%" },
            { value: 70, text: "70%" },
            { value: 80, text: "80%" },
            { value: 90, text: "90%" },
            { value: 100, text: "100%" }
          ]

          let modalTitle,modalTitle2  = "";

          let grammar, arrangement, subjectmatter, incomplete = false;

          let teacherPicked , LessonnotePicked = null;

          return {  
            quality: "",
            sub_perf_classwork: "",
            sub_perf_homework: "",
            sub_perf_test: "",
            score: "",

            grammar,
            arrangement,
            subjectmatter,
            incomplete,

            modalTitle, 
            modalTitle2,

            teacherOptions,
            classOptions,
            calendarOptions,
            weekOptions,
            subjectOptions,
            statusOptions,
            grammarOptions,
            arrangementOptions,

            teacherPicked,
            LessonnotePicked,

            searchValuesCurrent: {
                teacher: "nil",
                class: "nil",
                calendar: "nil",
                week: "nil",
                subject: "nil",
                status: "nil"
            }     
          }
        },

        mounted(){
            if(this.userData.role !== "proprietor"){
                setTimeout(() => {
                    this.loadOtherValues( this.teacherData.school.schId );
                },2000);        
            }
        },

        setup() {
          const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
          const Lessonnote_APP_STORE_MODULE_NAME = 'app-lessonnote';
          const { baseURL, backendURL } = $themeConfig.app;

          // Register module
          if (!store.hasModule(Lessonnote_APP_STORE_MODULE_NAME)) store.registerModule(Lessonnote_APP_STORE_MODULE_NAME, lessonnoteStoreModule)
      
          // UnRegister on leave
          onUnmounted(() => {
            if (store.hasModule(Lessonnote_APP_STORE_MODULE_NAME)) store.unregisterModule(Lessonnote_APP_STORE_MODULE_NAME)
          })  
          
          const userData = ref({});
          const teacherData = ref({});
          const schoolOptions = ref([]);

          const storedItems = JSON.parse(localStorage.getItem('userData'));
          if (storedItems){
            userData.value = storedItems;
          }

          const storedItems2 = JSON.parse(localStorage.getItem('teacherData'));
          if (storedItems2){
            teacherData.value = storedItems2;
          }

          const findIfPropisPresent = ( userData.value.role === "proprietor"  );
          const findIfTeacherisPresent = ( userData.value.role === "teacher" );
          const findIfPrinisPresent = ( userData.value.role === "principal" );       
          
          const {
            fetchLessonnotes,
            tableColumns,
            tableColumnsPrincipal,
            perPage,
            currentPage,
            
            totalLessonnotes,
            totalActiveLessonnotes,
            totalInactiveLessonnotes,

            dataMeta,
            perPageOptions,
            searchQuery,
            sortBy,
            isSortDirDesc,
            refLessonnoteListTable,
            isLessonnoteSidebarActive,
            isManagementSidebarActive,
            isLoading,

            refetchData,
            handlePageChange,
            handleChange,

            // UI       
            resolveLessonnotestatusVariant,
            resolveLessonnotemagVariant,
            resolveLessonnoteactionVariant,

            filters,
            LessonnoteItems,

            searchValues

          } = useLessonnoteList();

          if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
              filters.value.teacherId = findIfTeacherisPresent && teacherData.value ? teacherData.value.teaId : null;
              filters.value.school = findIfPrinisPresent && teacherData.value ? teacherData.value.school.schId : null;
              filters.value.schoolgroup = (findIfPropisPresent || findIfPrinisPresent || findIfTeacherisPresent) && teacherData.value ? teacherData.value.school.owner.id : null;
          }

          (async function () {
            const resp = await store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchSchools`, { id : filters.value.schoolgroup });
            let myval = resp.data.data;
            myval.forEach(obj => {
              schoolOptions.value.push( { value: obj.schId , text: obj.name } )
            });
          })();

          onMounted(async () => {
            fetchLessonnotes();        
          })
          
          return {
            // Sidebar
            isLessonnoteSidebarActive,
            isManagementSidebarActive,
            isLoading,
      
            fetchLessonnotes,
            tableColumns,
            tableColumnsPrincipal,
            perPage,
            currentPage,

            totalLessonnotes,
            totalActiveLessonnotes,
            totalInactiveLessonnotes,

            dataMeta,
            perPageOptions,
            searchQuery,
            sortBy,
            isSortDirDesc,
            refLessonnoteListTable,

            refetchData,
            handlePageChange,
            handleChange,

            resetForm,
      
            // UI
            resolveLessonnotestatusVariant,
            resolveLessonnotemagVariant,
            resolveLessonnoteactionVariant,

            userData,
            teacherData,
            schoolOptions,
            
            filters,
            LessonnoteItems,

            searchValues,
            backendURL, 
            baseURL,
            Lessonnote_APP_STORE_MODULE_NAME

          }
        },
        methods: {

          getStatusOfLessonnote(type, last_date, actual_date){
            if (actual_date){
                const last_date_ = new Date(last_date).getTime();
                const act_date = new Date(actual_date).getTime();
                // Add 48 hours' worth of milliseconds (48 hours * 60 minutes * 60 seconds * 1000 milliseconds)
                const late_last_date = last_date_ + (48 * 60 * 60 * 1000); // 2 days after
                
                if (type === "submission"){
                  if (last_date_ > act_date){
                    return "Submitted" //green
                  }
                  else if ( (act_date > last_date_) && ( late_last_date > act_date ) ){
                    return "Late Submission" //amber
                  }
                  else if ( (act_date > late_last_date) ){
                    return "Non-Submission" //red
                  }
                }

                else if (type === "closure"){
                  if (last_date_ > act_date){
                    return "Closed"
                  }
                  else if ( (act_date > last_date_) && ( late_last_date > act_date ) ){
                    return "Late Closure"
                  }
                  else if ( (act_date > late_last_date) ){
                    return "Non-Closure"
                  }
                }
            }            
          },

          getClosureAllowed(last_date, actual_date){
            if (actual_date){
                const last_date_ = new Date(last_date).getTime();
                const act_date = new Date(actual_date).getTime();
                // Add 48 hours' worth of milliseconds (48 hours * 60 minutes * 60 seconds * 1000 milliseconds)
                const late_last_date = last_date_ + (48 * 60 * 60 * 1000); // 2 days after                
               
                  if (last_date_ > act_date){
                    return true;
                  }
                  else if ( (act_date > last_date_) && ( late_last_date > act_date ) ){
                    return true;
                  }
                  else if ( (act_date > late_last_date) ){
                    return false;
                  }                
            }            
          },
          
          reset(){
              this.isLessonnoteSidebarActive = false;
              
              if (this.userData.role !== "teacher"){
                this.teacherOptions = [
                  { value: null, text: "Please select Teacher" }
                ]

                this.classOptions = [
                  { value: null, text: "Please select Class Type" }
                ]

                this.calendarOptions = [
                  { value: null, text: "Please select Calendar" }
                ]

                this.weekOptions = [
                  { value: null, text: "Please select a Week" }
                ]

                this.subjectOptions = [
                  { value: null, text: "Please select a Subject" }
                ]

                this.statusOptions = [
                  { value: null, text: "Please select a Status" }
                ]
              }

            this.searchValuesCurrent.teacher = ""
            this.searchValuesCurrent.class = ""
            this.searchValuesCurrent.calendar = ""
            this.searchValuesCurrent.subject = ""
            this.searchValuesCurrent.week = ""
            this.searchValuesCurrent.status = ""

            this.searchValues = []

            this.filters.schoolId = null;
            this.filters.classIndex = null;
            if (this.userData.role !== "teacher"){
                this.filters.teacherId = null;
            } 
            this.filters.calendarId = null;
            this.filters.subjectId = null;
            this.filters.week = null;
            this.filters.status = null;
            this.filters.dateFrom = null;
            this.filters.dateTo = null;

            this.fetchLessonnotes();
          },

          async loadOtherValues(value){

                this.searchValues = [];

                this.filters.classIndex = null; 
                if (this.userData.role !== "teacher"){
                  this.filters.teacherId = null;
                }
                this.filters.calendarId = null;
                this.filters.subjectId = null;
                this.filters.week = null;
                this.filters.status = null;

                var values = this.schoolOptions.map(function(o) { return o.value })
                var index = values.indexOf(value) 
                let choiceText = this.schoolOptions[index].text          

                const seff = this;
                let foundOlder = this.searchValues.find(function(o) { return String(o).trim() === String(seff.searchValuesCurrent.school).trim() });
                if (foundOlder){
                  const index = this.searchValues.findIndex(obj => obj === seff.searchValuesCurrent.school );
                  this.searchValues.splice(index, 1);
                }
                
                let found = this.searchValues.find(function(o) { return o === value });
                if (!found){        
                  this.searchValuesCurrent.school = choiceText;   
                  this.searchValues.push(choiceText);
                }   

              // const Lessonnote_APP_STORE_MODULE_NAME = 'app-lessonnote';
                const sef = this;     
                sef.teacherOptions = [];     
                store.dispatch(`${this.Lessonnote_APP_STORE_MODULE_NAME}/fetchTeachers`, { id : value })
                .then(response => { 
                  let myval = response.data.data;
                  myval.forEach(obj => {
                    sef.teacherOptions.push( { value: obj.teaId , text: obj.fname + ' ' + obj.lname} )
                  });            
                });

                sef.subjectOptions = [];     
                store.dispatch(`${this.Lessonnote_APP_STORE_MODULE_NAME}/fetchSubjects`, { teacher: this.userData.role === 'teacher' ? this.teacherData.teaId : null } )
                .then(response => { 
                  let myval = response.data.data;
                  myval.forEach(obj => {
                    sef.subjectOptions.push( { value: obj.subId , text: obj.name } )
                  });            
                });

                  sef.classOptions = [];     
                  sef.classOptions.push( { value: 7 , text: "JSS1" } )            
                  sef.classOptions.push( { value: 8 , text: "JSS2" } )
                  sef.classOptions.push( { value: 9 , text: "JSS3" } )
                  sef.classOptions.push( { value: 10 , text: "SS1" } )  
                  sef.classOptions.push( { value: 11 , text: "SS2" } )
                  sef.classOptions.push( { value: 12 , text: "SS3" } )


                  sef.weekOptions = [];     
                  sef.weekOptions.push( { value: 1 , text: "Week 1" } )  
                  sef.weekOptions.push( { value: 2 , text: "Week 2" } ) 
                  sef.weekOptions.push( { value: 3, text: "Week 3" } ) 
                  sef.weekOptions.push( { value: 4, text: "Week 4" } ) 
                  sef.weekOptions.push( { value: 5, text: "Week 5" } ) 
                  sef.weekOptions.push( { value: 6, text: "Week 6" } )
                  sef.weekOptions.push( { value: 7, text: "Week 7" } ) 
                  sef.weekOptions.push( { value: 8, text: "Week 8" } )
                  sef.weekOptions.push( { value: 9, text: "Week 9" } )
                  sef.weekOptions.push( { value: 10, text: "Week 10" } )
                  sef.weekOptions.push( { value: 11, text: "Week 11" } )
                  sef.weekOptions.push( { value: 12, text: "Week 12" } )

                  sef.statusOptions = [];     
                  sef.statusOptions.push( { value: "queued" , text: "Queued" } )  
                  sef.statusOptions.push( { value: "submitted" , text: "Submitted" } )
                  sef.statusOptions.push( { value: "re-submitted" , text: "Re-Submitted" } )
                  sef.statusOptions.push( { value: "revert" , text: "Revert" } ) 
                  sef.statusOptions.push( { value: "approved" , text: "Approved" } ) 

                /*store.dispatch(`${this.Lessonnote_APP_STORE_MODULE_NAME}/fetchClassrooms`, { id : value, teacher: this.userData.role === 'teacher' ? this.teacherData.teaId : null })
                .then(response => { 
                  let myval = response.data.data;
                  myval.forEach(obj => {
                    sef.classOptions.push( { value: obj.clsId , text: obj.title + ' ' + obj.ext} )
                  });         
                });*/

                sef.calendarOptions = [];     
                store.dispatch(`${this.Lessonnote_APP_STORE_MODULE_NAME}/fetchCalendars`, { id : value })
                .then(response => { 
                  let myval = response.data.data;
                  myval.forEach(obj => {
                    // sef.calendarOptions.push( { value: obj.CalendarId , text: obj.session + ' ' + obj.term + ' Term'} )
                    let isActive = obj.status === 1 ? "ACTIVE" : "INACTIVE";
                    sef.calendarOptions.push( { value: obj.CalendarId , text: obj.session + "---" + "Term " + obj.term + "---" + isActive } )
                  });             
                });
          },

          teacherGrab(value){
              var values = this.teacherOptions.map(function(o) { return o.value })
              var index = values.indexOf(value) 
              let choiceText = this.teacherOptions[index].text          

              const sef = this;
              let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.teacher).trim().replace("\n","") });
              if (foundOlder){
                const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.teacher).trim().replace("\n","") );
                this.searchValues.splice(index, 1)
              }
              
              let found = this.searchValues.find(function(o) { return o === value });
              if (!found){        
                this.searchValuesCurrent.teacher = choiceText;   
                this.searchValues.push(choiceText);
              }         

            // console.log( "Teacher Grabbed : " + JSON.stringify(this.searchValues) )
          },

          classGrab(value){
            var values = this.classOptions.map(function(o) { return o.value })
            var index = values.indexOf(value) 
            let choiceText = this.classOptions[index].text

            const sef = this;
            let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.class).trim().replace("\n","") });
            if (foundOlder){
              const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.class).trim().replace("\n","") );
              this.searchValues.splice(index, 1)
            }

            let found = this.searchValues.find(function(o) { return o === value });
            if (!found){
              this.searchValuesCurrent.class = choiceText;
              this.searchValues.push(choiceText);
            }
          
          },

          calendarGrab(value){
            var values = this.calendarOptions.map(function(o) { return o.value })
            var index = values.indexOf(value) 
            let choiceText = this.calendarOptions[index].text

            const sef = this;
            let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.calendar).trim().replace("\n","") });
            if (foundOlder){
              const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.calendar).trim().replace("\n","") );
              this.searchValues.value.splice(index, 1)
            }
            
            let found = this.searchValues.find(function(o) { return o === value });
            if (!found){
              this.searchValuesCurrent.calendar = choiceText;
              this.searchValues.push(choiceText);
            }       
          },

          subjectGrab(value){
            var values = this.subjectOptions.map(function(o) { return o.value })
            var index = values.indexOf(value) 
            let choiceText = this.subjectOptions[index].text

            const sef = this;
            let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.subject).trim().replace("\n","") });
            if (foundOlder){
              const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.subject).trim().replace("\n","") );
              this.searchValues.splice(index, 1)
            }
            
            let found = this.searchValues.find(function(o) { return o === value });
            if (!found){
              this.searchValuesCurrent.subject = choiceText;
              this.searchValues.push(choiceText);
            }       
          },

          weekGrab(value){
            var values = this.weekOptions.map(function(o) { return o.value })
            var index = values.indexOf(value) 
            let choiceText = this.weekOptions[index].text

            const sef = this;
            let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.week).trim().replace("\n","") });
            if (foundOlder){
              const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.week).trim().replace("\n","") );
              this.searchValues.splice(index, 1)
            }
            
            let found = this.searchValues.find(function(o) { return o === value });
            if (!found){
              this.searchValuesCurrent.week = choiceText;
              this.searchValues.push(choiceText);
            }       
          },

          statusGrab(value){
            var values = this.statusOptions.map(function(o) { return o.value })
            var index = values.indexOf(value) 
            let choiceText = this.statusOptions[index].text

            const sef = this;
            let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.status).trim().replace("\n","") });
            if (foundOlder){
              const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.status).trim().replace("\n","") );
              this.searchValues.splice(index, 1)
            }
            
            let found = this.searchValues.find(function(o) { return o === value });
            if (!found){
              this.searchValuesCurrent.status = choiceText;
              this.searchValues.push(choiceText);
            }       
          },

          principalActionApprove(id){       
            const Lessonnote_APP_STORE_MODULE_NAME = 'app-lessonnote';

                let classwork = this.filters.hasClasswork ? 1 : 0;
                let homework = this.filters.hasHomework ? 1 : 0;
                let test = this.filters.hasTest ? 1 : 0;
                let midterm = this.filters.hasMidTerm ? 1 : 0;
                let finalexam = this.filters.hasFinalExam ? 1 : 0;

                const sef = this;          
                store.dispatch( `${Lessonnote_APP_STORE_MODULE_NAME}/approveLessonnote`, { lsnid: Number(id), lessonnote: { action: "approval", lessonnoteId: id, classwork, homework, test, midterm, finalexam },  management: { action : "approved", quality: 100 }, activity: { action: "approved", owner: this.teacherPicked, principal_query_arrangement: 1, principal_query_grammar: 1, principal_query_subjectmatter: 1, principal_query_incomplete: 1  } } )
                .then(response => { 
                    sef.modalTitle = "";
                    sef.grammar = 0;
                    sef.arrangement = 0;
                    sef.teacherPicked = null;
                    sef.LessonnotePicked = null;
                    sef.$toast({
                      component: ToastificationContent,
                      props: {
                      title: 'Lessonnote has been approved.',
                      icon: 'AlertTriangleIcon',
                      variant: 'success',
                      },
                    });  

                    sef.hideModal()
                    sef.handleChange()

                }).catch((exception) => { 
                    sef.modalTitle = "";
                    sef.grammar = 0;
                    sef.arrangement = 0;
                    sef.teacherPicked = null;
                    sef.LessonnotePicked = null;
                    sef.$toast({ 
                      component: ToastificationContent,
                      props: {
                        title: 'There is an issue with the approval process',
                        icon: 'AlertTriangleIcon',
                        variant: 'danger'
                      }
                    }); 
                    sef.hideModal()

                }); 
            
          },

          principalActionDisapprove(id){
            const Lessonnote_APP_STORE_MODULE_NAME = 'app-lessonnote';
            let set_grammar = this.grammar ? 0 : 1;
            let set_arrangement = this.arrangement ? 0 : 1;
            let set_subjectmatter = this.subjectmatter ? 0 : 1;
            let set_incomplete = this.incomplete ? 0 : 1;
            let set_quality = ( set_grammar + set_arrangement + set_subjectmatter + set_incomplete ) === 3 ? 75 : ( set_grammar + set_arrangement + set_subjectmatter + set_incomplete ) === 2 ? 50 : ( set_grammar + set_arrangement + set_subjectmatter + set_incomplete ) === 1 ? 25 : 0;

                const sef = this;          
                store.dispatch( `${Lessonnote_APP_STORE_MODULE_NAME}/approveLessonnote`, { lsnid: Number(id), lessonnote: { action: "revert", lessonnoteId: id  },  management: { action : "revert", quality: set_quality }, activity: { action: "revert", owner: this.teacherPicked, principal_query_arrangement: set_arrangement , principal_query_grammar: set_grammar, principal_query_subjectmatter: set_subjectmatter, principal_query_incomplete: set_incomplete } } )
                .then(response => { 
                    sef.modalTitle2 = "";
                    sef.grammar = false;
                    sef.arrangement = false;
                    sef.subjectmatter = false;
                    sef.teacherPicked = null;
                    sef.LessonnotePicked = null;
                    sef.$toast({
                      component: ToastificationContent,
                      props: {
                      title: 'Lessonnote has been reverted.',
                      icon: 'AlertTriangleIcon',
                      variant: 'warning',
                      },
                    }); 

                    sef.hideModal2() ;
                    sef.handleChange()

                }).catch((exception) => { 
                    sef.modalTitle2 = "";
                    sef.grammar = false;
                    sef.arrangement = false;
                    sef.subjectmatter = false;
                    sef.teacherPicked = null;
                    sef.LessonnotePicked = null;
                    sef.$toast({
                      component: ToastificationContent,
                      props: {
                        title: 'There is an issue with the reverting process',
                        icon: 'AlertTriangleIcon',
                        variant: 'danger'
                      }
                    }); 
                    
                    sef.hideModal2()
                });
          },

          principalActionClosure(id){
            const Lessonnote_APP_STORE_MODULE_NAME = 'app-lessonnote';

                const sef = this;          
                store.dispatch( `${Lessonnote_APP_STORE_MODULE_NAME}/approveLessonnote`, { lsnid: Number(id), lessonnote: { action: "closed", lessonnoteId: id  },  management: { action : "closed" } } )
                .then(response => { 
                    sef.modalTitle4 = "";
                  
                    sef.teacherPicked = null;
                    sef.LessonnotePicked = null;
                    sef.$toast({
                      component: ToastificationContent,
                      props: {
                      title: 'Lessonnote has been closed.',
                      icon: 'AlertTriangleIcon',
                      variant: 'warning',
                      },
                    }); 
    s
                    sef.hideModal4() 
                    sef.handleChange()

                }).catch((exception) => { 
                    sef.modalTitle4 = "";
                  
                    sef.teacherPicked = null;
                    sef.LessonnotePicked = null;
                    sef.$toast({
                      component: ToastificationContent,
                      props: {
                        title: 'There is an issue with the closing process',
                        icon: 'AlertTriangleIcon',
                        variant: 'danger'
                      }
                    }); 
                    
                    sef.hideModal4()
                });
          },

          teacherActionClosure(id){
            const Lessonnote_APP_STORE_MODULE_NAME = 'app-lessonnote';

                const sef = this;          
                store.dispatch( `${Lessonnote_APP_STORE_MODULE_NAME}/updateLessonnote`, { id: Number(id), lessonnote: { action: "closure", lessonnoteId: id  }, activity: { action : "closure" }, management: { action : "closure" }  } )
                .then(response => { 
                    sef.modalTitle3 = "";
                  
                    sef.teacherPicked = null;
                    sef.LessonnotePicked = null;
                    sef.$toast({
                      component: ToastificationContent,
                      props: {
                      title: 'Lessonnote has been closed.',
                      icon: 'AlertTriangleIcon',
                      variant: 'warning',
                      },
                    }); 

                    sef.hideModal3()
                    sef.handleChange() 

                }).catch((exception) => { 
                    sef.modalTitle3 = "";
                  
                    sef.teacherPicked = null;
                    sef.LessonnotePicked = null;
                    sef.$toast({
                      component: ToastificationContent,
                      props: {
                        title: 'There is an issue with the closing process',
                        icon: 'AlertTriangleIcon',
                        variant: 'danger'
                      }
                    }); 
                    
                    sef.hideModal3()
                });
          },

          checkIfClosureIsProper(){
            //just create endpoint to check if all scores have been added, then use the result in deciding if to close lessonnote
          },

          forceFileDownload(response, title) {
            console.log(title)
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', title + ".docx" )
            document.body.appendChild(link)
            link.click()
          },

          openfile(path, title){        
                  const sef = this;
                  axios({
                    method: 'get',
                    url: new String(this.baseURL).replace('/api','') + path,
                    responseType: 'blob',
                    headers: jwtHeader()
                  })
                    .then(function (response) {
                        sef.forceFileDownload(response, title)
                  }).catch(error => {
                    console.log(error.response)
                  });
          },

          showModal() {
            this.$refs['my-modal-approve-lessonnote'].show()
          },
          hideModal() {
            this.$refs['my-modal-approve-lessonnote'].hide()
          },

          showModal2() {
            this.$refs['my-modal-disapprove-lessonnote'].show()
          },
          hideModal2() {
            this.$refs['my-modal-disapprove-lessonnote'].hide()
          },

          showModal3() {
            this.$refs['my-modal-closure-t-lessonnote'].show()
          },
          hideModal3() {
            this.$refs['my-modal-closure-t-lessonnote'].hide()
          },

          showModal4() {
            this.$refs['my-modal-closure-p-lessonnote'].show()
          },
          hideModal4() {
            this.$refs['my-modal-closure-p-lessonnote'].hide()
          },

          triggerApprove(name, lsn, teacher){
            this.modalTitle = "Approve this Lessonnote: "+ name;
            this.teacherPicked = teacher;
            this.LessonnotePicked = lsn;
            this.showModal();
          },

          triggerDisapprove(name, lsn, teacher){
            this.modalTitle2 = "Query this Lessonnote: "+ name;
            this.teacherPicked = teacher;
            this.LessonnotePicked = lsn;
            this.showModal2();     
          },

          triggerClosure(user,name, lsn, teacher){
            if (user === "teacher"){
                this.modalTitle = "Close this Lessonnote: "+ name;
                this.teacherPicked = teacher;
                this.LessonnotePicked = lsn;
                this.showModal3();
            }
            else if (user === "principal"){
                this.modalTitle = "Close this Lessonnote: "+ name;
                this.teacherPicked = teacher;
                this.LessonnotePicked = lsn;
                this.showModal4();
            }
          },

          loadManagement(item){
                const sef = this;    
                const Lessonnote_APP_STORE_MODULE_NAME = 'app-lessonnote';      
                store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchLessonnoteManagement`, { id : item.lessonnoteId })
                .then(response => { 
                  let myval = response.data.data;

                  sef.quality = myval[0].quality;
                  sef.sub_perf_classwork = myval[0].sub_perf_classwork;
                  sef.sub_perf_homework = myval[0].sub_perf_homework;
                  sef.sub_perf_test = myval[0].sub_perf_test;
                  sef.score = myval[0].score;
                });
          }

        }


      }
      </script>
      
      <style lang="scss" scoped>
      .per-page-selector {
        width: 90px;
      }


      
      </style>
      
      <style lang="scss">
      @import '~@core/scss/vue/libs/vue-select.scss';
      </style>
      