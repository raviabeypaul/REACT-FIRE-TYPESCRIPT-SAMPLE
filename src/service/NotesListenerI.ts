import { Unsubscribe } from "firebase/database";

export interface NotesListenerI{
    data : any;
    unsub : Unsubscribe
}