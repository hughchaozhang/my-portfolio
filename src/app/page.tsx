import Navbar from '@/components/Navbar'
import Introduction from '@/components/Introduction'
import ProjectCard from '@/components/ProjectCard'

// Sample project data - you can modify this later
const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    link: "#",
    technologies: ["React", "TypeScript", "Tailwind"]
  },
  // Add more projects here
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Introduction />
        
        <section className="px-4 pb-20 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard 
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}