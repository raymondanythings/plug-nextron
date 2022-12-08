import React from "react";
import electron from "electron";
import Link from "next/link";

const ipcRenderer = electron.ipcRenderer || false;

function Next() {
  const onSendIpcMessage = () => {
    if (ipcRenderer) {
      const result = ipcRenderer.sendSync("ipc-example", "?????");
    }
  };
  return (
    <React.Fragment>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <img className="ml-auto mr-auto" src="/images/logo.png" />
        <span>⚡ Nextron ⚡</span>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link className="btn-blue" href="/home">
          Go to home page
        </Link>
      </div>
      <button onClick={onSendIpcMessage}>GOSEND</button>
    </React.Fragment>
  );
}

export default Next;
