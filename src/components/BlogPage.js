import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
import tusau from './tusau.jpg';
import kelin from './kelin.jpg';

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: 'The Rich Traditions of Kazakh Nomadic Culture',
      excerpt: 'As a person who moved here from Kazakhstan when I was 10, I’d love the opportunity to introduce you to some of the most meaningful rites of passage and traditions from Kazakh culture, a culture that values family roots, hospitality, and deep respect for heritage.',
      author: 'Alua',
      date: 'May 15, 2024',
      readTime: '6 min read',
      image: tusau,
    },
    {
      id: 2,
      title: 'Behind Closed Doors: The Hidden Struggles of Kelins in Kazakh Families',
      excerpt: 'In Kazakh culture, family is everything. But sometimes, behind traditions and high expectations, there’s pain that is hidden and that no one wants to discuss; especially when it comes to kelins (daughters-in-law).',
      author: 'Alua',
      date: 'April 28, 2024',
      readTime: '5 min read',
      image: kelin,
    },
    {
      id: 3,
      title: 'The Golden Age of the Kazakh Khanate',
      excerpt: 'Exploring the historical significance of the Kazakh Khanate from the 15th to 17th centuries, examining its political structure, territorial expansion, and lasting influence on modern Kazakhstan.',
      author: 'Alua',
      date: 'April 10, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1600861194824-00c3f5a0c4d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      title: 'Kazakh Cuisine: Flavors of the Steppes',
      excerpt: 'A culinary journey through traditional Kazakh dishes, from beshbarmak to kazy, exploring how ingredients and cooking methods reflect the nomadic heritage and harsh climate of Central Asia.',
      author: 'Alua',
      date: 'March 22, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 5,
      title: 'The Silk Road and Kazakhstan\'s Cultural Heritage',
      excerpt: 'How Kazakhstan\'s strategic position along the ancient Silk Road influenced its culture, trade relationships, and role as a crossroads between East and West for over a millennium.',
      author: 'Alua',
      date: 'February 28, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1546188994-07c2071f3c20?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 6,
      title: 'Modern Kazakhstan: Balancing Tradition and Progress',
      excerpt: 'Examining how Kazakhstan has navigated the challenges of modernization while preserving its cultural identity and traditions in the post-Soviet era.',
      author: 'Alua',
      date: 'January 15, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551632436-7a87931f0d7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 7,
      title: 'The Epic of Manas and Kazakh Oral Tradition',
      excerpt: 'Exploring the significance of epic poetry in Kazakh culture, particularly the Manas epic, which represents one of the longest epic poems in the world and embodies the soul of Central Asian peoples.',
      author: 'Alua',
      date: 'December 3, 2023',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 8,
      title: 'Festivals and Celebrations in Kazakhstan',
      excerpt: 'A look at the vibrant calendar of traditional Kazakh festivals, from Nauryz to various seasonal celebrations that connect modern Kazakhs to their ancestral roots.',
      author: 'Alua',
      date: 'November 18, 2023',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 9,
      title: 'The Role of Horses in Kazakh Culture',
      excerpt: 'Horses have been central to Kazakh identity for centuries, influencing everything from transportation and warfare to music and spiritual beliefs. This article explores the deep cultural connection.',
      author: 'Alua',
      date: 'October 5, 2023',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1605264509634-e5b6e4e5c9c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 10,
      title: 'Language Preservation in Modern Kazakhstan',
      excerpt: 'How the Kazakh language has maintained its vitality despite historical challenges and the ongoing efforts to preserve and promote it in the digital age.',
      author: 'Alua',
      date: 'September 12, 2023',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1535295972055-1f71e923a16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 11,
      title: 'Kazakh Traditional Architecture and Yurts',
      excerpt: 'Exploring the unique architectural traditions of the Kazakhs, focusing on the mobility, functionality, and cultural significance of traditional dwellings like the yurt.',
      author: 'Alua',
      date: 'August 21, 2023',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 12,
      title: 'The Influence of Shamanism on Kazakh Spiritual Life',
      excerpt: 'Examining the ancient shamanic traditions that continue to influence Kazakh spiritual practices, rituals, and cultural beliefs alongside other religious traditions.',
      author: 'Alua',
      date: 'July 8, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <div className="blog-page">
      <div className="container">
        <h1 className="page-title">My Blog on Kazakh Culture</h1>
        <div className="articles-grid">
          {articles.map(article => (
            <Link to={`/blog/${article.id}`} key={article.id} className="article-link">
              <article className="article-card">
                <div className="image-container">
                  <img src={article.image} alt={article.title} className="featured-image" />
                </div>
                <div className="content">
                  <h2 className="title">{article.title}</h2>
                  <p className="excerpt">{article.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;