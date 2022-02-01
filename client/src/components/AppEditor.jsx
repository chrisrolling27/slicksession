import React, { useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';



const AppEditor = () => {

  const [editor] = useState(() => withReact(createEditor()))
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Enter your text.' }],
    },
  ])

  return (

    <div className="sessionAdder">
      <Slate
        editor={editor}
        value={value}
        onChange={newValue => setValue(newValue)}
      >
        <Editable />
      </Slate>
    </div>
  )
}




export default AppEditor;
