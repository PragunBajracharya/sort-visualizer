"use client";

import { useState, useEffect, Fragment } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import bubbleSort from "./algorithms/bubbleSort";
import insertionSort from "./algorithms/insertionSort";
import selectionSort from "./algorithms/selectionSort";
import mergeSort from "./algorithms/mergeSort";
import quickSort from "./algorithms/quickSort";
import heapSort from "./algorithms/heapSort";

const randomizedArray = (length) => {
	const randomArray = Array.from(Array(length + 1).keys()).slice(1);

	for (let i = randomArray.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i - 1));

		const temp = randomArray[i];
		randomArray[i] = randomArray[randomIndex];
		randomArray[randomIndex] = temp;
	}

	return randomArray;
};

export default function HomePage() {
	const [algorithm, setAlgorithm] = useState("bubbleSort");
	const [comparing, setComparing] = useState([]);
	const [swapping, setSwapping] = useState([]);
	const [sortedIndex, setSortedIndex] = useState([]);
	const [speed, setSpeed] = useState(8);
	const [length, setLength] = useState(10);
	const [isSorting, setIsSorting] = useState(false);
	const [sortingArray, setSortingArray] = useState(randomizedArray(length));

	const reset = () => {
		setSwapping([]);
		setComparing([]);
		setSortedIndex([]);
		setIsSorting(false);
	};

	const randomize = () => {
		reset();
		setSortingArray(randomizedArray(length));
	};

	useEffect(() => {
		setSortingArray(randomizedArray(length));
	}, [length]);

	const startSorting = (order) => {
		reset();
		setIsSorting(true);

		for (let i = 0; i < order.length; i++) {
			setTimeout(() => {
				const [j, k, arr, index] = order[i];
				setComparing([j, k]);
				setSwapping([]);

				if (arr !== null) {
					setSortingArray(arr);
					setSwapping([j, k]);
				}

				if (index !== null) {
					setSortedIndex((prevState) => [...prevState, index]);
				}

				if (i === order.length - 1) {
					setIsSorting(false);
				}
			}, i * (800 / speed));
		}
	};

	const SortHandler = () => {
		const algo = {
			bubbleSort: bubbleSort(sortingArray),
			insertionSort: insertionSort(sortingArray),
			selectionSort: selectionSort(sortingArray),
			mergeSort: mergeSort(sortingArray),
			quickSort: quickSort(sortingArray),
			heapSort: heapSort(sortingArray),
		};
		const chosenAlgorithm = algo[algorithm] ?? algo["bubbleSort"];
		startSorting(chosenAlgorithm);
	};

	return (
		<Fragment>
			<Header
				setStart={SortHandler}
				randomize={randomize}
				speed={speed}
				length={length}
				setSpeed={setSpeed}
				setLength={setLength}
				isSorting={isSorting}
				setAlgorithm={setAlgorithm}
				reset={reset}
			/>
			<Main 
				isSorting={isSorting}
				sortingArray={sortingArray}
				comparing={comparing}
				swapping={swapping}
				sortedIndex={sortedIndex}
				length={length}
			/>
		</Fragment>
	);
}
