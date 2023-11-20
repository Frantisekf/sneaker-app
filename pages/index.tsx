import MainPanel from "@/components/MainPanel/MainPanel";


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-12">
      <div className="z-10 w-full max-w-7xl lg:flex items-center justify-between text-sm">
        <h1>Your collection</h1>
        <div className="fixed bottom-0 left-0 flex w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
         {/* search component */} {/* add component */}
         {/* filter component */}
        </div>
      </div>
  
      <MainPanel />
      
      <div className="mb-8 text-center w-full">
        <span onClick={scrollToTop}>Scroll to top</span>
      </div>
    </main>
  );
}
