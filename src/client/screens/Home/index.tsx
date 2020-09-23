import React from 'react'
import cx from 'classnames'
import Layout from 'components/Layout'
import Carousel from 'components/Carousel'
import FeatureColumns from 'components/FeatureColumns'
import { clientLogos, servicesIcons, servicesItems } from './content'
import { projectList } from '../Projects/content'
import styles from './Home.m.sass'

const carouselItems = projectList.map((project) => {
  return {
    name: project.name,
    source: project.source,
    link: `/projects?${project.name}`
  }
})

const Home: React.FC = () => {
  return (
    <Layout>
      <div className={styles.homePage}>
        <div className={styles.content}>
          <div className={styles.contentContainer}>
            <div className={styles.landing}>
              <div className={styles.landingContainer}>
                <div className={styles.landingContent}>
                  <h3>Experience, Expertise, and Resources</h3>
                  <p>
                    <strong>Ingelmo Associates</strong> can support a broad
                    range of design and engineering services.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className={styles.portfolio}>
              <div className={styles.portfolioContainer}>
                <Carousel carouselItems={carouselItems} />
              </div>
            </div> */}

            <div className={styles.clients}>
              <div className={styles.clientsContainer}>
                {clientLogos.map((client, index) => (
                  <div className={styles.clientLogo} key={index}>
                    <img src={client.source} />
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.personal}>
              <div className={styles.personalContainer}>
                <div className={styles.personalContent}>
                  <h3>
                    Ingelmo Associates is a 100% Hispanic-owned
                    multi-disciplinary structural and engineering consulting
                    firm based in Coral Gables, Florida. We have a proven record
                    of more than 30 years of work completed on time and on
                    budget for an extensive list of satisfied clients.
                  </h3>
                </div>
              </div>
            </div>

            <div className={styles.services} id="services">
              <div className={styles.servicesContainer}>
                <div className={styles.servicesTitle}>
                  <div className={styles.titleLine} />
                  <h2>OUR SERVICES</h2>
                  <div className={styles.titleLine} />
                </div>
                <div className={styles.servicesIcons}>
                  {servicesIcons.map((icon, index) => (
                    <div className={styles.servicesIcon} key={index}>
                      <div className={styles.icon}>
                        <div
                          className={cx(styles.iconBackground, styles.red)}
                        />
                        <div
                          className={cx(styles.iconBackground, styles.white)}
                        />
                        <img src={icon.source} />
                      </div>
                      <div className={styles.text}>
                        <h4>{icon.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.servicesList}>
                  <FeatureColumns items={servicesItems} />
                </div>
              </div>
            </div>

            <div className={styles.about} id="about">
              <div className={styles.aboutContainer}>
                <div className={styles.aboutTitle}>
                  <div className={styles.titleLine} />
                  <h2>ABOUT US</h2>
                  <div className={styles.titleLine} />
                </div>
                <div className={styles.aboutCompany}>
                  <div className={styles.aboutImage}>
                    <img src={'images/img_paul.png'} />
                  </div>
                  <div className={styles.aboutText}>
                    <p>
                      Paul Ingelmo, P.E., the principal and owner of Ingelmo
                      Associates, has a successful and long history in all
                      aspects of Civil and Structural Engineering. Mr. Ingelmo
                      is registered in a number of states, including Florida and
                      California. Additionally, he is a Florida certified
                      general contractor, a Florida special inspector and a
                      Florida certified structural plans examiner.
                    </p>
                    <p>
                      We are committed to quality work and successful outcomes.
                      We focus on providing personal attention and being
                      responsive to our clients' needs and expectations. Ingelmo
                      Associates’ repeat business and volume of referrals speaks
                      to our customer-centered approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.location}>
              <div className={styles.locationContainer}>
                <div className={styles.locationTitle}>
                  <div className={styles.titleLine} />
                  <h2>LOCATION</h2>
                  <div className={styles.titleLine} />
                </div>
                <div className={styles.locationText}>
                  <p>
                    Our Coral Gables office is centrally located, offering easy
                    access to work throughout the South Florida area. We look
                    forward to assisting you with your engineering needs.
                  </p>
                </div>
                <div className={styles.map}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.7893004911825!2d-80.26181204870628!3d25.744480483564264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b796ae8852a1%3A0x39720413f5ac5c44!2s250%20Catalonia%20Ave%2C%20Coral%20Gables%2C%20FL%2033134!5e0!3m2!1sen!2sus!4v1595357329114!5m2!1sen!2sus"
                    width={'100%'}
                    height={'450px'}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
