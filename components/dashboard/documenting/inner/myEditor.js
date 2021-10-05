import React, { Component } from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";

const { Editor } = dynamic(import("react-draft-wysiwyg"), { ssr: false });

class MyEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea disabled value={editorState.getCurrentContent()} />
      </div>
    );
  }
}

export default MyEditor;
