import './App.css';
import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
// import 'bulma/css/bulma.css';
// import 'material-design-icons/iconfont/material-icons.css';


function Pdfviver() {
    // https://codesandbox.io/s/6v987w15zw?file=/src/PDFViewer.js
  return (
      <div>
    <PDFViewer
      document={{
        url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
      }}
    />
    </div>
  );
}

export default Pdfviver;
