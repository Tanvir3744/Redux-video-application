import React from 'react';

const Player = ({ link, title }) => {
    console.log(link)
    return (
        <div>
            <iframe
                            width="100%"
                            class="aspect-video"
                            src={link}
                            title={title}
                            frameborder=""
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
    );
};

export default Player;