import React from 'react'
import Layout from 'components/Layout'
import Project from 'components/Project'
import { projectList } from './content'
import styles from './Projects.m.sass'

export interface Project {
  name: string
  source: string
  images: {
    name: string
    source: string
  }[]
}

const Projects: React.FC = () => {
  return (
    <Layout>
      <div className={styles.projectsPage}>
        <div className={styles.content}>
          <div className={styles.contentContainer}>
            <div className={styles.projects}>
              <div className={styles.projectsContainer}>
                {projectList.map((project, index) => (
                  <Project project={project} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
