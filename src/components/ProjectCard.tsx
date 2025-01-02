interface ProjectCardProps {
  title: string
  description: string
  link: string
  technologies: string[]
}

export default function ProjectCard({ title, description, link, technologies }: ProjectCardProps) {
  return (
    <a 
      href={link}
      className="block p-6 rounded-lg border border-gray-700 bg-[#1f2937] hover:border-gray-600 hover:shadow-xl transition-all"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-[#374151] rounded-full text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}