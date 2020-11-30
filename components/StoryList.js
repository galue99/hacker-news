import Link from 'next/link';

const StoryList = ({ stories }) => (
  <div className="story-list">
    {stories.map((story) => (
      <div className="story" key={story.id} key={story.id}>
        <h3 className="story">
          <a>{story.title}</a>
        </h3>
        <div className="story-details">
            <span>{story.points || 0} points </span>
            <Link href={`/story?id=${story.id}`}>
                <a>{story.comments_count || 0} comments</a>
            </Link>
        </div>
      </div>
    ))}
    <style jsx>{`
        .story-list {
            padding: 0 1em;
        }
        .story {
            padding: 0 1em;
        }
        .story-title {
            font-size: 1rem;
            font-weight: 400;
            margin: 0;
            margin-bottom: 0.5em;
        }
        .story-title a {
            color: #333;
            text-decoration: none;
        }
        .story-title a:hover{
            text-decoration: none;
        }
        .story-details {
            font-size: 0.8rem;
            font-weight: bold;
        }
        .story-details a {
            color: #6600ff;
            text-decoration: none;
        }
    `}</style>
  </div>
);

export default StoryList;
