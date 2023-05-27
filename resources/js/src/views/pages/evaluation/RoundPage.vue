<template>    
     <div>            
        <b-card>
              <b-card-header header-tag="header">
                
                  <h3> Evaluation Name:   &nbsp;&nbsp;  <i> <b> {{ oneroundItem.coreprocess[0].createdAt + "-" + oneroundItem.coreprocess[0].school.name }} </b> </i> </h3>            
              </b-card-header>
              
              <b-card-body>

                  <!-- Core Process -->
                  <b-card>
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button :variant=" completionComputed.coreprocess < 50 ? 'secondary' : (completionComputed.coreprocess > 49 && completionComputed.coreprocess < 99 ) ? 'warning' : 'success' " v-b-toggle.collapse1  block >
                        Core Processes --> ( {{ completionComputed.coreprocess }} ) %
                      </b-button>
                    </b-card-header>

                    <b-collapse id="collapse1" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-table :items="oneroundItem.coreprocess" :fields="tableColumns" :busy="isLoading" class="position-relative my-table" responsive>

                            <template #table-busy>
                                <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Loading...</strong>
                                </div>
                            </template>

                            <!-- Column: Option 1 -->
                            <template #cell(evaluation.optionOne)="data">

                                <b-form-radio-group
                                  v-model="data.item.value"
                                  @change=" checkChange( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionOne)"
                                ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 2-->
                            <template #cell(evaluation.optionTwo)="data">
                              
                              <b-form-radio-group
                                  v-model="data.item.value"
                                    @change=" checkChange( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionTwo)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 3-->
                            <template #cell(evaluation.optionThree)="data">
                              
                             <b-form-radio-group
                                  v-model="data.item.value"
                                   @change=" checkChange( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionThree)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 4-->
                           <template #cell(evaluation.optionFour)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFour !== null && data.item.evaluation.optionFour !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFour)"
                              ></b-form-radio-group>
                                            
                            </template>                                          
                         

                           
                            <template #cell(evaluation.optionFive)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFive !== null && data.item.evaluation.optionFive !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFive)"
                              ></b-form-radio-group>
                                            
                            </template> 

                        </b-table>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <!-- Instructor Resource -->
                  <b-card>
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button v-b-toggle.collapse2 block :variant=" completionComputed.insresource < 50 ? 'secondary' : (completionComputed.insresource > 49 && completionComputed.insresource < 99 ) ? 'warning' : 'success' ">
                        Instructor Resource --> ( {{ completionComputed.insresource }} ) %
                      </b-button>
                    </b-card-header>
                    <b-collapse id="collapse2" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-table :items="oneroundItem.ins_resource" :fields="tableColumns" :busy="isLoading" class="position-relative my-table" responsive>
                           <template #table-busy>
                                <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Loading...</strong>
                                </div>
                            </template>

                            <!-- Column: Option 1 -->
                            <template #cell(evaluation.optionOne)="data">

                                <b-form-radio-group
                                  v-model="data.item.value"
                                  @change=" checkChange2( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionOne)"
                                ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 2-->
                            <template #cell(evaluation.optionTwo)="data">
                              
                              <b-form-radio-group
                                  v-model="data.item.value"
                                    @change=" checkChange2( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionTwo)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 3-->
                            <template #cell(evaluation.optionThree)="data">
                              
                             <b-form-radio-group
                                  v-if= " data.item.evaluation.optionThree !== null && data.item.evaluation.optionThree !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange2( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionThree)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 4-->
                           <template #cell(evaluation.optionFour)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFour !== null && data.item.evaluation.optionFour !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange2( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFour)"
                              ></b-form-radio-group>
                                            
                            </template>                                       
                         
                            <template #cell(evaluation.optionFive)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFive !== null && data.item.evaluation.optionFive !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange2( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFive)"
                              ></b-form-radio-group>
                                            
                            </template>   
                        </b-table> 
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <!--Learning Environment-->
                  <b-card>
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button v-b-toggle.collapse3 block :variant=" completionComputed.learningenv < 50 ? 'secondary' : (completionComputed.learningenv > 49 && completionComputed.learningenv < 99 ) ? 'warning' : 'success' ">
                        Learning Environment --> ( {{ completionComputed.learningenv }} ) %
                      </b-button>
                    </b-card-header>
                    <b-collapse id="collapse3" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-table :items="oneroundItem.learning_env" :fields="tableColumns" :busy="isLoading" class="position-relative my-table" responsive>
                           <template #table-busy>
                                <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Loading...</strong>
                                </div>
                            </template>

                            <!-- Column: Option 1 -->
                            <template #cell(evaluation.optionOne)="data">

                                <b-form-radio-group
                                  v-model="data.item.value"
                                  @change=" checkChange3( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionOne)"
                                ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 2-->
                            <template #cell(evaluation.optionTwo)="data">
                              
                              <b-form-radio-group
                                  v-model="data.item.value"
                                    @change=" checkChange3( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionTwo)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 3-->
                            <template #cell(evaluation.optionThree)="data">
                              
                             <b-form-radio-group
                                  v-if= " data.item.evaluation.optionThree !== null && data.item.evaluation.optionThree !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange3( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionThree)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 4-->
                           <template #cell(evaluation.optionFour)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFour !== null && data.item.evaluation.optionFour !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange3( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFour)"
                              ></b-form-radio-group>
                                            
                            </template>                                       
                         
                            <template #cell(evaluation.optionFive)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFive !== null && data.item.evaluation.optionFive !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange3( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFive)"
                              ></b-form-radio-group>
                                            
                            </template>   
                        </b-table> 
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <!--Total Student Development -->
                  <b-card>
                    
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button v-b-toggle.collapse4 block :variant=" completionComputed.totalstudent < 50 ? 'secondary' : (completionComputed.totalstudent > 49 && completionComputed.totalstudent < 99 ) ? 'warning' : 'success' ">
                        Total Student Development --> ( {{ completionComputed.totalstudent }} ) %
                      </b-button>
                    </b-card-header>

                    <b-collapse id="collapse4" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-table :items="oneroundItem.total_student" :fields="tableColumns" :busy="isLoading" class="position-relative my-table" responsive>
                           <template #table-busy>
                                <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Loading...</strong>
                                </div>
                            </template>

                            <!-- Column: Option 1 -->
                            <template #cell(evaluation.optionOne)="data">

                                <b-form-radio-group
                                  v-model="data.item.value"
                                  @change=" checkChange4( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionOne)"
                                ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 2-->
                            <template #cell(evaluation.optionTwo)="data">
                              
                              <b-form-radio-group
                                  v-model="data.item.value"
                                    @change=" checkChange4( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionTwo)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 3-->
                            <template #cell(evaluation.optionThree)="data">
                              
                             <b-form-radio-group
                                  v-if= " data.item.evaluation.optionThree !== null && data.item.evaluation.optionThree !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange4( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionThree)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 4-->
                           <template #cell(evaluation.optionFour)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFour !== null && data.item.evaluation.optionFour !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange4( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFour)"
                              ></b-form-radio-group>
                                            
                            </template>                                       
                         
                            <template #cell(evaluation.optionFive)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFive !== null && data.item.evaluation.optionFive !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange4( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFive)"
                              ></b-form-radio-group>
                                            
                            </template>   
                        </b-table> 
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                   <!-- Sustainability -->
                  <b-card>
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button v-b-toggle.collapse5 block :variant=" completionComputed.sustainability < 50 ? 'secondary' : (completionComputed.sustainability > 49 && completionComputed.sustainability < 99 ) ? 'warning' : 'success' ">
                        Sustainability --> ( {{ completionComputed.sustainability }} ) %
                      </b-button>
                    </b-card-header>
                    <b-collapse id="collapse5" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-table :items="oneroundItem.sustainability" :fields="tableColumns" :busy="isLoading" class="position-relative my-table" responsive>
                           <template #table-busy>
                                <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Loading...</strong>
                                </div>
                            </template>

                            <!-- Column: Option 1 -->
                            <template #cell(evaluation.optionOne)="data">

                                <b-form-radio-group
                                  v-model="data.item.value"
                                  @change=" checkChange5( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionOne)"
                                ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 2-->
                            <template #cell(evaluation.optionTwo)="data">
                              
                              <b-form-radio-group
                                  v-model="data.item.value"
                                    @change=" checkChange5( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionTwo)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 3-->
                            <template #cell(evaluation.optionThree)="data">
                              
                             <b-form-radio-group
                                  v-if= " data.item.evaluation.optionThree !== null && data.item.evaluation.optionThree !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange5( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionThree)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 4-->
                           <template #cell(evaluation.optionFour)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFour !== null && data.item.evaluation.optionFour !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange5( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFour)"
                              ></b-form-radio-group>
                                            
                            </template>                                       
                         
                            <template #cell(evaluation.optionFive)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFive !== null && data.item.evaluation.optionFive !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange5( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFive)"
                              ></b-form-radio-group>
                                            
                            </template>   
                        </b-table> 
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <!-- Academic Performance -->
                  <b-card>
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button v-b-toggle.collapse6 block :variant=" completionComputed.academic < 50 ? 'secondary' : (completionComputed.academic > 49 && completionComputed.academic < 99 ) ? 'warning' : 'success' ">
                        Academic Performance --> ( {{ completionComputed.academic }} ) %
                      </b-button>
                    </b-card-header>
                    <b-collapse id="collapse6" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-table :items="oneroundItem.academic" :fields="tableColumns" :busy="isLoading" class="position-relative my-table" responsive>
                           <template #table-busy>
                                <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Loading...</strong>
                                </div>
                            </template>

                            <!-- Column: Option 1 -->
                            <template #cell(evaluation.optionOne)="data">

                                <b-form-radio-group
                                  v-model="data.item.value"
                                  @change=" checkChange6( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionOne)"
                                ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 2-->
                            <template #cell(evaluation.optionTwo)="data">
                              
                              <b-form-radio-group
                                  v-model="data.item.value"
                                    @change=" checkChange6( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionTwo)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 3-->
                            <template #cell(evaluation.optionThree)="data">
                              
                             <b-form-radio-group
                                  v-if= " data.item.evaluation.optionThree !== null && data.item.evaluation.optionThree !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange6( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionThree)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 4-->
                           <template #cell(evaluation.optionFour)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFour !== null && data.item.evaluation.optionFour !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange6( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFour)"
                              ></b-form-radio-group>
                                            
                            </template>                                       
                         
                            <template #cell(evaluation.optionFive)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFive !== null && data.item.evaluation.optionFive !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange6( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFive)"
                              ></b-form-radio-group>
                                            
                            </template>   
                        </b-table> 
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <!-- SSHE -->
                  <b-card>
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button v-b-toggle.collapse7 block :variant=" completionComputed.sshe < 50 ? 'secondary' : (completionComputed.sshe > 49 && completionComputed.sshe < 99 ) ? 'warning' : 'success' ">
                        Safety, Health, Environment, Security --> ( {{ completionComputed.sshe }} ) %
                      </b-button>
                    </b-card-header>
                    <b-collapse id="collapse7" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-table :items="oneroundItem.sshe" :fields="tableColumns" :busy="isLoading" class="position-relative my-table" responsive>
                           <template #table-busy>
                                <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Loading...</strong>
                                </div>
                            </template>

                            <!-- Column: Option 1 -->
                            <template #cell(evaluation.optionOne)="data">

                                <b-form-radio-group
                                  v-model="data.item.value"
                                  @change=" checkChange7( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionOne)"
                                ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 2-->
                            <template #cell(evaluation.optionTwo)="data">
                              
                              <b-form-radio-group
                                  v-model="data.item.value"
                                    @change=" checkChange7( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionTwo)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 3-->
                            <template #cell(evaluation.optionThree)="data">
                              
                             <b-form-radio-group
                                  v-if= " data.item.evaluation.optionThree !== null && data.item.evaluation.optionThree !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange7( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionThree)"
                              ></b-form-radio-group>
                                            
                            </template>

                            <!-- Column: Option 4-->
                           <template #cell(evaluation.optionFour)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFour !== null && data.item.evaluation.optionFour !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange7( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFour)"
                              ></b-form-radio-group>
                                            
                            </template>                                       
                         
                            <template #cell(evaluation.optionFive)="data">
                              
                               <b-form-radio-group
                                  v-if= " data.item.evaluation.optionFive !== null && data.item.evaluation.optionFive !== ''  "
                                  v-model="data.item.value"
                                   @change=" checkChange7( data.item.value, data.item.jobvalueId ) "
                                  :disabled=" (data.item.performance !== null) && (!filled[data.item.jobvalueId]) "
                                  :options="getOptionValue(data.item.evaluation.optionFive)"
                              ></b-form-radio-group>
                                            
                            </template>   
                        </b-table> 
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-row>    
                      <b-col
                        cols="12"
                        md="4"
                        class="d-flex align-items-center"
                      >
                          <b-button block variant="info" v-if="completionComputed.total < 100" @click="submitEvaluation">
                              Save Form and Continue Later ({{ Number.isNaN(completionComputed.total) ? "Incomplete" : completionComputed.total }}) %
                          </b-button>

                          <div class="text-center text-danger my-1 mx-1" v-if=" isLoading === true " >
                              <b-spinner class="align-middle"></b-spinner>
                              <strong>Loading...</strong>
                          </div>

                          <b-button block variant="success" v-if="completionComputed.total >= 100" @click="submitEvaluation(true)" >
                               Form is Complete, Click to Finalize Submission
                          </b-button>

                      </b-col>

                      <b-col
                        cols="12"
                        md="4"
                        class="d-flex align-items-center"
                      >
                          <b-button block variant="warning" @click="refresh">
                              Cancel Form and Start Again
                          </b-button>
                      </b-col>
                  </b-row>      

              </b-card-body>

        </b-card>
     </div>     
