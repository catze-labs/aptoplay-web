import { useRouter } from "next/router";

const TutorialId = () => {
  const router = useRouter();
  const { title } = router.query;

  return <p>Tutorial: {title}</p>;
};

export default TutorialId;
