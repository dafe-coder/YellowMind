import './blog.scss';
import WhiteCard from '../../components/whiteCard/WhiteCard';
import BlogFilters from '../../components/blogFilters/BlogFilters';
import MainText from '../../components/mainText/MainText';
import MainTitle from '../../components/mainTitle/MainTitle';

const Blog = () => {
	return (
		<div className='mainApp'>
			<MainTitle title='This might be interesting for you' />
			<MainText>
				In our blog you can find useful information about SaaS products, some
				tips and advises.
			</MainText>
			<BlogFilters />
			<ul className='white-cards'>
				<WhiteCard
					imgPath='https://levitatewebdesign.com/wp-content/uploads/2020/03/Building-a-website-the-basics.jpg'
					title='10 Tips for SaaS marketing'
					description='Some cool text is inside this cool article...'
				/>
				<WhiteCard
					imgPath='https://companion.ee/wp-content/uploads/2018/01/website.jpg'
					title='10 Tips for SaaS marketing'
					description='Some cool text is inside this cool article...'
				/>
				<WhiteCard
					imgPath='https://davidcarlehq.com/wp-content/uploads/2013/12/lancement-site-internet.png'
					title='10 Tips for SaaS marketing'
					description='Some cool text is inside this cool article...'
				/>
				<WhiteCard
					imgPath='https://ville-pontivy.bzh/wp-content/uploads/2019/06/img_nouveau_site_web.jpg'
					title='10 Tips for SaaS marketing'
					description='Some cool text is inside this cool article...'
				/>
			</ul>
		</div>
	);
};

export default Blog;
