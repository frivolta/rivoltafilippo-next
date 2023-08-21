import { IoIosDownload, IoIosAt } from 'react-icons/io';
import { AboutWrapper, AboutPageTitle, AboutDetails } from './style';
import Button from '../../components/Button/button';

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  const downloadLinkUrl = '/downloads/filippo-rivolta-cv-2023.pdf';

  return (
    <AboutWrapper>
      <AboutDetails>
        <AboutPageTitle>
          <h2>
            As a strong believer in <span>Software Craftmanship</span>, I’m
            always looking for <span>new things to learn</span>, with Google as
            my teacher and code editor as my notebook.
          </h2>
        </AboutPageTitle>
        <p>
          Hey there! I am a <b>highly motivated</b> and experienced{' '}
          <b>Front-end Developer</b> with a proven track record of creating
          exceptional user experiences. I currently work at the{' '}
          <b>London Stock Exchange Group</b>, where I lead the development and
          implementation of a cloud-based trading platform. I have a passion for{' '}
          <b>Full-stack development</b>, this allows me to provide valuable
          contributions to both front-end and back-end projects. My background
          in <b>UI design</b> gives me a unique perspective and design-minded
          approach to my development work. I am a<b> team player</b> and take
          pride in <b>leading projects</b> and <b>mentoring</b> other developers
          to achieve success. I have a strong background in various programming
          languages, including{' '}
          <i>JavaScript, TypeScript, HTML/CSS, Java, Golang, SQL, and PHP</i>.
          This allows me to approach projects with a versatile skill set, and to{' '}
          <b>easily adapt to new technologies</b>.
          <br />
          <br />I am always seeking new opportunities to expand my knowledge and
          skills, and I am excited to join a team of motivated and passionate
          individuals. As a social and outgoing person, I thrive in
          collaborative environments and enjoy working closely with others to
          achieve common goals. In my free time, I love to stay active and enjoy
          outdoor activities such as wakeboarding and snowboarding, as well as
          experimenting in the kitchen with new recipes. I am excited to bring
          my skills and passion to a new team and contribute to the success of
          the company."
        </p>
        <h3>
          For more info contact me or download my cv following the links below!
        </h3>
        <br />
        <div style={{ display: 'flex' }}>
          <a href={downloadLinkUrl} target="_blank">
            <Button
              className="no-space"
              title="Download CV "
              type="button"
              iconPosition="left"
              icon={<IoIosDownload />}
            />
          </a>
          <br />
          <a href="mailto:rivoltafilippo@gmail.com">
            <Button
              title="Contact me"
              type="button"
              iconPosition="left"
              icon={<IoIosAt />}
            />
          </a>
        </div>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
