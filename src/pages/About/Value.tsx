import * as S from './style';
import AnimatedSection from './AnimatedSection';

const Value = () => {
  return (
    <AnimatedSection>
      <S.Section>
        <S.SectionTitle>What I Value</S.SectionTitle>
        <S.ValueContent>
          저는 기능 구현보다 <strong>구조와 흐름을 먼저 고민하는 개발자</strong>입니다. <br />
          무엇을 만들 것인지보다, 왜 필요한지를 이해하는 것이 중요하다고 생각합니다.<br />
          <br />
          읽기 쉬운 코드와 유지보수가 쉬운 UI를 만드는 것을 목표로 하며,<br />
          혼자만 이해하는 코드보다 <strong>함께 작업할 수 있는 구조</strong>를 지향합니다.<br />
          <br />
          또한 새로운 도메인에 대해 문서와 자료를 기반으로 학습하며,<br />
          문제를 정의하고 해결해 나가는 과정을 중요하게 생각합니다.
        </S.ValueContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Keywords</S.SectionTitle>
        <S.ValueContent>
          Problem-first Thinking · Structured Communication · Frontend Development ·<br />
          Academic Research · Project Management · Learning-oriented
        </S.ValueContent>
      </S.Section>
    </AnimatedSection>
  )
}

export default Value;