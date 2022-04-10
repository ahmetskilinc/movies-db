import { useParams } from "react-router-dom";

const Person = () => {
	return <div>{useParams().id}</div>;
};

export default Person;
