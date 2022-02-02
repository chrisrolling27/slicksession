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
        onChange={value => {
          setValue(value)

          //detects changes?
          const isAstChange = editor.operations.some(op => 'set_selection' !== op.type
          )
          if (isAstChange) {
            const content = JSON.stringify(value)
            console.log('change made');
            localStorage.setItem('content', content)
          }
        }}
      >
        <Editable />
      </Slate>
    </div>
  )
}




export default AppEditor;
