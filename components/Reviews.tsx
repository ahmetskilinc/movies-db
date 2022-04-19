import React from "react";
import { parseISO, format } from "date-fns";
import { Reviews } from "../models/reviews";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Reviews = (props: { reviews: Reviews.RootObject }) => {
	const { reviews } = props;

	const { results } = reviews;

	return (
		<div className="w-full my-2 md:my-4 mx-auto lg:max-w-cs px-cs">
			<div className="collapse rounded-md collapse-arrow" style={{ display: "grid" }}>
				{results.length > 0 && <input type="checkbox" />}
				<div className="collapse-title bg-secondary-content text-secondary peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center">
					<h1 className="text-white text-bold text-2xl mr-3">
						{results.length} Review{results.length > 1 || results.length === 0 ? "s" : ""}
					</h1>
					{results.length > 0 && (
						<div className="avatar-group -space-x-3">
							{results.slice(0, 3).map((review) => (
								<div className="avatar" key={review.id}>
									<div className="w-6 h-6">
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
							{results.length > 3 && (
								<div className="avatar placeholder">
									<div className="w-6 h-6 bg-neutral-focus text-neutral-content">
										<p>+{results.length - 3}</p>
									</div>
								</div>
							)}
						</div>
					)}
				</div>
				<div className="collapse-content bg-secondary-content text-secondary peer-checked:bg-secondary peer-checked:text-secondary-content">
					<div className="flex flex-col">
						{results.map((review, index) => (
							<React.Fragment key={review.id}>
								<div>
									<div className="flex items-center mb-2">
										<div className="avatar border-0 h-10 mr-3">
											<div className="flex-shrink-0 w-10 h-10">
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
										<div className="flex-grow">
											<h1 className="text-white text-bold text-md mr-3">{review.author}</h1>
											<p className="text-secondary">{format(parseISO(review.created_at), "dd MMM yy")}</p>
										</div>
									</div>
									<div className="flex items-start flex-col">
										<ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml={false}>
											{review.content}
										</ReactMarkdown>
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
