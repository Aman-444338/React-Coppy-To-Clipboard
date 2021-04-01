import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

const exampleCode = `
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();

const Basic = () => {
    const [isCopied, handleCopy] = useCopyToClipboard(3000);
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={exampleCode}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          <span className="btn-copy" onClick={()=>handleCopy(exampleCode)}>{isCopied ?"Coppied":"Coppy"}</span>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Basic;
