function Search() {
  const blogPosts = [
    {
      title: 'The Art of Programming',
      subtitle: 'Mastering the Craft',
      date: '2023-10-06',
    },
    {
      title: 'JavaScript Fundamentals',
      subtitle: "A Beginner's Guide",
      date: '2023-10-07',
    },
    {
      title: 'Web Development Trends',
      subtitle: "What's on the Horizon",
      date: '2023-10-08',
    },
    {
      title: 'Data Structures Demystified',
      subtitle: 'From Arrays to Trees',
      date: '2023-10-09',
    },
    {
      title: 'Building Responsive Websites',
      subtitle: 'Design for All Devices',
      date: '2023-10-10',
    },
  ];
  let searchFilter = 'Websites';

  const filteredArr = blogPosts.filter((el) =>
    el.title
      .toLowerCase()
      .includes(searchFilter.toLowerCase())
  );

  // console.log(filteredArr);

  return (
    <div className='parent'>
      {filteredArr.map((el, index) => {
        return (
          <div key={index}>
            <p>{el.title}</p>
          </div>
        );
      })}
      {/* {blogPosts.map((el, index) => {
        return (
          <div classname='blogPost' key={index}>
            <p>{el.title}</p>
            <p>{el.subtitle}</p>
            <p>{el.date}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default Search;
