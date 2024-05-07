import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Basic Sorting Algorithm Visualizer | Pragun Bajracharya",
	description: "Visualize basic sorting algorithms like Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className + " bg-black overflow-hidden"}>{children}</body>
		</html>
	);
}
