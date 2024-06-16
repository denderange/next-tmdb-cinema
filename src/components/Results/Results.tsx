import React from "react";

type ResultType = {
	original_title: string;
	id: number;
};

interface IResults {
	results: ResultType[];
}

const Results = ({ results }: IResults) => {
	return (
		<div>
			{results.map((result) => (
				<div key={result.id}>
					<h2>{result.original_title}</h2>
				</div>
			))}
		</div>
	);
};

export default Results;
