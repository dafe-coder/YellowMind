const WhiteCard = ({ imgPath, title, description, className, data }) => {
	return (
		<li className={`white-card ${className ? className : ''}`}>
			<div className='white-card__img'>
				{data ? (
					<video loop autoPlay muted>
						<source src={data.imgPath} type='video/mp4' />
					</video>
				) : (
					<img src={imgPath} alt={title} />
				)}
			</div>
			<div className='white-card__info'>
				<h3>{data ? data.name : title}</h3>
				<p>{data ? data.position : description}</p>
			</div>
		</li>
	);
};

export default WhiteCard;
