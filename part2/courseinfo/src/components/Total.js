const Total = (props) => {
	return (
		<p>
			<strong>Number of Exercises: </strong>
            {
                props.parts.reduce((accumulator, part) => {
                    return accumulator + part.exercises
                }, 0)
            }
		</p>
	);
};

export default Total