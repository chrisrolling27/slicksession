import React, { useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';



const AppEditor = () => {

  const [editor] = useState(() => withReact(createEditor()))
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem('content')) || [
      {
        type: 'paragraph',
        children: [{ text: 'Enter text here.' }],
      },
    ]
  )

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

          //this example assumes you wish to save sessions through refreshes, which isnt a bad idea actually.
          if (isAstChange) {
            const content = JSON.stringify(value)
            console.log(value);
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
