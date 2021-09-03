import Link from 'next/link'
// import './PublicPageFooter.css'

const year = new Date().getFullYear()

const PublicPageFooter = () => {
	const mappedGetToKnowUsLinks = getToKnowUsLinks.map(mapFooterColumnLinks)
	const mappedConnectLinks = connectLinks.map(mapFooterColumnLinks)
	const mappedGetInvolvedLinks = getInvolvedLinks.map(mapFooterColumnLinks)

	return (
		<footer className="public-page-footer">
			Footer
		</footer>
	)
}

const getToKnowUsLinks = [
	{
		title: 'about us',
		url: '/#about',
	},
	{
		title: 'our services',
		url: '/#services',
	},
]
const connectLinks = [
	{
		title: 'contact us',
		url: '/#contact',
	},
]
const getInvolvedLinks = [
	{
		title: 'volunteer',
		url: '/#contact',
	},
	{
		title: 'partnership',
		url: '/#contact',
	},
]

const mapFooterColumnLinks = (link, index) => {
	const {title, url} = link || {}

	return (
		<Link
			key={index}
			title={title}
			href={url}
			passHref
		>
			{title}
		</Link>
	)
}

export default PublicPageFooter
