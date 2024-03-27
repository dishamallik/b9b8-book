



function Ebook() {
  // Dummy data for the eBook
  const ebookData = {
    title: 'The Hobbit',
    author: 'John Doe',
    description: "An enchanting adventure set in Middle-earth, where Bilbo Baggins embarks on a journey to reclaim treasure guarded by the dragon Smaug. Tolkien's world-building is unparalleled.",
    coverUrl: 'https://i.ibb.co/2gNQNPc/img6.jpg',
    downloadUrl: 'https://example.com/sample-ebook.pdf',
  };

  return (
    <div className=" container mx-auto lg:flex mt-10 ">
     
      <div>
      <img className="" src={ebookData.coverUrl} alt="Ebook Cover" style={{ maxWidth: '300px', marginBottom: '20px' }} />

      </div>
      
      <div>
      <h1 className="font-bold text-3xl text-blue-400">{ebookData.title}</h1>
      <p className="font-bold mb-5">By {ebookData.author}</p>

      
      <p className="lg:w-72 mb-10 text-gray-600">{ebookData.description}</p>

      
      <a href={ebookData.downloadUrl} download>
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Download eBook
        </button>
      </a>
      </div>
    </div>
  );
}

export default Ebook;
