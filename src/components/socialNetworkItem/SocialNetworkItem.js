import SocialNetworkSvg from "./SocialNetworkSvg";

const SocialNetworkItem = ({hrefLink, type}) => {
	return (
		<li>
			<a href={hrefLink}>
				<SocialNetworkSvg type={type}/>
			</a>
		</li>
	)
}

export default SocialNetworkItem;