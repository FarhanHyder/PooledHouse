import React from "react";
import Chart from "react-google-charts";

/**
 * @const avgByDay
 * @param {number} avgTips
 */
const avgByDay = (avgTips) => {
	return [
		["Day", "Average Tips", {role: "style"}],
		["Sunday", Number.parseFloat(avgTips.Sunday.tipsPerHour.toFixed(2)), "stroke-color: #25754D; stroke-width: 4; fill-color: #311B92"],
		["Monday", Number.parseFloat(avgTips.Monday.tipsPerHour.toFixed(2)), "stroke-color: #00ABDA; stroke-width: 4; fill-color: #2196F3"],
		["Tuesday", Number.parseFloat(avgTips.Tuesday.tipsPerHour.toFixed(2)), "stroke-color: #2A57DE; stroke-width: 4; fill-color: #689F38"],
		["Wednesday", Number.parseFloat(avgTips.Wednesday.tipsPerHour.toFixed(2)), "stroke-color: #B02ADE; stroke-width: 4; fill-color: #3E2723"],
		["Thursday", Number.parseFloat(avgTips.Thursday.tipsPerHour.toFixed(2)), "stroke-color: #47DE2A; stroke-width: 4; fill-color: #455A64"],
		["Friday", Number.parseFloat(avgTips.Friday.tipsPerHour.toFixed(2)), "stroke-color: #E4E2A2; stroke-width: 4; fill-color: #4DD0E1"],
		["Saturday", Number.parseFloat(avgTips.Saturday.tipsPerHour.toFixed(2)), "stroke-color: #FFA56D; stroke-width: 4; fill-color: #388E3C"]
	]
}

const avgByPosition = (avgTips) => {
	return [
		["Position", "Average Tips", {role: "style"}],
		["Bartender", Number.parseFloat(avgTips.Bartender.tipsPerHour.toFixed(2)), "stroke-color: #25754D; stroke-width: 4; fill-color: #311B92"],
		["Server", Number.parseFloat(avgTips.Server.tipsPerHour.toFixed(2)), "stroke-color: #00ABDA; stroke-width: 4; fill-color: #2196F3"],
		["Barback", Number.parseFloat(avgTips.Barback.tipsPerHour.toFixed(2)), "stroke-color: #47DE2A; stroke-width: 4; fill-color: #455A64"],
		["Busser", Number.parseFloat(avgTips.Busser.tipsPerHour.toFixed(2)), "stroke-color: #E4E2A2; stroke-width: 4; fill-color: #4DD0E1"],
		["Other", Number.parseFloat(avgTips.Other.tipsPerHour.toFixed(2)), "stroke-color: #B02ADE; stroke-width: 4; fill-color: #3E2723"],
	]
}

const avgByZipCode = (avgTips) => {
	return [
		["Zip Code", "Average Tips", {role: "style"}],
	]
}

const avgByNeighborhood = (avgTips) => {
	return [
		["Neighborhood", "Average Tips", {role: "style"}],
	]
}

const avgByShift = (avgTips) => {
	return [
		["Work Shift", "Average Tips", {role: "style"}],
	]
}

const ViewBarChart =(props) => {
	let data = [];
	let title = "";
	if(props.chartOption === "position") {
		data = avgByPosition(props.avgByPosition);
		title = "Average Tips By Position";
	}
	else if (props.chartOption === "day") {
		data = avgByDay(props.avgByDay);
		title = "Average Daily Tips";
	}
	else if (props.chartOption === "shift") {
		data = avgByShift(props.dailyTipsAvg);
		title = "Average Tips By Shift";
	}
	else if (props.chartOption === "zip") {
		data = avgByZipCode(props.dailyTipsAvg);
		title = "Average Tips By Zip";
	}
	else if (props.chartOption === "neighborhood") {
		data = avgByNeighborhood(props.dailyTipsAvg);
		title = "Average Tips Neighborhood";
	}
    return (
      <div className="card">
				<h3 className="card-title bg-secondary">{title}</h3>
        <Chart chartType="BarChart" width="100%" height="300px" data={data} />
      </div>
    );
};

export default ViewBarChart;