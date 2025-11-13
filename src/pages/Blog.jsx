function Blog() {
  const blogPosts = [
    {
      image: '/assets/images/1.jpeg',
      category: 'Blockchain',
      date: '2025-10-12',
      dateText: 'Oct 12, 2025',
      title: 'A Class Presentation Sparked..',
      text: 'How one classroom assignment opened the door to a whole new..',
      link: "https://medium.com/@eltonmorden029/a-class-presentation-sparked-my-blockchain-curiosity-84f5244236aa"
    },
    {
      image: '/assets/images/2.jpeg',
      category: 'Blockchain',
      date: '2025-10-15',
      dateText: 'Oct 15, 2025',
      title: 'Cracking Proof of Work: Understanding..',
      text: 'How a confusing mining puzzle turned into one of my biggest lightbulb...',
     link: "https://medium.com/@eltonmorden029/cracking-proof-of-work-the-moment-blockchain-started-making-sense-ae8b704c7e71"
    },
    {
      image: '/assets/images/3.jpeg',
      category: 'Blockchain',
      date: '2025-10-30',
      dateText: 'Oct 30, 2025',
      title: 'Proof of Stake: The Smarter, Greener Consensus',
      text: 'Exploring how Proof of Stake is revolutionizing blockchain with energy efficiency..',
      link: "https://medium.com/@eltonmorden029/proof-of-stake-the-smarter-greener-consensus-398cff4028f6"
    },
    
  ];

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post, index) => (
            <li className="blog-post-item" key={index}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{post.dateText}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>

                  <p className="blog-text">{post.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Blog;
