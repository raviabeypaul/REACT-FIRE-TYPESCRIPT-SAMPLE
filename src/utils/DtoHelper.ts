import { v4 as uuid } from "uuid";
import { File } from "../dtos/NotesDto";
export const fillFileDto = (file :File)=>{
    let date = new Date(Date.now())
    const _file : File = {
        ...file,
        createdAt : date,
        id : uuid(),
        updatedAt : date
    }
    return _file;
}