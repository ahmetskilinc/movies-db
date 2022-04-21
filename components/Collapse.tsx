import type { CollapseProps } from "../models/props";

const Collapse = (props: CollapseProps) => {
	const { children, title, header } = props;
	return (
		<div className="w-full my-2 md:my-4 mx-auto lg:max-w-cs px-cs">
			<div className="collapse rounded-md collapse-arrow" style={{ display: "grid" }}>
				<input type="checkbox" />
				<div className="collapse-title bg-secondary-content text-secondary peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center">
					{title !== undefined ? <h1 className="text-white text-bold text-2xl mr-3">{title}</h1> : null}
					{header !== undefined ? header : null}
				</div>
				<div className="collapse-content bg-secondary-content text-secondary peer-checked:bg-secondary peer-checked:text-secondary-content">
					<div className="flex flex-col">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Collapse;
