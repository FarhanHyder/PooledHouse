import React from "react";
import Chart from "react-google-charts";

const ViewBarChart =(props) => {
	const dailyTipInfo = [
		["Day", "Daily Average Tips", {role: "style"}],
		["Sunday", Number.parseFloat(props.dailyTipsAvg.Sunday.tipsPerHour.toFixed(2)), "color: gray"],
		["Monday", Number.parseFloat(props.dailyTipsAvg.Monday.tipsPerHour.toFixed(2)), "color: gray"],
		["Tuesday", Number.parseFloat(props.dailyTipsAvg.Tuesday.tipsPerHour.toFixed(2)), "color: gray"],
		["Wednesday", Number.parseFloat(props.dailyTipsAvg.Wednesday.tipsPerHour.toFixed(2)), "color: gray"],
		["Thursday", Number.parseFloat(props.dailyTipsAvg.Thursday.tipsPerHour.toFixed(2)), "color: gray"],
		["Friday", Number.parseFloat(props.dailyTipsAvg.Friday.tipsPerHour.toFixed(2)), "color: gray"],
		["Saturday", Number.parseFloat(props.dailyTipsAvg.Saturday.tipsPerHour.toFixed(2)), "color: gray"]
	]

    return (
      <div className="card">
        <Chart chartType="BarChart" width="100%" height="300px" data={dailyTipInfo} />
      </div>
    );
};

export default ViewBarChart;