import { AboutContentContainer } from '../style';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Value from './Value';
import Keywords from './Keywords';

const AboutContent = () => {
  return (
    <AboutContentContainer>
      <Experience />
      <Education />
      <Skills />
      <Value />
      <Keywords />
    </AboutContentContainer>
  )
}

export default AboutContent;