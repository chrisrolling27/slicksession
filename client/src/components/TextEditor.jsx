import React, { useState } from 'react'
import { Editor } from 'slate';
import { Value } from 'slate-react';


class TextEditor extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: '',
    };
  }

  onChange = ({ value }) => {
    this.setStafte({ value })
  }

  render() {
    return (
      <div>
      <Editor value={this.state.value} onChange={this.onChange} />
      </div>
    )
  }

}

export default TextEditor;
