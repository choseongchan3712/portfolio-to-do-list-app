import { Helmet } from "react-helmet-async";

interface PageTitleType {
  title: string;
}

const PageTitle = ({ title }: PageTitleType) => {
  return (
    <Helmet>
      <title>{title} | 할일목록</title>
    </Helmet>
  );
};

export default PageTitle;
