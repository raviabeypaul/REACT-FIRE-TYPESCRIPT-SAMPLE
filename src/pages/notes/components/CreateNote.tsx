import LinearProgress from "@mui/material/LinearProgress";
import { ChangeEventHandler, MouseEventHandler } from "react";
interface CreateNoteProps {
    textHandler : ChangeEventHandler| undefined
    saveHandler : MouseEventHandler | undefined
    inputText : string
}
function CreateNote( props : CreateNoteProps) {
  //character limit
  const charLimit = 100;
  const charLeft = charLimit - props.inputText.length;
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols={10}
        rows={5}
        value={props.inputText}
        placeholder="Type...."
        onChange={props.textHandler}
        maxLength={100}
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={props.saveHandler}>
          Save
        </button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  );
}

export default CreateNote;
