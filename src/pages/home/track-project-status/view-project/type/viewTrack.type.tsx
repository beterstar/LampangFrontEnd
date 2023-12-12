export interface viewTrackType {

}

export type fileTypes = {
    fileId: number;
    file: File | null;
}

type oneInspectWork = {
    deliveryDate: string;
    dateOfInspection: string;
    dateSending: string;
}
type twoInspectWork = {
    deliveryDate: string;
    dateOfInspection: string;
    dateSending: string;
}

export type operation = {
    statusId: number;
    statusName: string;
    createDate: string;
    date: string;
    note: string;
    file: fileTypes[];
    isShow: boolean;
    installmentWork?: oneInspectWork
    endInstallmentWork?: twoInspectWork
}



// MOCK DATA รายงานความคืบหน้าโครงการ
export type projectProgressReport = {
    time: number;
    date: string;
    createDate: string;
    file: File | null;
    isShow:boolean
}