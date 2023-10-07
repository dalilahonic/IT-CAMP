import { useEffect, useState } from 'react';
import './App.css';
import BlogPost from './components/BlogPosts';
import SearchInput from './components/SearchInput';

function App() {
  const posts = [
    {
      title: 'Introduction to JavaScript',
      description:
        "A beginner's guide to JavaScript programming.",
      date: '2023-10-07',
      author: 'John Doe',
      theme: 'Programming',
    },
    {
      title: 'Web Development Tips',
      description:
        'Useful tips and tricks for web development.',
      date: '2023-10-08',
      author: 'Jane Smith',
      theme: 'Web Development',
    },
    {
      title: 'Cooking Adventures',
      description:
        'Exploring the world of culinary delights.',
      date: '2023-10-09',
      author: 'Alice Johnson',
      theme: 'Cooking',
    },
    {
      title: 'Traveling on a Budget',
      description:
        'Tips for budget-friendly travel experiences.',
      date: '2023-10-10',
      author: 'David Williams',
      theme: 'Travel',
    },
    {
      title: 'Introduction to Machine Learning',
      description:
        'Getting started with machine learning concepts.',
      date: '2023-10-11',
      author: 'Emily Brown',
      theme: 'Machine Learning',
    },
    {
      title: 'Healthy Lifestyle Choices',
      description:
        'Tips for maintaining a healthy lifestyle.',
      date: '2023-10-12',
      author: 'Sophia Clark',
      theme: 'Health',
    },
    {
      title: 'The Art of Photography',
      description: 'Capturing moments through photography.',
      date: '2023-10-13',
      author: 'Michael Davis',
      theme: 'Photography',
    },
    {
      title: 'Financial Planning 101',
      description:
        'Managing your finances for a secure future.',
      date: '2023-10-14',
      author: 'Daniel Anderson',
      theme: 'Finance',
    },
    {
      title: 'The World of Literature',
      description:
        'Exploring classic and contemporary literature.',
      date: '2023-10-15',
      author: 'Eleanor White',
      theme: 'Literature',
    },
    {
      title: 'Gardening Tips and Tricks',
      description:
        'Green thumbs share their gardening secrets.',
      date: '2023-10-16',
      author: 'Thomas Green',
      theme: 'Gardening',
    },
    {
      title: 'Fitness and Exercise Routines',
      description:
        'Staying fit and active in your daily life.',
      date: '2023-10-17',
      author: 'Olivia Smith',
      theme: 'Fitness',
    },
    {
      title: 'Exploring Space and Astronomy',
      description:
        'Unveiling the mysteries of the universe.',
      date: '2023-10-18',
      author: 'William Johnson',
      theme: 'Astronomy',
    },
    {
      title: 'Culinary Delights from Around the World',
      description:
        "Taste the world's flavors in your kitchen.",
      date: '2023-10-19',
      author: 'Linda Wilson',
      theme: 'Cooking',
    },
    {
      title: 'The Art of Coding',
      description:
        'Mastering the craft of computer programming.',
      date: '2023-10-20',
      author: 'Robert Martin',
      theme: 'Programming',
    },
    {
      title: "Exploring Nature's Beauty",
      description:
        'Connecting with the wonders of the natural world.',
      date: '2023-10-21',
      author: 'Grace Turner',
      theme: 'Nature',
    },
  ];

  const [inputValue, setInputValue] = useState('');
  const [blogPosts, setBlogPosts] = useState(posts);

  function handleChaneInput(value) {
    setInputValue(value);
  }

  useEffect(() => {
    const filteredValues = posts.filter((el) =>
      el.title
        .toLowerCase()
        .includes(inputValue.toLowerCase())
    );
    setBlogPosts(filteredValues);
  }, [inputValue]);

  function renderBlogPosts(arr) {
    return arr.map((el, index) => {
      return (
        <BlogPost
          key={index}
          title={el.title}
          description={el.description}
          date={el.date}
        />
      );
    });
  }

  console.log(inputValue);
  console.log(blogPosts);

  return (
    <>
      <SearchInput onChangeInput={handleChaneInput} />
      <div className='main'>
        {renderBlogPosts(blogPosts)}
      </div>
    </>
  );
}

export default App;

