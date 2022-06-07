import Header from './Header';
import HomeForm from './HomeForm';
export default function HomeRight() {
  return (
    <div className="flex-1 bg-gray-50 p-2 flex flex-col">
      <Header />
      <div className="my-auto">
        <HomeForm />
      </div>
    </div>
  );
}
