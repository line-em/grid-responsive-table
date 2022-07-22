import React from "react";
import "../table.css";

export default function Table({ ...props }) {
	return (
		<div className="gridtable-row">
			<div className="gridtable-cell" data-title="ID">
				{props.id}
			</div>

			<div className="gridtable-cell" data-title="Status">
				<p className={props.status === "Ongoing" ? "pill" : ""}>{props.status}</p>
			</div>

			<div className="gridtable-cell" data-title="Start">
				{props.started}
			</div>

			<div className="gridtable-cell" data-title="End">
				{props.ended}
			</div>

			<div className="gridtable-cell" data-title="Duration">
				{props.duration}
			</div>

			<div className="gridtable-cell" data-title="Channel">
				{props.channel}
			</div>
		</div>
	);
}
