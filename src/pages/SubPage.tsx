import { useParams, Navigate } from 'react-router-dom';
import Page from '../components/Page';
import { pages } from '../config/pagesContent';

export default function SubPage() {
  const { slug } = useParams();
  const data = slug ? pages[slug] : undefined;
  if (!data) return <Navigate to="/" replace />;
  return <Page data={data} />;
}
