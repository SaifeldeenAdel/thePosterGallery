import { useState } from "react";
import PosterItem from "./PosterItem";
import { motion, AnimatePresence } from "motion/react";

export default function PosterGallery({ posters }) {
	const [selectedPoster, setSelectedPoster] = useState(null);

	return (
		<div className="max-w-6xl mx-auto px-5 py-20 sm:py-40">
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6 sm:gap-y-10 sm:gap-x-10">
				{posters.map((poster) => (
					<motion.div
						key={poster.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ amount: 0.1 }}
					>
						<PosterItem
							key={poster.id}
							poster={poster}
							onClick={() => setSelectedPoster(poster)}
						/>
					</motion.div>
				))}
			</div>

			<AnimatePresence>
				{selectedPoster && (
					<>
						{/* Dark Overlay */}
						<motion.div
							className="fixed inset-0 bg-black/70 z-40"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedPoster(null)}
						/>

						{/* Centered Image */}
						<div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
							<div className="flex flex-col items-center gap-y-5 pointer-events-none">
								<motion.img
									src={selectedPoster.src.src}
									width={selectedPoster.src.width}
									height={selectedPoster.src.height}
									layoutId={`poster-${selectedPoster.id}`}
									className="max-w-[90vw] max-h-[90vh] shadow-2xl pointer-events-none"
								/>
								
							</div>
						</div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}
