import './about.scss';
import { SiJavascript, SiMysql, SiNextdotjs } from 'react-icons/si';
import {
	FaBootstrap,
	FaCss3,
	FaGit,
	FaHtml5,
	FaNode,
	FaReact,
	FaSass,
} from 'react-icons/fa';
import { SlSocialGithub } from 'react-icons/sl';

function About() {
	return (
		<>
			<h1>About</h1>
			<section className="tech-stack">
				<h2>Tech Stack</h2>
				<div className="tech-icons-wrapper">
					<FaHtml5 size={'3rem'} title={'HTML5'} className={'tech-icon'} />
					<FaCss3 size={'3rem'} title={'CSS3'} className={'tech-icon'} />
					<SiJavascript
						size={'3rem'}
						title={'JavaScript'}
						className={'tech-icon'}
					/>
					<FaBootstrap
						size={'3rem'}
						title={'Bootstrap'}
						className={'tech-icon'}
					/>
					<FaGit size={'3rem'} title={'Git'} className={'tech-icon'} />
					<FaSass size={'3rem'} title={'Sass'} className={'tech-icon'} />
					<FaReact size={'3rem'} title={'React.js'} className={'tech-icon'} />
					<FaNode size={'3rem'} title={'Node.js'} className={'tech-icon'} />
					<SiNextdotjs
						size={'3rem'}
						title={'Next.js'}
						className={'tech-icon'}
					/>
					<SiMysql size={'3rem'} title={'MySQL'} className={'tech-icon'} />
					<SlSocialGithub
						size={'3rem'}
						title={'MySQL'}
						className={'tech-icon'}
					/>
				</div>
			</section>
		</>
	);
}
export default About;
