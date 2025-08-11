import Card from "@/components/Card";
import CardGrid from "@/components/CardGrid/CardGrid";
import PillButton from "@/components/PillButton";

function index() {
  return (
    <div>
      <PillButton onClick={() => alert("클릭됨")} />

      <CardGrid as="ul" minCol={220} gap={20}>
        <li><Card
          content="긴 텍스트 테스트 긴텍스트 테스트"
          title="테스트"
          type="image"
          linkSrc="http://aaa.com"
        /></li>
        <li><Card
          content="긴 텍스트 테스트 긴텍스트 테스트"
          title="테스트"
          type="image"
          linkSrc="http://aaa.com"
        /></li>
        <li><Card
          content="긴 텍스트 테스트 긴텍스트 테스트"
          title="테스트"
          type="image"
          linkSrc="http://aaa.com"
        /></li>
        <li><Card
          content="긴 텍스트 테스트 긴텍스트 테스트"
          title="테스트"
          type="image"
          linkSrc="http://aaa.com"
        /></li>
        <li><Card
          content="긴 텍스트 테스트 긴텍스트 테스트"
          title="테스트"
          type="image"
          linkSrc="http://aaa.com"
        /></li>
        <li><Card
          content="긴 텍스트 테스트 긴텍스트 테스트"
          title="테스트"
          type="image"
          linkSrc="http://aaa.com"
        /></li>
        <li><Card
          content="긴 텍스트 테스트 긴텍스트 테스트"
          title="테스트"
          type="image"
          linkSrc="http://aaa.com"
        /></li>
        <li><Card
          content="긴 텍스트 테스트 긴텍스트 테스트"
          title="테스트"
          type="image"
          linkSrc="http://aaa.com"
        /></li>
      </CardGrid>
    </div>
  );
}
export default index;
