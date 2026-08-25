import { Helmet } from 'react-helmet';
import '../assets/css/BlogPage.css'
import img from '../assets/images/Blog1_img1.jpg';
import img2 from '../assets/images/b1.png';
import { Link } from 'react-router-dom';

const BlogPage = () => {
 
  const blogPosts = [
    {
      id: 1,
      title: 'Affordable UAE to Kuwait Customs Clearance',
      description: 'Get affordable UAE to Kuwait Customs Clearance with reliable documentation, cargo handling, and smooth cross-border shipment support...',
      metaTitle:'Affordable UAE to Kuwait Customs Clearance',
      metaDescription:'Get affordable UAE to Kuwait Customs Clearance with reliable documentation, cargo handling, and smooth cross-border shipment support.',
      thumbnail: img,
      date: 'August 25, 2026',
      url: '/blog/uae-to-kuwait-customs-clearance'
    },
    {
      id: 2,
      title: 'Dubai to Saudi Household Moving Services: Making Cross-Border Moves Easier',
      description: 'Moving your household from Dubai to Saudi Arabia can be an exciting new chapter, but the logistics behind an international relocation can feel overwhelming. Furniture, appliances........',
      metaTitle:'Dubai to Saudi Household Moving Services | WeMovers',
      metaDescription:'Explore Dubai to Saudi Household Moving Services for packing, transportation, customs support, storage, and reliable cross-border household relocation',
      thumbnail: img2,
      date: 'August 25th, 2026',
      url: '/blog/dubai-to-saudi-household-moving-services'
    },
  ];
  const titles = blogPosts.map(post => post.metaTitle).join(' | ');
  const descriptions = blogPosts.map(post => post.metaDescription).join(' ');

  return (
    <>
    <Helmet>
        <title>{titles}</title>
        <meta name="description" content={descriptions.slice(0, 150) + '...'} />
      </Helmet>
    <div className="blog-page">
      <div className="blog-header">
        <h1>
          <a href="/blogs" className="recent-blogs-link">Recent Blogs</a>
        </h1>
        <p className="blog-subtitle">Stay updated with our latest articles</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-thumbnail">
              <img src={post.thumbnail} alt={post.title} />
            </div>
            <div className="blog-content">
              <h3 className="blog-title" style={{textAlign:'justify'}}>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-description" style={{textAlign:'justify'}}>{post.description}</p>
              <Link to={post.url} className="read-more-btn">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogPage;