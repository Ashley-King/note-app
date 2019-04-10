import React from 'react';

class Note extends React.Component {
    
    render() {
        const {note} = this.props;
        return ( <
            div className = "note-container" >
                <form className="note-form">
                    <input 
                        type="text" 
                        className="note-title-input"
                        placeholder= "Note Title..."
                        defaultValue= {note.title}
                    />
                    <textarea 
                        className="note-textarea"
                        placeholder="Type Here..."
                        defaultValue={note.content}
                    />
                    <input type="submit" className="note-button" calue="Submit"/>
                </form>
            </div>

        )
    }
}

export default Note;