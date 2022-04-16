import { Reviews } from "../models/reviews";

const Reviews = (props: { reviews: Reviews.RootObject }) => {
	const { reviews } = props;

	const { results } = reviews;

	const avatar_pics = results.filter((review) => review.author_details.avatar_path !== null && review.author_details.avatar_path.split("/").length === 2);

	return (
		<div className="w-full my-2 md:my-4 mx-auto lg:max-w-cs px-cs">
			<div className="collapse rounded-md" style={{ display: "grid" }}>
				{/* <input type="checkbox" /> */}
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center">
					<h1 className="text-white text-bold text-2xl mr-3">{results.length} Reviews</h1>
					<div className="avatar-group -space-x-6">
						{avatar_pics.map((review) => (
							<div className="avatar" key={review.id}>
								<div className="w-10">
									<img src={`https://image.tmdb.org/t/p/w150_and_h150_face/${review.author_details.avatar_path}`} />
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<div className="flex flex-col">
						{results.map((review) => (
							<div className="flex flex-col" key={review.id}>
								<div className="flex items-center">
									<div className="avatar">
										<div className="w-10">
											<img
												src={
													review.author_details.avatar_path !== null && review.author_details.avatar_path.split("/").length === 2
														? `https://image.tmdb.org/t/p/w150_and_h150_face/${review.author_details.avatar_path}`
														: review.author_details.avatar_path
												}
											/>

											<img src={`https://image.tmdb.org/t/p/w150_and_h150_face/${review.author_details.avatar_path}`} />
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
