import Header from '@/components/Header';
import SearchVocab from '@/components/SearchVocab';
import VocabList from '@/components/VocabList';
import { LoadingOverlay } from '@/components/Overlay';

export default function Home() {
  return (
    <>
      <LoadingOverlay />
      <Header />
      <div
        className={`container relative flex min-h-[calc(100vh-70px)] flex-col pb-[20px] pt-[30px]`}
      >
        <SearchVocab />
        <VocabList />
      </div>
    </>
  );
}
