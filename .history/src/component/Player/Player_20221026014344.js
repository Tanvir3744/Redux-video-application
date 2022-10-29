import React from 'react';

const Player = (props) => {
    console.log(props)
    return (
        <div>
            <iframe
                            width="100%"
                            class="aspect-video"
                            src={props.link}
                            title={props.title}
                            frameborder=""
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
        </div>
    );
};

export default Player;