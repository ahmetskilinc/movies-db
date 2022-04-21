import type { ReviewsProps } from "../models/props";
import React from "react";
import { parseISO, format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import dynamic from "next/dynamic";

const Collapse = dynamic(() => import("./Collapse"));
const ReviewsHeader = dynamic(() => import("./ReviewsHeader"));

const Reviews = (props: ReviewsProps) => {
	const { reviews } = props;
	const { results } = reviews;

	return (
		<Collapse
			header={
				<>
					<h1 className="text-white text-bold text-2xl mr-3">
						{results.length} Review{results.length > 1 || results.length === 0 ? "s" : ""}
					</h1>
					{results.length > 0 && <ReviewsHeader results={results} />}
				</>
			}
		>
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
		</Collapse>
	);
};

export default Reviews;
