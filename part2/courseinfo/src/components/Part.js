const Part = (props) => {
	return (
		<p>
			<strong>{props.part.name}: </strong>
			{props.part.exercises} Exercises
		</p>
	);
};

export default Part