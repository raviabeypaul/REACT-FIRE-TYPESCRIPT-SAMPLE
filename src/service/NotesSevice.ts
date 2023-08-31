import { doc, getDoc, setDoc } from "firebase/firestore"
import db from './../config/FirebaseConfig'
import { File, Notes } from "../dtos/NotesDto"
import { fillFileDto } from "../utils/DtoHelper";
import { AppError } from "../dtos/AppError";
import { ERROR_CODES, ERROR_MESSAGES } from "../utils/Constants";
export class NotesService {
    documentName = 'tasks'

    /** Create File based on email id as key, adding a new file and updating its  */
    createFile = async (email : string, fileDto : File) => {
        const docRef = doc(db, this.documentName, email)
        let date = new Date(Date.now())
        const file  =  fillFileDto(fileDto)
        const notesDto : Notes = {
            email : email,
            createdAt : date,
            updateAt : date,
            files : [file]
        }
        await setDoc(docRef , notesDto)
        return notesDto;
    }
    
    /** User's document by email id */
    getUserNotes = async (emailId: string) => {
        const docRef = doc(db, this.documentName, emailId)
        const docSnap = await getDoc(docRef)
        return docSnap;
    }

    deleteNote = async(emailId : string, fileId : string)=>{
        const docSnap = await this.getUserNotes(emailId);
        if (docSnap.exists()) {
            const docRef = doc(db, this.documentName, emailId)
            console.log("Document data:", docSnap.data());
            let userArena : any = docSnap.data();
            if(!userArena.files){
                userArena.files = []
            }
            let newNotes = userArena.files.filter((value: File)=>fileId !==value.id)
            userArena.files = newNotes;
            await setDoc(docRef , userArena)
            return userArena
        }else{
            throw new AppError(ERROR_MESSAGES.COULD_NOT_FIND_THE_NOTE, ERROR_CODES.NOTE_DELETION_ERROR )
        }
    }

    updateOrCreateFile = async (emailId: string, file : File) => {
        const docSnap = await this.getUserNotes(emailId);
        if (docSnap.exists()) {
            const docRef = doc(db, this.documentName, emailId)
            console.log("Document data:", docSnap.data());
            let _file = fillFileDto(file)
            let notes : any = docSnap.data();
            if(!notes.files){
                notes.files = []
            }
            notes.files.push(_file)
            await setDoc(docRef , notes)
            return notes
        } else {
            const _file  = fillFileDto(file)
            return this.createFile(emailId,_file)
            // docSnap.data() will be undefined in this case
            
        }
    }
}
