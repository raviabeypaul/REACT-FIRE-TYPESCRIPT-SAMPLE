import { DocumentData } from "firebase/firestore";

export interface File{
    id: string;
    name ?: string;
    fileType : 'text'|'folder';
    data : string;
    ref?: string;
    updatedAt ?: Date;
    createdAt ?: Date;
}
export interface Notes {
    email: string;
    updateAt ?: Date;
    createdAt ?: Date;
    files : File[]
}