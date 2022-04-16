import CurrencyFormat from "react-currency-format";

const RevenueBudgetView = (props: { budget: number; revenue: number }) => {
	const { budget, revenue } = props;
	return (
		<div className="w-full my-2 md:my-4 mx-auto lg:max-w-cs px-cs">
			<div className="stats bg-primary text-primary-content">
				<div className="stat">
					<div className="stat-title">Budget</div>
					<div className="stat-value">
						<CurrencyFormat value={budget} displayType={"text"} thousandSeparator={true} prefix={"$"} />
					</div>
				</div>

				<div className="stat">
					<div className="stat-title">Revenue</div>
					<div className="stat-value">
						<CurrencyFormat value={revenue} displayType={"text"} thousandSeparator={true} prefix={"$"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RevenueBudgetView;
