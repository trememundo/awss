import Image from 'next/image';

const CuratedPicks: React.FC = () => {
  const curatedPicks = [
    {
      title: 'Best Seller',
      image: 'https://img.freepik.com/foto-gratis/modelo-mujer-joven-abrigo-largo-cuero-negro_1303-21160.jpg?t=st=1732590352~exp=1732593952~hmac=19229b33889e648135ef0fc23cc08e74937ad98f08a96c5445ceb5025a4d2ed4&w=1380',
      link: '#',
    },
    {
      title: 'Shop Men',
      image: 'https://img.freepik.com/foto-gratis/retrato-hombres-negocios-guapos-elegantes_155003-6005.jpg?t=st=1732590657~exp=1732594257~hmac=6590bdc01b5d3c9983b7b2668b0a312b73aeb21425f00162572cbe35edbac3d6&w=1380',
      link: '#',
    },
    {
      title: 'Shop Women',
      image: 'https://img.freepik.com/foto-gratis/modelo-mujer-joven-abrigo-cuero-largo_1303-21152.jpg?t=st=1732590583~exp=1732594183~hmac=1dd00ed8691453e8a4086a359f6cf2054af511ed6f40e15d9dde2759b8b3dcd8&w=1380',
      link: '#',
    },
    {
      title: 'Shop Casual',
      image: 'https://img.freepik.com/foto-gratis/moda-pareja-posando-moda_155003-3402.jpg?t=st=1732590701~exp=1732594301~hmac=cceb55d42fea4145f74e132a59dc1d4755e3974888c3e30e5ec5bf5d0dd53a4e&w=1380',
      link: '#',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Curated Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curatedPicks.map((pick, index) => (
            <div key={index} className="relative group">
              <Image
                src={pick.image}
                alt={pick.title}
                className="rounded-lg w-full h-60 object-cover"
                layout="responsive"
                width={500} 
                height={300} 
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={pick.link}
                  className="text-white bg-black px-4 py-2 rounded font-bold"
                  aria-label={`Ver ${pick.title}`}
                >
                  {pick.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedPicks;
