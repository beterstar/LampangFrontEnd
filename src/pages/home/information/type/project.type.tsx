
export type typeProject = {
    typeProjectId: number;
    typeGroupQuestId: number;
    startProject: string;
    endProject: string;
}
export type typeDisbursement = {
    date: string;
    totalBudget: string;
    totalDisbursement: string;
    outstandingBudget: string;
}

export type projectProgress = {
    startProject?: string;
    endProject?: string;
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface Project {
    projectProgress: projectProgress[];
    disbursement: typeDisbursement[];
}

export interface createProjectProps {
    agencyId: number;
    fiscalYear: number;
    strategy: number;
    tacticsId: number;
    plan: number;
    startProject: string;
    endProject: string;
    projectNameId: number;
    detailProject: string;
    projects:Project[],
    project: typeProject[];
    disbursement: typeDisbursement[];
}