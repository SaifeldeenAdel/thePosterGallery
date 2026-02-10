import { useState } from "react";
import PosterItem from "./PosterItem";


export default function PosterGallery({ posters }) {
	const [selectedPoster, setSelectedPoster] = useState(null);

	return (
		<div className="max-w-6xl mx-auto px-4">
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
				{posters.map((poster) => (
					<PosterItem
						key={poster.id}
						poster={poster}
						onClick={() => setSelectedPoster(poster)}
					/>
				))}
			</div>
		</div>
	);
}
