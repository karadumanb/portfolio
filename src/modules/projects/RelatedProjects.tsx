import Image from 'next/image';

const RelatedProject = {
	title: 'Related Projects',
	Projects: [
		{
			id: 1,
			title: 'Mobile UI',
			img: '/images/ui-project-2.jpg',
		},
		{
			id: 3,
			title: 'Web Application',
			img: '/images/mobile-project-1.jpg',
		},
		{
			id: 3,
			title: 'UI Design',
			img: '/images/web-project-1.jpg',
		},
		{
			id: 4,
			title: 'Kabul Mobile App UI',
			img: '/images/mobile-project-2.jpg',
		},
	],
};

function RelatedProjects() {
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{RelatedProject.Projects.map((project) => {
					return (
						<Image
							src={project.img}
							className="rounded-xl cursor-pointer"
							width="400"
							height="400"
							alt={project.title}
							key={project.id}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default RelatedProjects;
