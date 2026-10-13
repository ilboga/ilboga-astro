// About page content, ported from ilboga-front (data/cv.mjs).
// Paragraphs are trusted HTML, rendered with set:html.
export const cv = {
	title: 'Hello',
	name: 'My name is Michael',
	picture: { src: '/me.webp', alt: 'A pixelate picture of me' },
	summary: [
		'I am an IT manager who believes in an inclusive and accessible web. For years, I have been working on creating interfaces that are not only aesthetically pleasing and easy to use but also ensure equitable access for every user, regardless of their abilities or the devices they use.',
		'I work closely with developers, designers, and product managers to translate ideas into high-quality digital experiences. I enjoy being part of the creative and strategic process, ensuring that the technologies and methods we use enable the team to achieve the desired results.',
		'I am 38 years old, a father of two, and the partner of Domenica, the woman I love. Born and raised in Como, I currently live in Turin, after spending several years in Amsterdam. <br> I hold a degree in Digital Communication from the University of Milan.',
	],
	experienceSummary: [
		'Having held various roles in the IT field has allowed me to build a strong technical and managerial skill set, developed through experiences ranging from front-end and back-end development to leading development teams. This journey has equipped me to successfully handle every aspect of the technology project lifecycle, from strategy definition to implementation, always ensuring a focus on quality, performance, and accessibility.',
		'My experience at <a href="https://www.promemoriagroup.com/" target="_blank">Promemoria group</a> has been instrumental in shaping the expertise I bring today, enabling me to craft innovative solutions, lead teams toward growth, and develop technological products that meet the needs of users and stakeholders from major companies, all while upholding high technical and design standards. This journey has equipped me to excel as a versatile professional, ready to tackle the challenges of an ever-evolving industry.',
	],
	experience: [
		{ position: 'Head of technology', company: 'Promemoria group', duration: 'Jan 2021 - Present' },
		{ position: 'Lead Front end developer', company: 'Promemoria group', duration: 'Oct 2014 - Jan 2021' },
		{ position: 'Full stack developer', company: 'Urbano creativo', duration: 'Nov 2012 - Oct 2014' },
		{ position: 'PHP developer', company: 'Mobgen', duration: 'Jan 2011 - Jul 2012' },
	],
	education: [
		{ institution: 'Università degli Studi di Milano', degree: 'Bachelor of Digital Communication', graduationYear: 2009 },
	],
	contacts: [
		{ label: 'linkedin', href: 'https://linkedin.com/in/michaelbogani' },
		{ label: 'github', href: 'https://github.com/ilboga' },
		{ label: 'old fashion email', href: 'mailto:michaelbogani@gmail.com' },
	],
};
