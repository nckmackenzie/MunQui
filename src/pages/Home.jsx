import HomeLeft from '../components/home/HomeLeft';
import HomeRight from '../components/home/HomeRight';

export default function Home() {
  return (
    <article className="px-2 md:p-0 h-screen max-w-2xl mx-auto flex">
      <div className="w-full h-1/2 my-auto shadow-lg rounded-md flex flex-col md:flex-row ">
        <HomeLeft />
        <HomeRight />
      </div>
    </article>
  );
}
