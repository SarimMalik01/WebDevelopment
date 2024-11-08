import React from "react"
import "./style.css"
import "react-mde/lib/styles/css/react-mde-all.css";


export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => {
          const list=note.body.split('.');
         return(<div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
               
                <h4 className="text-snippet">{index+1} ) {list[0]}</h4>
            </div>
        </div>
    )});

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
                 <button className="new-note" onClick={props.deleteNote}>-</button>
            </div>
            {noteElements}
        </section>
    )
}
