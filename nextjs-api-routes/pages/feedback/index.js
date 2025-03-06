import { buildFeedbackPath, extractFeedback } from "../api/feedback";

export default function FeedbackPage(props) {
  const { feedbackItems } = props;

  return (
    <ul>
      {feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

// getServerSideProps 를 써도 상관없음,.
export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}
