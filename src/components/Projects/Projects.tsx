import styles from "./Projects.module.css";
import audiophileProject from "../../assets/images/projects/audiophile.png";
import bookmarkProject from "../../assets/images/projects/bookmarkapp.png";
import moviesProject from "../../assets/images/projects/moviesapp.png";
import financeProject from "../../assets/images/projects/finance.png";

type Project = {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Personal Finance App",
    description:
      "A finance dashboard for tracking income, expenses and personal budget.",
    image: financeProject,
    tags: ["React", "TypeScript", "CSS Modules", "Finance"],
    githubUrl: "https://github.com/RobertVai/Personal-finance-app",
    liveUrl: "https://personal-finance-app-nine-tau.vercel.app/",
  },
  {
    title: "Bookmark Manager",
    description:
      "A clean web app for saving, organizing and filtering useful development resources by categories and tags.",
    image: bookmarkProject,
    tags: ["React", "TypeScript", "CSS Modules", "LocalStorage"],
    liveUrl: "https://bookmark-manager-sepia-pi.vercel.app/",
    githubUrl: "https://github.com/RobertVai/Bookmark-manager-app",
  },
  {
    title: "Audiophile",
    description:
      "Responsive e-commerce landing page for audio products with a modern layout, product sections and adaptive design.",
    image: audiophileProject,
    tags: ["React", "TypeScript", "CSS Modules"],
    liveUrl: "https://audiophile-nu-ruby.vercel.app/",
    githubUrl: "https://github.com/RobertVai/Audiophile",
  },
  {
    title: "Entertainment App",
    description:
      "Movie discovery application with search, trending movies, recommendations and a clean dashboard-style interface.",
    image: moviesProject,
    tags: ["React", "TypeScript", "API", "CSS Modules"],
    liveUrl: "https://movies-web-app-gules.vercel.app/",
    githubUrl: "https://github.com/RobertVai/Movies-web-app",
  },
];

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          <span></span>
          Featured Projects
        </h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.project} key={project.title}>
              <div className={styles["image-wrapper"]}>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className={styles["coming-soon"]}>
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>

              <div className={styles.content}>
                <div className={styles.top}>
                  <div>
                    <h3>{project.title}</h3>

                    {project.isComingSoon && (
                      <span className={styles.badge}>Soon</span>
                    )}
                  </div>

                  <div className={styles.links}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live ↗
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>

                <p>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
