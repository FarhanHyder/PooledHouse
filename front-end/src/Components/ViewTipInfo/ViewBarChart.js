import React from "react";
import Chart from "react-google-charts";

const avgByDay = (avgTips) => {
	return [
		["Day", "Average Tips", {role: "style"}],
		["Sunday", Number.parseFloat(avgTips.Sunday.tipsPerHour.toFixed(2)), "color: gray"],
		["Monday", Number.parseFloat(avgTips.Monday.tipsPerHour.toFixed(2)), "color: gray"],
		["Tuesday", Number.parseFloat(avgTips.Tuesday.tipsPerHour.toFixed(2)), "color: gray"],
		["Wednesday", Number.parseFloat(avgTips.Wednesday.tipsPerHour.toFixed(2)), "color: gray"],
		["Thursday", Number.parseFloat(avgTips.Thursday.tipsPerHour.toFixed(2)), "color: gray"],
		["Friday", Number.parseFloat(avgTips.Friday.tipsPerHour.toFixed(2)), "color: gray"],
		["Saturday", Number.parseFloat(avgTips.Saturday.tipsPerHour.toFixed(2)), "color: gray"]
	]
}

const avgByPosition = (avgTips) => {
	return [
		["Position", "Average Tips", {role: "style"}],
		["Bartender", Number.parseFloat(avgTips.Bartender.tipsPerHour.toFixed(2)), "color: gray"],
		["Server", Number.parseFloat(avgTips.Server.tipsPerHour.toFixed(2)), "color: gray"],
		["Barback", Number.parseFloat(avgTips.Barback.tipsPerHour.toFixed(2)), "color: gray"],
		["Busser", Number.parseFloat(avgTips.Busser.tipsPerHour.toFixed(2)), "color: gray"],
		["Other", Number.parseFloat(avgTips.Other.tipsPerHour.toFixed(2)), "color: gray"],
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
		data = avgByDay(props.dailyTipsAvg);
		title = "Average Daily Tips";
	}
    return (
      <div className="card">
				<h3 className="card-title bg-secondary">{title}</h3>
        <Chart chartType="BarChart" width="100%" height="300px" data={data} />
      </div>
    );
};

export default ViewBarChart;