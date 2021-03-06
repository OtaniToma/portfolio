import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TextBlock from '../components/textblock'
import Skills from '../components/skills'
import CompanyInfo from '../components/companyInfo'

export default ({ location }) => (
  <Layout>
  <SEO
    pagetitle="About Me"
    pagedesc="About Me page on tomaotani.com"
    pagepath={location.pathname}
  />
    <TextBlock heading={"Carieer Objective"} pagetop={true}>
      <p>
        <strong>Front-end Web Developer position</strong> with professional experience in web development in a design agency or a software company. Seeking to utilize my skills in front-end web development.
      </p>
    </TextBlock>

    <TextBlock heading={"What I can"}>
      <Skills
        heading={"Language"}
        icons={['html', 'css', 'javascript']}
        description={[
          'Utilize modern CSS3 features (Flexbox, grid, animation, gradient, etc.)',
          'Methodology: BEM, Preprocessor: SCSS',
          'JavaScript ES6'
        ]}
      />
      <Skills
        heading={"Framework"}
        icons={['react', 'redux', 'gatsby']}
        description={[
          'Build reusable components with React Hooks',
          'Use Redux (re-ducks design pattern)',
          'Use Gatsby.js to build fast static website'
        ]}
      />
      <Skills
        heading={"CMS"}
        icons={['wordpress']}
        description={[
          'Set up development environment with MAMP and VirtualHostX',
          'Build original design templates and add custom fields with Advanced Custom Fields Pro'
        ]}
      />
      <Skills
        heading={"Others"}
        icons={['git', 'github', 'materialui', 'bootstrap', 'illustrator', 'photoshop', 'figma']}
        description={[
          'Use git version control system with team',
          'Use graphic softwares to work with design team and optimize data for website'
        ]}
      />
      <Skills
        heading={"Now Loading..."}
        icons={['typescript', 'firebase', 'graphql', 'pwa']}
        description={[
          'Catching up with the modern technologies day by day!'
        ]}
      />
    </TextBlock>

    <TextBlock heading={"Work Experience"}>
      <CompanyInfo
        jobtitle="Junior Web Developer"
        company="Signals Design Group"
        url="https://www.signals.ca/"
        period="Sep. 2019 - June 2020"
        location="Vancouver, Canada"
        time="Full-time & Part-time"
        description={[
          'Build responsive websites with modern HTML, CSS and JavaScript',
          'Create WordPress custom templates from scratch',
          'Utilize popular libraries and frameworks (Next.js, GSAP, ScrollMagic, Barba, Bodymovin, etc.) to create interactive user interface',
          'Closely Work with design and management team to realize functionality, browser compatibility, and usability of the website along with the timeline',
          'Add functions, replace assets, and edit text contents quickly upon client requests',
          'Create HTML email templates for MailChimp, Spark, and Lasso'
        ]}
      />
      <CompanyInfo
        jobtitle="PR Manager & In-house Designer"
        company="KUMONOS Corporation"
        url="http://kumonos.info"
        period="Apr. 2015 - Aug. 2018"
        location="Osaka, Japan"
        time="Full-time"
        description={[
          'Planned and managed own corporate website and blog',
          'Designed promotional materials (brochures, flyers, exhibition booth, etc.) with Illustrator and Photoshop',
          'SEO optimization and online marketing with Google Analytics and Ads',
          'Business trips: US, Germany, Hong Kong, Vietnam, Malaysia and Indonesia',
          'Market research in Vietnam for three months'
        ]}
      />
      <CompanyInfo
        jobtitle="Intern"
        company="Ministry of Economy, Trade and Industry (The Government of Japan)"
        url='https://www.meti.go.jp/english/'
        period="Sep. 2017 - Feb. 2018"
        location="Ho Chi Minh City, Vietnam & Tokyo, Japan"
        description={[]}
      />
    </TextBlock>

    <TextBlock heading={"Education"}>
      <dl>
        <dt>British Columbia Institute of Technology (BCIT)</dt>
        <dd>Certificate, New Media Design and Web Development</dd>
        <dt>Udemy</dt>
        <dd>Completed The Web Developer Bootcamp</dd>
        <dt>TECH::CAMP</dt>
        <dd>Completed Ruby & Ruby on Rails Bootcamp for Begginers</dd>
        <dt>Osaka Sangyo University</dt>
        <dd>Bachelor of Engineering, Architecture and Environmental Design</dd>
      </dl>
    </TextBlock>

    <TextBlock heading={"Hobbies"}>
      <dl>
        <dt>Cycling</dt>
        <dd>
          More than 15 years with specially shaped "Recumbent bike".
        </dd>
        <dt>Travelling</dt>
        <dd>
          Been to 28 countries since 2011. "The number of countries I traveled must be larger than my age."
        </dd>
        <dt>Aviation Photography</dt>
        <dd>Took photos from Cessna 172 to Airbus A380 in more than 40 airports around the world.</dd>
      </dl>
    </TextBlock>

  </Layout>
)