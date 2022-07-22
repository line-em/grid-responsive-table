import React from "react";
import Table from "./Table";
import TableHeader from "./TableHeader";

export default function Main() {
	const categories = tableCategories;
	const data = tableContent;

	return (
		<section className="jobs-container">
			{Jobs}

			<hr />

			<div>
				<TableHeader {...categories} />
				{data.map((item, index) => (
					<Table key={index} {...item} />
				))}
			</div>
		</section>
	);
}

// Various data for the table

const Jobs = (
	<section className="job-info">
		<h1>Jobs</h1>
		<article>
			<div className="jobs-done">
				<h4>Total Runs</h4>
				<h1>34</h1>
			</div>
			<div className="jobs-done">
				<h4>Total Runs</h4>
				<h1>34</h1>
			</div>
			<div className="jobs-done">
				<h4>Total Runs</h4>
				<h1>34</h1>
			</div>
		</article>
	</section>
);

const tableCategories = {
	id: "ID",
	started: "Start",
	ended: "End",
	duration: "Duration",
	status: "Status",
	channel: "Channel"
};
const tableContent = [
	{
		id: 150921,
		started: "7/14/2022 12:14:00 AM",
		ended: "7/14/2022 12:14:00 AM",
		duration: "0:00:00",
		status: "Ongoing",
		channel:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod natus repellendus molestiae error unde modi rem voluptate inventore ut molestias quisquam culpa totam aliquid, est quis vero? Dignissimos, delectus quae."
	},
	{
		id: 150922,
		started: "7/14/2022 - 12:14:00 AM",
		ended: `7/14/2022 - 12:14:00 AM`,
		duration: "0:00:00",
		status: "Ongoing",
		channel: "channel 02"
	},
	{
		id: 150922,
		started: "7/14/2022 12:14:00 AM",
		ended: "7/14/2022 12:14:00 AM",
		duration: "0:00:00",
		status: "Ongoing",
		channel: "channel 02"
	}
];
