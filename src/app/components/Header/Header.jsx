"use client";

import { useState, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FaPlay, FaRandom } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

const Header = (props) => {
	const [settings, setSettings] = useState(false);
	const {
		setStart,
		randomize,
		speed,
		length,
		setSpeed,
		setLength,
		isSorting,
		setAlgorithm,
		reset,
	} = props;

	const speedHandler = (event) => {
		setSpeed(event.target.valueAsNumber);
	};

	const lengthHandler = (event) => {
		reset();
		setLength(event.target.valueAsNumber);
	};

	const algorithmHandler = (event) => {
		setAlgorithm(event.target.value);
	};
	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<div className="-m-1.5 p-1.5">
						<h1 className="">Sorting Visualizer</h1>
					</div>
				</div>
				<div className="flex lg:flex">
					<button
						onClick={setStart}
						disabled={isSorting}
						className="bg-white hover:bg-gray-400 font-bold p-2 border border-gray-400 rounded shadow mr-2"
					>
						<FaPlay />
					</button>
					<button
						onClick={randomize}
						disabled={isSorting}
						className="bg-white hover:bg-gray-400 font-bold p-2 border border-gray-400 rounded shadow mr-2"
					>
						<FaRandom />
					</button>
					<select
						onChange={algorithmHandler}
						disabled={isSorting}
						className="border border-gray-400 text-sm rounded block p-2 mr-2"
					>
						<option value="bubbleSort">Bubble Sort</option>
						<option value="insertionSort">Insertion Sort</option>
						<option value="selectionSort">Selection Sort</option>
						<option value="mergeSort">Merge Sort</option>
						<option value="quickSort">Quick Sort</option>
						<option value="heapSort">Heap Sort</option>
					</select>
					<Popover className="relative">
						<Popover.Button className="bg-white hover:bg-gray-400 font-bold p-2 border border-gray-400 rounded shadow">
							<MdSettings />
						</Popover.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute -right-2 top-full z-10 mt-3 overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5">
								<div className="p-2">
									<div className="">
										<label
											htmlFor="speed"
											className="block text-sm font-medium"
										>
											Speed
										</label>
										<input
											className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
											id="speed"
											type="range"
											min="1"
											max="30"
											value={speed}
											onChange={speedHandler}
											disabled={isSorting}
										/>
									</div>
									<div className="">
										<label
											htmlFor="length"
											className="block text-sm font-medium"
										>
											Length
										</label>
										<input
											className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
											id="length"
											type="range"
											min="5"
											max="50"
											value={length}
											onChange={lengthHandler}
											disabled={isSorting}
										/>
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>
				</div>
			</nav>
		</header>
	);
};

export default Header;