</template>
  
<script>
  import {
    BCardHeader, 
    BCardBody,
    BCard,
    BCardTitle,
    BRow,
    BCol,
    BCollapse,
    BFormInput,
    BFormGroup,
    BButton,
    BSpinner,
    BTable,
    BSidebar,
    BForm,
    BFormText,
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
    BFormCheckbox,
    BFormRadioGroup,
    VBToggle
  } from 'bootstrap-vue';
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
  import vSelect from 'vue-select'
  import router from '@/router'
  import axios from "axios";
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
  import { avatarText } from '@core/utils/filter'
  import formValidation from '@core/comp-functions/forms/form-validation'
  import { $themeConfig } from "@themeConfig";
  
  // Notification
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  import jwtHeader from "@core/services/jwt-header";
  import useEvaluation from './useEvaluation'
  import evaluationStoreModule from './evaluationStoreModule'


  export default {
    directives: {
      'b-toggle': VBToggle
    },
    components: {    
      StatisticCardHorizontal,
      BCardHeader, 
      BCardBody,
      BCard,
      BCardTitle,
      BRow,
      BCol,
      BCollapse,
      BFormInput,
      BFormGroup,
      BButton,
      BSpinner,
      BTable,
      BSidebar,
      BForm,
      BFormText,
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
      BFormCheckbox,
      BFormRadioGroup,
      vSelect
    },

    data() {     
       
        return {          
          text: "Testing",
          filled: {},
          completion: 50
        }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Evaluation_APP_STORE_MODULE_NAME = 'app-Evaluation';
      const { baseURL } = $themeConfig.app; 
      const evaluation =  router.currentRoute.params.evaluation ? router.currentRoute.params.evaluation : null;

      // Register module
      if (!store.hasModule(Evaluation_APP_STORE_MODULE_NAME)) store.registerModule(Evaluation_APP_STORE_MODULE_NAME, evaluationStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Evaluation_APP_STORE_MODULE_NAME)) store.unregisterModule(Evaluation_APP_STORE_MODULE_NAME)
      })  
      
      const userData = ref({});    

      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }

      const findIfEvaisPresent = ( userData.value.role === "evaluator" );
      
      const {
       
        fetchOneRoundInEvaluation,
        
        isLoading,     
        
        filters,

        oneroundItem,

        tableColumns,

        completionComputed

      } = useEvaluation();

      onMounted(() => {
          setTimeout(() => {
           fetchOneRoundInEvaluation(evaluation);   
          }, 1600)       
      })
      
      return {
        
        isLoading,
  
        fetchOneRoundInEvaluation,
        
        filters,
       
        oneroundItem,

        tableColumns,

        completionComputed,

        userData,

        Evaluation_APP_STORE_MODULE_NAME,

        baseURL,

        evaluationId: evaluation

      }
    },

    methods: {  

      getOptionValue(optionString) {
        if (optionString){
          const optionValueArray = optionString.split('=');
          const optionText = optionValueArray[0].trim().toUpperCase();
          const optionValue = optionValueArray[1].trim();
          return [{ text: optionText, value: optionValue }];
        }
        return []
      },

      findIndexByProperty(array, property, value) {
        for (let i = 0; i < array.length; i++) {
          if (array[i][property] === value) {
            return i;
          }
        }
        return -1;
      },

      checkChange(val, jobId){
        
        let indexOf = this.findIndexByProperty( this.oneroundItem.coreprocess, "jobvalueId", jobId );
        this.oneroundItem.coreprocess[indexOf].value = val;
        this.oneroundItem.coreprocess[indexOf].performance = this.oneroundItem.coreprocess[indexOf].value * 20;
        this.filled[jobId] = val;

      },

      checkChange2(val, jobId){
        
        let indexOf = this.findIndexByProperty( this.oneroundItem.ins_resource, "jobvalueId", jobId );
        this.oneroundItem.ins_resource[indexOf].value = val;
        this.oneroundItem.ins_resource[indexOf].performance = this.oneroundItem.ins_resource[indexOf].value * 20;
        this.filled[jobId] = val;

      },

      checkChange3(val, jobId){
        
        let indexOf = this.findIndexByProperty( this.oneroundItem.learning_env, "jobvalueId", jobId );
        this.oneroundItem.learning_env[indexOf].value = val;
        this.oneroundItem.learning_env[indexOf].performance = this.oneroundItem.learning_env[indexOf].value * 20;
        this.filled[jobId] = val;

      },

      checkChange4(val, jobId){
        
        let indexOf = this.findIndexByProperty( this.oneroundItem.total_student, "jobvalueId", jobId );
        this.oneroundItem.total_student[indexOf].value = val;
        this.oneroundItem.total_student[indexOf].performance = this.oneroundItem.total_student[indexOf].value * 20;
        this.filled[jobId] = val;

      },

      checkChange5(val, jobId){
        
        let indexOf = this.findIndexByProperty( this.oneroundItem.sustainability, "jobvalueId", jobId );
        this.oneroundItem.sustainability[indexOf].value = val;
        this.oneroundItem.sustainability[indexOf].performance = this.oneroundItem.sustainability[indexOf].value * 20;
        this.filled[jobId] = val;

      },

      checkChange6(val, jobId){
        
        let indexOf = this.findIndexByProperty( this.oneroundItem.academic, "jobvalueId", jobId );
        this.oneroundItem.academic[indexOf].value = val;
        this.oneroundItem.academic[indexOf].performance = this.oneroundItem.academic[indexOf].value * 20;
        this.filled[jobId] = val;

      },

       checkChange7(val, jobId){
        
        let indexOf = this.findIndexByProperty( this.oneroundItem.sshe, "jobvalueId", jobId );
        this.oneroundItem.sshe[indexOf].value = val;
        this.oneroundItem.sshe[indexOf].performance = this.oneroundItem.sshe[indexOf].value * 20;
        this.filled[jobId] = val;

      },

      refresh(){
           setTimeout(() => {
                                window.location.reload();
                            },900);
      },

      submitEvaluation(isComplete){
        const sef = this;
        sef.isLoading = true;
          let bigEvaluation = [ ...this.oneroundItem.coreprocess,...this.oneroundItem.ins_resource, ...this.oneroundItem.learning_env, ...this.oneroundItem.total_student, ...this.oneroundItem.sustainability, ...this.oneroundItem.academic, ...this.oneroundItem.sshe  ]
          let newRowData = bigEvaluation.map((row) => { 
              return {
                jobvalueId: row.jobvalueId,
                value: row.value,
                performance: row.performance,
                complete: isComplete === true ? 1 : null             
              };  
          });

          store.dispatch(`${ this.Evaluation_APP_STORE_MODULE_NAME }/updateRound`, newRowData )
            .then(response => {           
              sef.isLoading = false;
              if (sef.completionComputed.total < 100) {
                      sef.$toast({
                            component: ToastificationContent,
                            position: "top-right",
                            props: {
                              title: 'Thanks, your Evaluation data has been saved successfully!',
                              icon: "CoffeeIcon",
                              variant: "warning",
                              text: `You have successfully updated a round within your evaluation. Please come back to complete it later `,
                            }
                          });                      

                      setTimeout(() => {
                                window.location.reload();
                            },1800);
              }
              else if (sef.completionComputed.total >= 100) {
                      sef.$toast({
                            component: ToastificationContent,
                            position: "top-right",
                            props: {
                              title: 'Thanks, your Evaluation data has been completed successfully!',
                              icon: "CoffeeIcon",
                              variant: "success",
                              text: `You have successfully completed a round within your evaluation.`,
                            }
                          });                      

                      setTimeout(() => {
                                window.location.reload();
                            },1800);
              }                           
          });
      }



    }

  }

    /** evaluation_id: row.evaluation.jobId,
                school_id: row.school.schId,
                user_id: row.user.userId,

                round: row.round,
                roundId:  row.roundId */
  </script>
  
  <style lang="scss" scoped>
  .per-page-selector {
    width: 90px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
   }

    .my-table td {
      font-size: 10px !important;
    }
  </style>

  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  </style>
  

