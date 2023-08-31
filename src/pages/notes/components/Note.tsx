import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import "../css/Note.css";
interface NoteProps {
    id : string;
    text : string;
    deleteNote : (id: string)=>void
}
function Note(props : NoteProps) {
  return (
    <div className="note">
      <div className="note__body">{props.text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          className="note__delete"
          onClick={() => props.deleteNote(props.id)}
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon>
      </div>
    </div>
  );
}

export default Note;
