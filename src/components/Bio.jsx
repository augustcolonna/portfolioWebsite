import ReactCurvedText from "react-curved-text";

function Bio() {
	return (
		<div className="my-name">
			<ReactCurvedText
				width="900"
				height="900"
				cx={450}
				cy={450}
				rx={300}
				ry={300}
				startOffset="0"
				reversed={true}
				text="August Colonna, Software Developer"
				textProps={{ style: { fontSize: 40 } }}
				textPathProps={null}
				tspanProps={null}
				ellipseProps={null}
				svgProps={{ className: "rotating-curved-text" }}
			/>
		</div>
	);
}

export default Bio;
