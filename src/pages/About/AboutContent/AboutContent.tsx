import * as S from '../style';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Value from './Value';
import Keywords from './Keywords';

const AboutContent = () => {
  return (
    <div>
      <Experience />
      <Education />
      <Skills />
      <Value />
      <Keywords />
    </div>
  )
}

export default AboutContent;