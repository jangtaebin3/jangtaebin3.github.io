import { useScroll, useTransform, motion } from 'framer-motion';
import { 
  Container, HeroSection, Overlay, ContentWrapper, 
  Title, SubTitle, ScrollIndicator, DummySection 
} from './style';
import backgroundImg from '../../assets/images/background.jpg';
import { FaChevronDown } from 'react-icons/fa';

export default function Home() {
  const { scrollY } = useScroll();
  
  // Parallax and fade out effects for text elements
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const opacityScroll = useTransform(scrollY, [0, 100], [1, 0]);

  // Framer-motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <Container>
      <HeroSection $bgImage={backgroundImg}>
        <Overlay />
        
        <ContentWrapper 
          style={{ y: yText, opacity: opacityText }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Title variants={itemVariants}>
            Taebin Jang
          </Title>
          <SubTitle variants={itemVariants}>
            Transforming Ideas into Reality
          </SubTitle>
        </ContentWrapper>
        
        <ScrollIndicator style={{ opacity: opacityScroll }}>
          <span>Scroll Down</span>
          <FaChevronDown />
        </ScrollIndicator>
      </HeroSection>

      <DummySection>
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>
          <p>
            배경 이미지가 화면 상단에 고정된 채(Parallax 디자인) 스크롤되어 내려오는 효과를 확인할 수 있는 공간입니다. 이 섹션은 포트폴리오의 실질적인 내용(About 등)으로 대체될 수 있습니다.
          </p>
        </motion.div>
      </DummySection>
    </Container>
  );
}