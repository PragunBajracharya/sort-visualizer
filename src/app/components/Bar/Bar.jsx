import { useState, useEffect } from "react";
const Bar = (props) => {
	const { item, color, length } = props;

	return (
		<div className="flex flex-col justify-end items-center h-full mr-2">
			<div
				className={
					color +
					" min-w-4 relative transition duration-50 ease-in-out"
				}
				style={{
					height: `${(item / (length + 1) * 100).toFixed(2)}%`,
				}}
			></div>
			<div className="text-white">{item}</div>
		</div>
	);
};

export default Bar;
