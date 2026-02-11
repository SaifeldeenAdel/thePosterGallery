import { motion } from "motion/react";
export default function PosterItem({ poster, onClick }) {
	return (
		<div
			key={poster.id}
			className="cursor-pointer overflow-hidden shadow hover:shadow-xl transition"
			onClick={onClick}
		>
			<motion.img
				src={poster.src.src}
				width={poster.src.width}
				height={poster.src.height}
				alt={poster.title}
				layoutId={`poster-${poster.id}`}
				className="w-full h-auto object-cover pointer-events-none"
				loading="lazy"
			/>
		</div>
	);
}
