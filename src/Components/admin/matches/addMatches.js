import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/Admin_layout';

import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

class AddMatches extends Component {

    state = {
        matchId:'',
        formType:'',
        formError: false,
        formSuccess:'',
        teams:[],
        formdata:{
            date:{
                element:'input',
                value:'',
                config:{
                    label: 'Event Date',
                    name:'date_input',
                    type:'date'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            local:{
                element:'select',
                value:'',
                config:{
                    label: 'Select a local team',
                    name:'select_local',
                    type:'select',
                    options:[]
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: false
            },
            away:{
                element:'select',
                value:'',
                config:{
                    label: 'Select an away team',
                    name:'select_away ',
                    type:'select',
                    options:[]
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: false
            },
            resultLocal:{
                element:'input',
                value:'',
                config:{
                    label: 'Event Date',
                    name:'date_input',
                    type:'date'
                }
            },
            resultAway :{
                element:'input',
                value:'',
                config:{
                    label: 'Result Local',
                    name:'result_local_input',
                    type:'text'
                }
            },
            referee:{
                element:'input',
                value:'',
                config:{
                    label: 'Refree',
                    name:'referee _input',
                    type:'text'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            stadium:{
                element:'input',
                value:'',
                config:{
                    label: 'Stadium',
                    name:'stadium  _input',
                    type:'text'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            result:{
                element:'select',
                value:'',
                config:{
                    label: 'Team Result',
                    name:'select_result',
                    type:'select',
                    options:[
                        {key:'W',value:'W'},
                        {key:'L',value:'L'},
                        {key:'D',value:'D'},
                        {key:'N/A',value:'N/A'}

                    ]
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: false
            },
            final:{
                element:'select',
                value:'',
                config:{
                    label: 'Game Played?',
                    name:'select_played',
                    type:'select',
                    options:[
                        {key:'Yes',value:'Yes'},
                        {key:'No',value:'No'}
                    ]
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: false
            }
            
    }
}

    render() {
        return (
            <AdminLayout>
                <div className="editmatch_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                        <form onSubmit={(event)=> this.submitForm(event)}>
                        <FormField
                            id={'date'}
                            formdata={this.state.formdata.date}
                            change={(element)=> this.updateForm(element)}
                         />
                         <div className="select_team_layout">
                            <div className="label_input">Local</div>
                            <div className="wrapper">
                                <div className="left">
                                    <FormField id={'Local'}
                                    formdata={this.state.formdata.local}
                                    change={(element)=> this.updateForm(element)}
                                    />
                                </div> 
                                <div>
                                    <FormField id={'resultLocal'}
                                    formdata={this.state.formdata.resultLocal}
                                    change={(element)=> this.updateForm(element)}
                                    />

                                </div>
                            </div>

                         </div>
                         <div className="select_team_layout">
                            <div className="label_input">Away</div>
                            <div className="wrapper">
                                <div className="left">
                                    <FormField id={'away'}
                                    formdata={this.state.formdata.away}
                                    change={(element)=> this.updateForm(element)}
                                    />
                                </div> 
                                <div>
                                    <FormField id={'resultAway'}
                                    formdata={this.state.formdata.resultAway}
                                    change={(element)=> this.updateForm(element)}
                                    />

                                </div>
                            </div>

                         </div>
                         <div className="split_fields">
                                <FormField id={'referee'}
                                formdata={this.state.formdata.referee}
                                change={(element)=> this.updateForm(element)}
                                />
                                <FormField id={'stadium'}
                                formdata={this.state.formdata.stadium }
                                change={(element)=> this.updateForm(element)}
                                />
                         </div>
                         <div className="split_fields">
                                <FormField id={'result'}
                                formdata={this.state.formdata.result}
                                change={(element)=> this.updateForm(element)}
                                />
                                <FormField id={'final'}
                                formdata={this.state.formdata.final }
                                change={(element)=> this.updateForm(element)}
                                />
                         </div>
                         <div className="success_label">{this.state.formSuccess}</div>
                         {
                             this.state.formError ?
                             <div className="error_label">
                                 Something is wrong
                             </div>
                             : 'null'
                         }
                         <div className="admin_submit">
                            <button onClick={(event)=> this.submitForm(event)}>
                                {this.state.formType}
                            </button>
                         </div>
                        </form>
                    </div>

                </div>
                
            </AdminLayout>
        );
    }
}

export default AddMatches;