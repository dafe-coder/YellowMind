import './blogFilters.scss';

const BlogFilters = () => {
	return (
		<ul className='filters'>
			<li className='active'>
				<a href='!#'>All articles</a>
			</li>
			<li>
				<a href='!#'>Ui/Ux design</a>
			</li>
			<li>
				<a href='!#'>Tips & Tricks</a>
			</li>
			<li>
				<a href='!#'>Marketing</a>
			</li>
			<li>
				<a href='!#'>SaaS Products</a>
			</li>
		</ul>
	);
};

export default BlogFilters;
