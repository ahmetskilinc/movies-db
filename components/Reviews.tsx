import React from "react";
import { Reviews } from "../models/reviews";

const Reviews = (props: { reviews: Reviews.RootObject }) => {
	const { reviews } = props;

	const { results } = reviews;

	return (
		<div className="w-full my-2 md:my-4 mx-auto lg:max-w-cs px-cs">
			<div className="collapse rounded-md" style={{ display: "grid" }}>
				<input type="checkbox" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center">
					<h1 className="text-white text-bold text-2xl mr-3">{results.length} Reviews</h1>
					<div className="avatar-group -space-x-6">
						{results.map((review) => (
							<div className="avatar" key={review.id}>
								<div className="w-10">
									<img
										src={
											review.author_details.avatar_path !== null && review.author_details.avatar_path.split("/").length === 2
												? `https://image.tmdb.org/t/p/w150_and_h150_face/${review.author_details.avatar_path}`
												: review.author_details.avatar_path !== null
												? review.author_details.avatar_path.substring(1)
												: "/images/placeholder.jpeg"
										}
										alt={review.author}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<div className="flex flex-col">
						{results.map((review, index) => (
							<React.Fragment key={review.id}>
								<div className="flex flex-col">
									<div className="flex items-center h-16">
										<div className="avatar">
											<div className="w-14 h-14">
												<img
													className="rounded h-14 w-14 object-cover"
													src={
														review.author_details.avatar_path !== null && review.author_details.avatar_path.split("/").length === 2
															? `https://image.tmdb.org/t/p/w150_and_h150_face/${review.author_details.avatar_path}`
															: review.author_details.avatar_path !== null
															? review.author_details.avatar_path.substring(1)
															: "/images/placeholder.jpeg"
													}
												/>
											</div>
										</div>
										<div className="flex-1">
											<div className="flex items-start flex-col p-2">
												<h1 className="text-white text-bold text-md mr-3">{review.author}</h1>
												<p>
													{review.content.split(" ").splice(0, 24).join(" ")}
													{review.content.split(" ").length > 24 ? "..." : ""}
												</p>
											</div>
										</div>
									</div>
								</div>
								{index !== results.length - 1 ? <div className="divider"></div> : null}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
