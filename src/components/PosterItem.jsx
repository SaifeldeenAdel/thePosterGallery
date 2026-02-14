import { motion } from "motion/react";
export default function PosterItem({ poster, onClick }) {
	return (
		<div
			key={poster.id}
			className="cursor-pointer overflow-hidden shadow hover:shadow-xl transition p-1 pb-2 sm:p-4"
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

            <div className="font-sans font-light text-xs sm:text-base px-1 sm:px-2 pt-3 flex flex-row justify-between items-center">
                <div className="truncate"></div>
                <div>#{poster.id}</div>
            </div>
            
		</div>
	);
}
