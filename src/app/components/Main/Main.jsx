import { useState, useEffect } from "react";

import Bar from "../Bar/Bar";

const Main = (props) => {
	const {
		isSorting,
		sortingArray,
		comparing,
		swapping,
		sortedIndex,
		length,
	} = props;

	return (
		<div className="container mx-auto px-2 overflow-x-auto text-white ">
			<div className="flex justify-center items-end" style={{ height: '80vh'}}>
				{sortingArray.map((item, index) => {
					let color = "bg-gray-500";

					if (comparing.includes(index)) {
						color = "bg-yellow-500";
					}

					if (swapping.includes(index)) {
						color = "bg-red-500";
					}

					if (sortedIndex.includes(index)) {
						color = "bg-green-500";
					}
					return (
						<Bar
							key={index}
							item={item}
							color={color}
							length={length}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Main;
