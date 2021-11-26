import { useRouter } from 'next/router';
import Footer from 'components/Footer';

export default function Container({ children }) {
  return (
    <>
      <div className="content">{children}</div> <Footer />
    </>
  );
}
