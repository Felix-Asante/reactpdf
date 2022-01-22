import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "./sample.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { sampleBase64pdf } from "./Base64";
import { pdfjs } from "react-pdf";

export default function App() {
	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

	const [numPages, setNumPages] = useState(null);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<Document
			file={sampleBase64pdf}
			options={{ workerSrc: "/pdf.worker.js" }}
			onLoadSuccess={onDocumentLoadSuccess}
		>
			{Array.from(new Array(numPages), (el, index) => (
				<Page key={`page_${index + 1}`} pageNumber={index + 1} />
			))}
		</Document>
	);
}
