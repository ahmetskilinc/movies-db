const ExternalLinkHero = (props: { link: string; title: string }) => {
	const { link, title } = props;
	return (
		<a href={link} className="hover:underline flex items-center" target="_blank" rel="noreferrer">
			{title}
			<svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="currentColor">
				<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
				<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
			</svg>
		</a>
	);
};

export default ExternalLinkHero;
