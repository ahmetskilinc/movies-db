import CurrencyFormat from "react-currency-format";

const RevenueBudgetView = (props: { budget: number; revenue: number }) => {
	const { budget, revenue } = props;
	return (
		<div className="w-full my-2 md:my-4 mx-auto lg:max-w-cs px-cs">
			<div className={`stats bg-secondary-content text-secondary rounded-md flex flex-wrap lg:inline-grid`}>
				<div className="stat">
					<div className="stat-title">Budget</div>
					<div className="stat-value">
						{budget === 0 ? (
							<span className="text-gray-500">Unknown</span>
						) : (
							<CurrencyFormat value={budget} displayType={"text"} thousandSeparator={true} prefix={"$"} />
						)}
					</div>
				</div>

				<div className="stat">
					<div className="stat-title">Revenue</div>
					<div className="stat-value">
						{revenue === 0 ? (
							<span className="text-gray-500">Unknown</span>
						) : (
							<CurrencyFormat value={revenue} displayType={"text"} thousandSeparator={true} prefix={"$"} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RevenueBudgetView;
