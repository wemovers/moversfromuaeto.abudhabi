import { Helmet } from 'react-helmet';
import '../assets/css/BlogPage.css'
import img from '../assets/images/blog1.jpg';
import img2 from '../assets/images/cargo-1.jpg';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  // Sample blog data - in a real app, this would come from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: 'Shipping Personal Effects Internationally in Dubai: Best Relocation Services',
      description: 'If you are making plans to relocate to another continent or international region and are looking for a problem-free move overseas, you have stopped here.....',
      metaTitle:'International Personal Effects Shipping Dubai',
      metaDescription:'Safe, affordable, and hassle-free shipping of personal effects in Dubai with expert packing, customs clearance, and door-to-door delivery.',
      thumbnail: img,
      date: 'August 28th, 2025',
      url: '/blog/shipping-personal-effects-internationally-in-dubai'
    },
    {
      id: 2,
      title: 'What Are the Best Ways to Move Personal Effects Internationally',
      description: 'Moving overseas is thrilling; however, it may also feel disturbing. You want your non-public things—garments, fixtures, gadgets......',
      metaTitle:'Best Ways to Move Personal Effects Internationally ',
      metaDescription:'Move personal belongings overseas with air, sea, courier, or movers in the UAE. Get packing tips, customs guidance & cost-saving strategies for stress-free relocation.',
      thumbnail: img2,
      date: 'August 28th, 2025',
      url: '/blog/best-ways-to-move-personal-effects'
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