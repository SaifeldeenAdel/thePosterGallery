export default function PosterItem({ poster, onClick }) {
    console.log("PosterItem render:", poster);
	return (
		<div
			key={poster.id}
			className="cursor-pointer overflow-hidden shadow hover:shadow-lg transition"
			onClick={onClick}
		>
			<img
				src={poster.src.src}
				width={poster.src.width}
				height={poster.src.height}
				alt={poster.title}
				className="w-full h-auto object-cover"
				loading="lazy"
			/>
			<div className="p-2 text-center font-semibold">{poster.title}</div>
		</div>
	);
}
