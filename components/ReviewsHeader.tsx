import Image from "next/image";
import type { ReviewsHeaderProps } from "../models/props";

const ReviewsHeader = (props: ReviewsHeaderProps) => {
	const { results } = props;
	return (
		<div className="avatar-group -space-x-3">
			{results.slice(0, 3).map((review) => (
				<div className="avatar" key={review.id}>
					<div className="w-6 h-6">
						<Image
							src={
								review.author_details.avatar_path !== null && review.author_details.avatar_path.split("/").length === 2
									? `https://image.tmdb.org/t/p/w150_and_h150_face/${review.author_details.avatar_path}`
									: review.author_details.avatar_path !== null
									? review.author_details.avatar_path.substring(1)
									: "/images/placeholder.jpeg"
							}
							alt={review.author}
							width={24}
							height={24}
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
	);
};

export default ReviewsHeader;
