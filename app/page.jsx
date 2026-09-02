import ThemeToggle from '../components/ThemeToggle'
import CommandMenu from "../components/CommandMenu";
import ProjectEntry from "../components/ProjectEntry";
import ExperienceEntry from "../components/ExperienceEntry";
import { profile, experience, projects, skills } from "../data/portfolio";


export default function Home() {
  return (
    <div className='mx-2 mt-20'>
    <div className="min-h-[100dvh]   min-w-full bg-ink text-paper">
      <div className='w-full border-white/20 border-r border-l mx-auto max-w-content'>
      {/* Nav — stacks tap targets comfortably on narrow screens */}
      <div className='min-w-full fixed top-0 inset-0'>
     
      </div>
      <main className="mx-auto  max-w-content px-5  py-5 sm:px-8 sm:py-20">
        
        {/* Hero */}
        <section id="about" className="scroll-mt-5  ">
          <div className='flex'>
          <div className=' w-24 h-24 mx-4  border rounded-md col-span-1 border-white/20 p-1'>
            <img src='/akki1.jpeg'/>
           
          </div>
          <div className='flex flex-col items-center justify-center'> 
          <h1 className="font-mono text-2xl font-medium leading-tight text-paper sm:text-3xl">
            {profile.name}
          </h1>
          <div>
          <p className="mt-1 text-sm text-accent">{profile.role}</p>
          </div>
          </div>
          </div>
          <p className="mt-6 text-base leading-relaxed text-muted">{profile.bio}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-sm text-paper underline decoration-surface underline-offset-4 hover:decoration-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-16 scroll-mt-20 sm:mt-24">
          <h2 className="font-mono text-xs uppercase tracking-wide text-muted">Experience</h2>
          <div className="mt-4">
            {experience.map((item) => (
              <ExperienceEntry key={item.company} item={item} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16 scroll-mt-20 sm:mt-24">
          <h2 className="font-mono text-xs uppercase tracking-wide text-muted">Projects</h2>
          <div className="mt-4">
            {projects.map((project) => (
              <ProjectEntry key={project.name} project={project} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16 scroll-mt-20 sm:mt-24">
          <h2 className="font-mono text-xs uppercase tracking-wide text-muted">Skills</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-surface px-3 py-1.5 text-sm text-muted"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-surface pt-6 text-xs text-muted sm:mt-28">
          Built with Next.js and Tailwind CSS.
        </footer>
      </main>
      </div>
    </div>
    </div>
  );
}
