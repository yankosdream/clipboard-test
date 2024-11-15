import React from "react";

import {
  ClipboardItem as PolyfillClipboardItem,
  write as writeToClipboardPolyfill,
} from "clipboard-polyfill";

import "./App.css";

function App() {
  const copy2Clipboard = (plain: string, html: string) => {
    const clipboardItemFields = {
      "text/plain": new Blob([plain], { type: "text/plain" }),
      "text/html": new Blob([html], { type: "text/html" }),
    };

    const clipboardItem = new PolyfillClipboardItem(clipboardItemFields);
    writeToClipboardPolyfill([clipboardItem]);
  };

  return (
    <div className="App">
      <button
        onClick={() => copy2Clipboard("plain text", "<h1>html body</h1>")}
      >
        copy
      </button>
    </div>
  );
}

export default App;
