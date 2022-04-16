import { useRouter } from "next/router";

const Person = () => {
	const router = useRouter();
	const { id } = router.query;

	return <div>{id}</div>;
};

export default Person;
