export const label123 = 'test'  // รอลบ

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import {
//     createProjectProps,
//     Project, typeDisbursement,
//     typeProject,
//     projectProgress
// } from '../../../pages/home/information/type/project.type';

// const initialState: createProjectProps = {
//     agencyId: 0,
//     fiscalYear: 0,
//     strategy: 0,
//     tacticsId: 0,
//     plan: 0,
//     startProject: "",
//     endProject: "",
//     projectNameId: 0,
//     detailProject: "",
//     projects: [
//         {
//             projectProgress: [
//                 {
//                     endProject: "",
//                     startProject: ""
//                 }
//             ],
//             disbursement: [
//                 {
//                     date: "",
//                     outstandingBudget: "",
//                     totalBudget: "",
//                     totalDisbursement: ""
//                 }
//             ]
//         }
//     ],

    
//     project: [{
//         typeProjectId: 0,
//         typeGroupQuestId: 0,
//         startProject: "",
//         endProject: ""
//     }],
//     disbursement: [{
//         date: "",
//         totalBudget: "",
//         totalDisbursement: "",
//         outstandingBudget: "",
//     }]
// };

// const projectSlice = createSlice({
//     name: 'project',
//     initialState,
//     reducers: {
//         setAgencyId: (state, action) => {
//             state.agencyId = action.payload
//         },
//         setFiscalYear: (state, action) => {
//             state.fiscalYear = action.payload
//         },

//         //  add tabs project center 👇 
//         addProject: (state, action: PayloadAction<Project>) => {
//             state.projects.push(action.payload);
//         },
//         addProjectProgress: (state, action: PayloadAction<projectProgress>) => {
//             state.projects.map((list) => [{ ...list, projectProgress: list.projectProgress.push(action.payload) }])
//         },
//         changeProjectProgress: (state, action: PayloadAction<projectProgress>) => {
//             state.projects = state.projects.map((project) => ({
//                 ...project,
//                 projectProgress: project.projectProgress.map((progress:projectProgress) => ({
//                     ...progress,
//                     startProject: action.payload.startProject,
//                     endProject: action.payload.endProject
//                 }))
//             }));
//         },


//         addTypeProject: (state, action: PayloadAction<typeProject>) => {
//             state.project.push(action.payload);
//         },
//         addDisbursement: (state, action: PayloadAction<typeDisbursement>) => {
//             state.disbursement.push(action.payload);
//         },

//     },
// });

// export const {
//     addProject,
//     addTypeProject,
//     addDisbursement,
//     addProjectProgress,
//     changeProjectProgress,

//     setAgencyId,
//     setFiscalYear
// } = projectSlice.actions;
// export default projectSlice.reducer;
