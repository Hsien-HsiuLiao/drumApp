import Guzheng from './components/guzheng';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Guzheng</h1>
      <Guzheng />
    </main>
  );
};

export default Home;
