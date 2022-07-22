import React from "react";
import "../table.css";

export default function TableHeader({ ...props }) {
	return (
		<div className="gridtable-row">
			<div className="gridtable-cell">{props.id}</div>
			<div className="gridtable-cell">{props.status}</div>
			<div className="gridtable-cell">{props.started}</div>
			<div className="gridtable-cell">{props.ended}</div>
			<div className="gridtable-cell">{props.duration}</div>
			<div className="gridtable-cell">{props.channel}</div>
			{/* <div className="gridtable-cell">{props.log_file}</div> */}
		</div>
	);
}
