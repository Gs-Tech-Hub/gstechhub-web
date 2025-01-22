import React from 'react';
import PostStyle2 from '../Post/PostStyle2'; 
import PostStyle3 from '../Post/PostStyle3'; 

export default function PostGridCustom({ data }) {
    const posts = data && data.data ? data.data : [];
    if (!Array.isArray(posts) || posts.length === 0) {
        return <div>No recent post available Now.</div>;
    }
    return (
        <div className="cs_grid_style_1">
            {posts.map((post, index) => (
                <div key={index}>
                    {index === 0 ? (
                        <PostStyle2
                            date={post.attributes.createdAt} 
                            title={post.attributes.Title}
                            thumbnailSrc={`http://localhost:1337${post.attributes.coverphoto.data.attributes.url}`}
                            href={"/"} 
                        />
                    ) : (
                        <PostStyle3
                            date={post.attributes.createdAt}
                            title={post.attributes.Title}
                            thumbnailSrc={`http://localhost:1337${post.attributes.coverphoto.data.attributes.url}`}
                            href={"/"} 
                        />
                    )}
                </div>
            ))}
        </div>
    );
}