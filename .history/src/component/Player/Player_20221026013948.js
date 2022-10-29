import React from 'react';

const Player = (props) => {
    return (
        <div>
            <iframe
                            width="100%"
                            class="aspect-video"
                            src={props.link}
                            title="Some video title"
                            frameborder=""
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
    );
};

export default Player;