import React, { useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';



const AppEditor = () => {

  const [editor] = useState(() => withReact(createEditor()))
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Enter your text here.' }],
    },
  ])

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <Editable />
    </Slate>
  )
}




export default AppEditor;
